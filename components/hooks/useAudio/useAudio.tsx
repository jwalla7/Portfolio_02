"use client";

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @description
 * Provides an easy way to control audio playback.
 *
 * It creates an AudioContext, connecting it to an HTMLAudioElement.
 *
 * It controls the audio playback, so that this logic can be reused across different components in the application.
 */

import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { Track } from "@audius/sdk/dist/sdk/api/generated/default/models/Track";
import { useAudioProps } from "./useAudioProps";
import { LRUCache, LRUCacheProps } from "@/components/cache/audio/audioLRUCache";
import { useAudioVisualizerContext } from "@/components/context/audio/AudioVisualizerContext";
import debounce from "lodash/debounce";
import useSWR from "swr";
// import { d } from "@tanstack/react-query-devtools/build/legacy/devtools-0Hr18ibL";
// import { useQuery } from "@tanstack/react-query";

type ImageSet = {
    _150x150: string;
    _480x480: string;
    _1000x1000: string;
};

const EMPTY_IMAGE_SET: ImageSet = {
    _150x150: "",
    _480x480: "",
    _1000x1000: "",
};

const normalizeImageSet = (img: Partial<ImageSet> | null | undefined): ImageSet => {
    return {
        _150x150: img?._150x150 ?? "",
        _480x480: img?._480x480 ?? "",
        _1000x1000: img?._1000x1000 ?? "",
    };
};

export function useAudio(userId?: string): useAudioProps {
    const [track, setTrack] = useState<Track | Track[] | null>(null);
    const [audioStream, setAudioStream] = useState<string | undefined>(undefined);
    const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
    const [audioIsPlaying, setAudioIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const hasFetchedInitialData = useRef<boolean>(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [durationTimeString, setDurationTimeString] = useState<string>("0:00");
    const [progressPercentage, setProgressPercentage] = useState<number>(0);
    const animationFrameId = useRef<number | null>(null);
    const [previousTrack, setPreviousTrack] = useState<LRUCacheProps | null>(null);
    track;
    loading;
    error;
    previousTrack;
    const [currentArtwork, setCurrentArtwork] = useState<ImageSet>(() => ({ ...EMPTY_IMAGE_SET }));
    const [currentUserProfilePicture, setCurrentUserProfilePicture] = useState<ImageSet>(() => ({ ...EMPTY_IMAGE_SET }));
    const [cacheUpdated, setCacheUpdated] = useState<boolean>(false);
    const debouncedSetCacheUpdated = useMemo(
        () => debounce(() => setCacheUpdated((prev) => !prev), 300), // Debounce by 300ms
        [],
    );
    const { setResetToggle, resetToggle } = useAudioVisualizerContext();

    const mediaElementSourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);

    const audioCacheData = useMemo(() => new LRUCache<LRUCacheProps>(3), []);
    interface TrackData extends LRUCacheProps {
        metaData?: string;
    }
    // AUDIO TIME DATA FOR PLAYBACK CONTROL
    const audioPlaybackData = useCallback(() => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration || 0);
            const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100 || 0;
            setProgressPercentage(progress);
            animationFrameId.current = requestAnimationFrame(audioPlaybackData);
        }
    }, []);

    const fetcher = async (url: string) => {
        try {
            const response = await fetch(url, {
                cache: "no-store",
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
                console.error("API Error:", errorData);
                throw new Error(errorData.error || "Error fetching audio data");
            }
            return response.json();
        } catch (error) {
            console.error("Fetcher error:", error);
            throw error;
        }
    };

    const { data: cachedAudioData } = useSWR<TrackData[]>(userId ? `/api/audius?userId=${userId}&stream=true` : null, fetcher, {
        revalidateOnFocus: false,
    });
    const existingNodeKeys = audioCacheData.getAllKeys();
    const { data: newAudioData } = useSWR<TrackData[]>(
        userId && existingNodeKeys.length > 0
            ? `/api/audius?userId=${userId}&excludeIds=${existingNodeKeys.join(",")}&stream=true`
            : null,
        fetcher,
        {
            revalidateOnFocus: false,
        },
    );
    // FETCH AUDIO DATA
    const fetchInitialAudioData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            // const response = await fetch(`/api/audius?userId=${userId}&stream=true`, {
            //     cache: "force-cache",
            //     method: "GET",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Access-Control-Allow-Origin": "*",
            //     },
            // });
            // if (!response.ok) throw new Error("Error fetching audio data");

            // const cachedAudioData: TrackData[] = await response.json();
            console.log("NEW INITIAL AUDIO DATA ==> : ", cachedAudioData);
            if (cachedAudioData && cachedAudioData.length > 0) {
                hasFetchedInitialData.current = true;
            }
            if (Array.isArray(cachedAudioData) && cachedAudioData.length > 0) {
                const capacity = audioCacheData.getCapacity();
                const validTracks = cachedAudioData.filter(
                    (t) =>
                        t &&
                        typeof t.id === "string" &&
                        t.id.length > 0 &&
                        typeof t.streamLink === "string" &&
                        t.streamLink.length > 0,
                );
                const opus2Track =
                    validTracks.find((t) => typeof t.title === "string" && t.title.trim().toLowerCase() === "opus 2") ??
                    validTracks.find((t) => typeof t.title === "string" && t.title.trim().toLowerCase().includes("opus 2"));

                // Cache a small window of tracks but ensure Opus 2 is included if present.
                let tracksToCache = validTracks.slice(0, capacity);
                if (opus2Track && !tracksToCache.some((t) => t.id === opus2Track.id)) {
                    // Replace the last item in the window with Opus 2 to keep a stable window size.
                    tracksToCache = [...tracksToCache.slice(0, Math.max(0, capacity - 1)), opus2Track];
                }
                // De-dupe in case of replacement collisions and top-up if needed.
                const byId = new Map(tracksToCache.map((t) => [t.id, t]));
                tracksToCache = Array.from(byId.values());
                if (tracksToCache.length < capacity) {
                    const remaining = validTracks.filter((t) => !byId.has(t.id));
                    tracksToCache = [...tracksToCache, ...remaining].slice(0, capacity);
                }

                tracksToCache.forEach((trackData) => {
                    audioCacheData.put(trackData.id, trackData);
                });

                const initialTrack = opus2Track ?? tracksToCache[tracksToCache.length - 1];
                if (initialTrack) {
                    console.log(
                        `[useAudio] fetchInitialAudioData - Setting initial track: title='${initialTrack.title}', ID=${initialTrack.id}, streamLink=${initialTrack.streamLink}`,
                    );
                    setTrack(initialTrack);
                    setAudioStream(initialTrack.streamLink);
                    setCurrentArtwork(normalizeImageSet(initialTrack.artwork));
                    setCurrentUserProfilePicture(normalizeImageSet(initialTrack.user?.profilePicture));
                    audioCacheData.setCurrentNode(initialTrack.id);
                } else {
                    console.warn("[useAudio] fetchInitialAudioData - No valid tracks returned from API.");
                }
                debouncedSetCacheUpdated();
                console.log("INITIAL CURRENT NODE => : ", audioCacheData.getCurrentNodeValue());
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        // console.log("INITIAL CACHE => : ", audioCacheData);
    }, [audioCacheData, debouncedSetCacheUpdated, cachedAudioData]);

    const fetchNewTrackData = useCallback(async () => {
        if (!userId) return null;
        if (hasFetchedInitialData.current) {
            // const existingNodeKeys = audioCacheData.getAllKeys();
            try {
                // const response = await fetch(`/api/audius?userId=${userId}&excludeIds=${existingNodeKeys.join(",")}&stream=true`, {
                //     method: "GET",
                //     headers: {
                //         "Content-Type": "application/json",
                //         "Access-Control-Allow-Origin": "*",
                //     },
                // });
                // if (!response.ok) {
                //     throw new Error("Error fetching audio data");
                // }
                // const newAudioData: TrackData[] = await response.json();
                console.log("NEW AUDIO DATA ==> : ", newAudioData);

                // Filter out tracks that are already in the cache to get only unique new tracks
                const uniqueTracks = newAudioData?.filter((uniqueTrack) => !audioCacheData.has(uniqueTrack.id));

                if (uniqueTracks && uniqueTracks.length > 0) {
                    // Process each unique track
                    uniqueTracks.forEach((track) => {
                        console.log(
                            `[useAudio] fetchNewTrackData - Processing track ID: ${track.id}, streamLink: ${track.streamLink}`,
                        );
                        audioCacheData.put(track.id, track);
                    });

                    // Set the first unique track as the current node and update state
                    const firstUniqueTrack = uniqueTracks[0];
                    console.log("FIRST UNIQUE TRACK: ", firstUniqueTrack);
                    if (firstUniqueTrack) {
                        setTrack(firstUniqueTrack);
                        setAudioStream(firstUniqueTrack.streamLink);
                        setCurrentArtwork(normalizeImageSet(firstUniqueTrack.artwork));
                        setCurrentUserProfilePicture(normalizeImageSet(firstUniqueTrack.user?.profilePicture));
                        audioCacheData.setCurrentNode(firstUniqueTrack.id);
                        debouncedSetCacheUpdated();
                        animationFrameId.current = requestAnimationFrame(audioPlaybackData);
                        console.log(`Added ${uniqueTracks.length} new unique tracks.`);
                    }
                    debouncedSetCacheUpdated();
                    setResetToggle(true);
                } else {
                    // Use the least recently used track if no unique tracks are found
                    const leastRecentlyUsedTrack = audioCacheData.getTailNode();
                    if (leastRecentlyUsedTrack) {
                        setTrack(leastRecentlyUsedTrack);
                        setAudioStream(leastRecentlyUsedTrack.streamLink); // Access the streamLink from the node's value
                        setCurrentArtwork(normalizeImageSet(leastRecentlyUsedTrack.artwork));
                        setCurrentUserProfilePicture(normalizeImageSet(leastRecentlyUsedTrack.user?.profilePicture));
                        audioCacheData.setCurrentNode(leastRecentlyUsedTrack.id); // Ensure you use `key` here
                        animationFrameId.current = requestAnimationFrame(audioPlaybackData);
                        debouncedSetCacheUpdated();
                        console.log("Using the least recently used track.");
                    } else {
                        console.log("No tracks available to set as current.");
                    }
                }
            } catch (err: any) {
                console.error("Fetching new track data failed:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
    }, [
        userId,
        audioCacheData,
        animationFrameId,
        audioPlaybackData,
        setTrack,
        setAudioStream,
        setError,
        setLoading,
        setCurrentArtwork,
        setCurrentUserProfilePicture,
        debouncedSetCacheUpdated,
        newAudioData,
        setResetToggle,
    ]);

    // ANALYZE AUDIO FOR VISUALIZATION
    const createAudioContext = useCallback(() => {
        const audioEl = audioRef.current;
        if (!audioEl) return;

        try {
            // Create AudioContext if it doesn't exist (or was closed).
            if (!audioContextRef.current || audioContextRef.current.state === "closed") {
                const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
                audioContextRef.current = new AudioContextClass();
            }

            const audioCtx = audioContextRef.current;
            if (!audioCtx) return;

            // If the existing source node is already wired to the current audio element, we're done.
            if (mediaElementSourceNodeRef.current?.mediaElement === audioEl) {
                return;
            }

            // Tear down the previous source node (it was wired to a different audio element).
            if (mediaElementSourceNodeRef.current) {
                try {
                    mediaElementSourceNodeRef.current.disconnect();
                } catch {
                    // ignore
                }
                mediaElementSourceNodeRef.current = null;
            }

            // Create a new MediaElementSourceNode for the current audio element and wire it to an analyser.
            const sourceNode = audioCtx.createMediaElementSource(audioEl);
            const analyserNode = audioCtx.createAnalyser();
            analyserNode.smoothingTimeConstant = 0.55;
            analyserNode.fftSize = 512;

            sourceNode.connect(analyserNode);
            analyserNode.connect(audioCtx.destination);

            mediaElementSourceNodeRef.current = sourceNode;
            setAnalyser(analyserNode);
        } catch (e) {
            console.error("Error creating AudioContext", e);
        }
    }, []);

    // TOGGLE AUDIO
    const toggleAudio = useCallback(() => {
        console.log("[toggleAudio] Called");
        const audio = audioRef.current;
        console.log("[toggleAudio] audioRef.current:", audio);
        console.log("[toggleAudio] audioStream:", audioStream);

        if (!audio) {
            console.error("[toggleAudio] audioRef.current is null!");
            return;
        }

        const onAudioEnd = async () => {
            console.log("[toggleAudio] onAudioEnd triggered");
            setAudioIsPlaying(false);
            if (audioContextRef.current) {
                console.log("[toggleAudio] onAudioEnd suspending context. Current state:", audioContextRef.current.state);
                await audioContextRef.current.suspend();
                console.log("[toggleAudio] onAudioEnd context suspended. New state:", audioContextRef.current.state);
            }
            setResetToggle(true);
            if (animationFrameId.current !== null) {
                cancelAnimationFrame(animationFrameId.current);
                animationFrameId.current = null;
            }
        };
        audio.addEventListener("ended", onAudioEnd);

        (async () => {
            try {
                if (audioStream && audio.src !== audioStream) {
                    console.log(`[toggleAudio] Setting audio.src from '${audio.src}' to '${audioStream}'`);
                    audio.src = audioStream;
                    if (!audioContextRef.current || audioContextRef.current.state === "closed") {
                        console.log(
                            "[toggleAudio] audio.src changed, AudioContext needs re-creation or is closed. Calling createAudioContext.",
                        );
                        setResetToggle(true);
                        createAudioContext();
                    }
                }

                const isCurrentlyPaused = audio.paused;
                const isCurrentlyEnded = audio.ended;
                const shouldStartPlaying = isCurrentlyPaused || isCurrentlyEnded;
                console.log(
                    "[toggleAudio] Status: audio.paused:",
                    isCurrentlyPaused,
                    "audio.ended:",
                    isCurrentlyEnded,
                    "=> shouldStartPlaying:",
                    shouldStartPlaying,
                );

                if (shouldStartPlaying) {
                    console.log("[toggleAudio] Attempting to play...");
                    // Ensure the analyser/source graph is wired to the current audio element before playback.
                    createAudioContext();
                    setAudioIsPlaying(true);
                    try {
                        console.log("[toggleAudio] Calling audio.play()");
                        await audio.play();
                        console.log("[toggleAudio] audio.play() successful.");
                        animationFrameId.current = requestAnimationFrame(audioPlaybackData);
                        if (audioContextRef.current) {
                            console.log("[toggleAudio] Resuming AudioContext. Current state:", audioContextRef.current.state);
                            await audioContextRef.current.resume();
                            console.log("[toggleAudio] AudioContext resumed. New state:", audioContextRef.current.state);
                        }
                        setPreviousTrack(audioCacheData.getTailNode());
                    } catch (error) {
                        console.error("[toggleAudio] Error playing audio:", error);
                        if (audioContextRef.current && audioContextRef.current.state === "suspended") {
                            console.log(
                                "[toggleAudio] AudioContext was suspended during play error, attempting to resume and play again.",
                            );
                            await audioContextRef.current.resume();
                            await audio.play();
                            console.log("[toggleAudio] Second attempt to play() after resume successful.");
                        }
                    }
                } else {
                    console.log("[toggleAudio] Attempting to pause...");
                    setAudioIsPlaying(false);
                    setPreviousTrack(null);
                    audio.pause();
                    console.log("[toggleAudio] audio.pause() called.");
                    if (animationFrameId.current !== null) {
                        cancelAnimationFrame(animationFrameId.current);
                        animationFrameId.current = null;
                    }
                    if (audioContextRef.current) {
                        console.log("[toggleAudio] Suspending AudioContext. Current state:", audioContextRef.current.state);
                        await audioContextRef.current.suspend();
                        console.log("[toggleAudio] AudioContext suspended. New state:", audioContextRef.current.state);
                    }
                    setResetToggle(true);
                }
            } catch (e) {
                console.error("[toggleAudio] General error in async block:", e);
            }
        })();

        return () => {
            console.log("[toggleAudio] Cleaning up 'ended' event listener for src:", audio.src);
            audio.removeEventListener("ended", onAudioEnd);
        };
    }, [audioStream, createAudioContext, audioPlaybackData, audioCacheData, setResetToggle]);

    // const autoplayAudio = useCallback(
    //     (currentNode: LRUCacheProps | null) => {
    //         if (audioRef.current) {
    //             if (audioIsPlaying) {
    //                 audioRef.current.pause();
    //                 audioContextRef.current?.suspend();
    //             }
    //             if (currentNode) {
    //                 audioCacheData.moveToTail(currentNode.id);
    //             }
    //             console.log("PAUSED AUDIO REF NOW SRC = ", audioRef.current.src);
    //             audioRef.current.src = "";
    //             setAudioIsPlaying(false);
    //         }
    //         // Create or update the AudioContext
    //         if (!audioContextRef.current || audioContextRef.current.state === "closed") {
    //             createAudioContext();
    //         }
    //         console.log("CURRENT NODE: ", currentNode);
    //         audioRef.current = new Audio(currentNode?.streamLink);
    //         console.log("PAUSED AUDIO REF NOW SRC AFTER = ", audioRef.current.src);
    //         toggleAudio();
    //     },
    //     [createAudioContext, toggleAudio, audioIsPlaying, audioCacheData]
    // );

    // NEXT AUDIO
    const nextAudio = useCallback(() => {
        // console.log("NEXT AUDIO");
        setAudioIsPlaying(false);
        const audio = audioRef.current;
        if (!audio) return;

        if (audioContextRef.current && audioContextRef.current.state !== "closed") {
            audioContextRef.current.suspend();
            if (animationFrameId.current !== null) {
                cancelAnimationFrame(animationFrameId.current);
            }
            setResetToggle(true);
            createAudioContext();
        }
        (async () => {
            const currentNode = audioCacheData.getCurrentNodeValue();
            // console.log("NEXT AUDIO => CURRENT NODE: ", currentNode);
            // console.log("NEXT AUDIO => CURRENT CACHE: ", audioCacheData);

            const currentNodeKey = String(currentNode?.id);
            const nextNode = audioCacheData.getNextNode(currentNodeKey);

            if (nextNode !== null && nextNode.id) {
                // console.log("NEXT AUDIO => NEXT NODE: ", nextNode.id);
                setTrack(nextNode);
                setAudioStream(nextNode.streamLink);
                setCurrentArtwork(normalizeImageSet(nextNode.artwork));
                setCurrentUserProfilePicture(normalizeImageSet(nextNode.user?.profilePicture));
                // console.log("NEXT AUDIO => NEXT TRACK: ", nextNode.id);
                // console.log("NEXT AUDIO => NEXT CACHE: ", audioCacheData);
                if (audioRef.current) {
                    audioRef.current.src = nextNode.streamLink;
                }
                if (!audioRef.current) return;
                audioRef.current.src = nextNode.streamLink;
                if (audioContextRef.current && audioContextRef.current.state !== "closed") {
                    createAudioContext();
                } else {
                    if (audioContextRef.current) {
                        audioContextRef.current.close();
                        createAudioContext();
                    }
                }
                audioCacheData.setCurrentNode(nextNode.id);
                animationFrameId.current = requestAnimationFrame(audioPlaybackData);
                // autoplayAudio(currentNode);
            } else {
                try {
                    if (nextNode === null) {
                        await fetchNewTrackData();
                    }
                } catch (error) {
                    console.error("ERROR FETCHING => newTRACK", error);
                }
            }
        })();
    }, [
        audioCacheData,
        fetchNewTrackData,
        // hasFetchedInitialData,
        // autoplayAudio,
        createAudioContext,
        audioPlaybackData,
        setResetToggle,
    ]);
    // PREVIOUS AUDIO
    const previousAudio = useCallback(() => {
        const currentNode = audioCacheData.getCurrentNodeValue();
        if (!currentNode) {
            console.log("Current track ID not found. Looking for new track.");
            nextAudio();
            return;
        }
        if (!currentNode.id) {
            console.log("Current track ID not found.");
            return;
        }
        // Attempt to retrieve the previous node based on the current node's ID
        const previousNode = audioCacheData.getPreviousNode(currentNode.id);
        if (previousNode) {
            // If there is a previous node, use it for playback
            setResetToggle(true);
            setTrack(previousNode);
            setAudioStream(previousNode.streamLink);
            setCurrentArtwork(normalizeImageSet(previousNode.artwork));
            setCurrentUserProfilePicture(normalizeImageSet(previousNode.user?.profilePicture));
            audioCacheData.setCurrentNode(previousNode.id); // Update the current node in the cache

            if (audioRef.current) {
                audioRef.current.src = previousNode.streamLink;
                // audioRef.current.play().catch(err => console.error("Error playing the audio", err));
            }

            if (audioContextRef.current) {
                audioContextRef.current.close(); // Reset the AudioContext for the new source
                createAudioContext();
            }
        } else {
            // Fallback to the least recently used (LRU) track if there's no previous track
            console.log("NO PREVIOUS TRACK => : Attempting to play the LRU track.");
            const lruTrack = audioCacheData.getTailNode();
            if (lruTrack) {
                setResetToggle(true);
                setTrack(lruTrack);
                setAudioStream(lruTrack.streamLink);
                setCurrentArtwork(normalizeImageSet(lruTrack.artwork));
                setCurrentUserProfilePicture(normalizeImageSet(lruTrack.user?.profilePicture));
                audioCacheData.setCurrentNode(lruTrack.id); // Ensure to update the current node to the LRU node

                if (audioRef.current) {
                    audioRef.current.src = lruTrack.streamLink;
                    // audioRef.current.play().catch(err => console.error("Error playing the audio", err));
                }

                if (audioContextRef.current) {
                    audioContextRef.current.close();
                    createAudioContext();
                }
            } else {
                console.log("LRU track not found.");
            }
        }
    }, [
        audioCacheData,
        setTrack,
        setAudioStream,
        createAudioContext,
        nextAudio,
        setCurrentArtwork,
        setCurrentUserProfilePicture,
        setResetToggle,
    ]);

    const updateAudioTime = useCallback(() => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration || 0);
        }
    }, []);

    const stableUpdateAudioTime = useCallback(updateAudioTime, [updateAudioTime]);

    const seekAudioTime = useCallback(
        (time: number) => {
            if (!audioRef.current) return;
            audioRef.current.currentTime = time;
            setProgressPercentage((time / duration) * 100);
            setCurrentTime(time);
            return time;
        },
        [duration],
    );

    // Format audio time
    const formatAudioTime = useCallback(
        (time: number) => {
            if (!time) return;
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            setDurationTimeString(`${minutes}:${formattedSeconds}`);

            return durationTimeString;
        },
        [durationTimeString],
    );

    const formattedRemainingTime = useMemo(() => {
        return formatAudioTime(duration - currentTime);
    }, [currentTime, duration, formatAudioTime]);

    const formattedDurationById = useCallback(
        (trackId: string) => {
            const trackData = audioCacheData.peek(trackId);
            if (trackData && trackData.duration) {
                const minutes = Math.floor(trackData.duration / 60);
                const seconds = Math.floor(trackData.duration % 60);
                const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
                return `${minutes}:${formattedSeconds}`;
            } else {
                return "0:00";
            }
        },
        [audioCacheData],
    );

    // Fetch initial audio data
    useEffect(() => {
        if (!userId) return;
        fetchInitialAudioData();
    }, [userId, fetchInitialAudioData]);

    // Fetch new track data
    useEffect(() => {
        if (!audioRef || !audioStream || !audioContextRef) return;
        if (cacheUpdated) {
            setResetToggle(true);
        }
    }, [audioRef, audioStream, fetchNewTrackData, resetToggle, cacheUpdated, setResetToggle]);

    // Update audio
    useEffect(() => {
        if (!audioStream) return;
        audioRef.current = new Audio(audioStream);
        audioRef.current.crossOrigin = "anonymous";
        if (audioStream && audioRef.current) {
            audioRef.current.src = audioStream;
            updateAudioTime();
        }
        console.log("NEW AUDIO STREAM: ", audioStream);
    }, [audioStream, updateAudioTime]);

    // Update audio time
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        // Load metadata to get duration
        const onLoadMetadata = () => {
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration);
        };
        // Update progress percentage
        const updateProgress = () => {
            setProgressPercentage((audio.currentTime / audio.duration) * 100);
        };
        updateProgress();
        // Update current time periodically
        const getAudioTime = () => {
            stableUpdateAudioTime();
            // updateAudioTime();
        };
        audio.addEventListener("loadedmetadata", onLoadMetadata);
        audio.addEventListener("timeupdate", getAudioTime);
        audio.addEventListener("timeupdate", updateProgress);

        return () => {
            audio.removeEventListener("loadedmetadata", onLoadMetadata);
            audio.removeEventListener("timeupdate", getAudioTime);
            audio.removeEventListener("timeupdate", updateProgress);
        };
    }, [updateAudioTime, stableUpdateAudioTime]);

    // Cleanup audio context
    useEffect(() => {
        return () => {
            // Disconnect and cleanup
            if (mediaElementSourceNodeRef.current) {
                mediaElementSourceNodeRef.current.disconnect();
            }
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, []);

    // Cleanup
    useEffect(() => {
        return () => {
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, []);

    return {
        analyser: analyser,
        toggleAudio,
        audioIsPlaying,
        nextAudio,
        previousAudio,
        audioStream,
        seekAudioTime,
        currentTime,
        duration,
        durationTimeString,
        formattedRemainingTime,
        formattedDurationById,
        progressPercentage,
        currentArtwork,
        currentUserProfilePicture,
        audioCacheData,
        audioContextRef,
        cacheUpdated,
        debouncedSetCacheUpdated,
        setTrack,
        setAudioStream,
        setCurrentArtwork,
    };
}
