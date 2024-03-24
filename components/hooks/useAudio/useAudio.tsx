/**
 * @description
 * Provides an easy way to control audio playback.
 *
 * It creates an AudioContext, connecting it to an HTMLAudioElement.
 *
 * It controls the audio playback, so that this logic can be reused across different components in the application.
 */

import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { Track } from "@audius/sdk/dist/api/Track";
import { useAudioProps } from "./useAudioProps";
import { LRUCache, LRUCacheProps } from "@/components/cache/audio/audioLRUCache";
import { useAudioVisualizerContext } from "@/components/context/audio/AudioVisualizerContext";
import { time } from "console";
// import { d } from "@tanstack/react-query-devtools/build/legacy/devtools-0Hr18ibL";
// import { useQuery } from "@tanstack/react-query";

export function useAudio(userId?: string): useAudioProps {
    const [_track, setTrack] = useState<Track | Track[] | null>(null);
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
    const [cacheUpdated, setCacheUpdated] = useState<boolean>(false);
    const animationFrameId = useRef<number | null>(null);

    const mediaElementSourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);

    const { resetSphere } = useAudioVisualizerContext();

    const audioCacheData = useMemo(() => new LRUCache<LRUCacheProps | null>(3), []);
    interface TrackData extends LRUCacheProps {
        id: string;
        metaData?: string;
    }
    interface NewTrack extends Track {
        id: string;
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

    // FETCH AUDIO DATA
    const fetchInitialAudioData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/audius?userId=${userId}&stream=true`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
            if (!response.ok) throw new Error("Error fetching audio data");

            const cachedAudioData: TrackData[] = await response.json();
            if (cachedAudioData.length > 0) {
                hasFetchedInitialData.current = true;
            }
            if (Array.isArray(cachedAudioData) && cachedAudioData.length > 0) {
                cachedAudioData.forEach((trackData, index) => {
                    let atCapacityNode = null;
                    if (trackData.id && index < audioCacheData.getCapacity()) {
                        audioCacheData.put(trackData.id, trackData);
                        atCapacityNode = trackData.id;
                        console.log("NODE ADDED TO CACHE => : ", trackData.id);
                    } else {
                        console.error("Invalid attempt to add track data, exceeded capacity:", trackData);
                    }
                    if (index < audioCacheData.getCapacity()) {
                        console.log("AT CAPACITY NODE => INDEX: ", index);
                        console.log("AT CAPACITY NODE: ", atCapacityNode);
                        atCapacityNode = trackData.id;
                    }
                    if (index === 0) {
                        setTrack(trackData.track);
                        setAudioStream(trackData.streamLink);
                        if (atCapacityNode) {
                            audioCacheData.setCurrentNode(atCapacityNode);
                        }
                    }
                });
                setCacheUpdated((prevState) => !prevState);
                console.log("INITIAL CURRENT NODE => : ", audioCacheData.getCurrentNodeValue());
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        console.log("INITIAL CACHE => : ", audioCacheData);
    }, [userId, audioCacheData]);

    const fetchNewTrackData = useCallback(async () => {
        if (!userId) return null;
        if (hasFetchedInitialData) {
            const existingNodeKeys = audioCacheData.getAllKeys();
            try {
                const response = await fetch(`/api/audius?userId=${userId}&excludeIds=${existingNodeKeys.join(",")}&stream=true`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
                if (!response.ok) {
                    throw new Error("Error fetching audio data");
                }
                const newAudioData: TrackData[] = await response.json();

                // Filter out tracks that are already in the cache to get only unique new tracks
                const uniqueTracks = newAudioData.filter((uniqueTrack) => !audioCacheData.get(uniqueTrack.id));

                if (uniqueTracks.length > 0) {
                    // Process each unique track
                    uniqueTracks.forEach((track) => {
                        audioCacheData.put(track.id, track);
                    });

                    // Set the first unique track as the current node and update state
                    const firstUniqueTrack = uniqueTracks[0];
                    console.log("FIRST UNIQUE TRACK: ", firstUniqueTrack);
                    if (firstUniqueTrack) {
                        setTrack(firstUniqueTrack.track);
                        setAudioStream(firstUniqueTrack.streamLink);
                        audioCacheData.setCurrentNode(firstUniqueTrack.id);
                        animationFrameId.current = requestAnimationFrame(audioPlaybackData);
                        console.log(`Added ${uniqueTracks.length} new unique tracks.`);
                    }
                    resetSphere();
                } else {
                    // Use the least recently used track if no unique tracks are found
                    const leastRecentlyUsedTrack = audioCacheData.getTailNode();
                    if (leastRecentlyUsedTrack) {
                        setTrack(leastRecentlyUsedTrack.track); // Access the track from the node's value
                        setAudioStream(leastRecentlyUsedTrack.streamLink); // Access the streamLink from the node's value
                        audioCacheData.setCurrentNode(leastRecentlyUsedTrack.id); // Ensure you use `key` here
                        animationFrameId.current = requestAnimationFrame(audioPlaybackData);
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
    }, [userId, audioCacheData, animationFrameId, audioPlaybackData, setTrack, setAudioStream, setError, setLoading, resetSphere]);

    // ANALYZE AUDIO FOR VISUALIZATION
    const createAudioContext = useCallback(() => {
        if (!audioRef.current) return;

        try {
            // Create AudioContext if it doesn't exist
            if (!audioContextRef.current || audioContextRef.current.state === "closed") {
                const AudioContextClass = AudioContext || (window as any).webkitAudioContext;
                audioContextRef.current = new AudioContextClass();
            }

            // If MediaElementSourceNode is already connected to this audio element, skip creating a new one
            if (mediaElementSourceNodeRef.current && mediaElementSourceNodeRef.current.mediaElement === audioRef.current) {
                console.log("Using existing MediaElementSourceNode");
                return;
            }

            // Disconnect previous MediaElementSourceNode if it exists
            if (mediaElementSourceNodeRef.current) {
                mediaElementSourceNodeRef.current.disconnect();
            }

            // Create a new MediaElementSourceNode and connect it
            if (audioRef.current && !mediaElementSourceNodeRef.current) {
                mediaElementSourceNodeRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);

                const analyserNode = audioContextRef.current.createAnalyser();
                analyserNode.smoothingTimeConstant = 0.55;
                mediaElementSourceNodeRef.current.connect(analyserNode);
                analyserNode.connect(audioContextRef.current.destination);
                analyserNode.fftSize = 512;

                setAnalyser(analyserNode);
                console.log("AudioContext and AnalyserNode setup complete.");
            }
        } catch (e) {
            console.error("Error creating AudioContext", e);
        }
    }, [audioRef]);

    // TOGGLE AUDIO
    const toggleAudio = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onAudioEnd = async () => {
            setAudioIsPlaying(false);
            if (audioContextRef.current) {
                await audioContextRef.current.suspend();
            }
            resetSphere();
            if (animationFrameId.current !== null) {
                cancelAnimationFrame(animationFrameId.current);
                animationFrameId.current = null;
            }
        };
        audio.addEventListener("ended", onAudioEnd);

        (async () => {
            try {
                if (audioStream && audio.src !== audioStream) {
                    audio.src = audioStream;
                    if (!audioContextRef.current || audioContextRef.current.state === "closed") {
                        resetSphere();
                        createAudioContext();
                    }
                }
                const isPlaying = audio.paused || audio.ended;
                if (isPlaying) {
                    if (!audioContextRef.current || audioContextRef.current.state === "closed") {
                        resetSphere();
                        createAudioContext();
                    }
                    setAudioIsPlaying(isPlaying);
                    try {
                        await audio.play();
                        animationFrameId.current = requestAnimationFrame(audioPlaybackData);
                        if (audioContextRef.current) {
                            await audioContextRef.current.resume();
                        }
                        console.log("PLAYING STATE: ", audioContextRef.current?.state);
                    } catch (error) {
                        console.error("Error playing audio", error);
                        if (audioContextRef.current && audioContextRef.current.state === "suspended") {
                            await audioContextRef.current.resume();
                            await audio.play();
                        }
                    }
                } else {
                    setAudioIsPlaying(isPlaying);
                    audio.pause();
                    if (animationFrameId.current !== null) {
                        cancelAnimationFrame(animationFrameId.current);
                        animationFrameId.current = null;
                    }
                    if (audioContextRef.current) {
                        await audioContextRef.current.suspend();
                    }
                    resetSphere();
                    console.log("PLAYING STATE: ", audioContextRef.current?.state);
                }
            } catch (e) {
                console.error("Error toggling audio", e);
            }
        })();

        return () => {
            audio.removeEventListener("ended", onAudioEnd);
        };
    }, [audioStream, createAudioContext, resetSphere, audioPlaybackData]);

    const autoplayAudio = useCallback(
        (currentNode: LRUCacheProps | null) => {
            if (audioRef.current) {
                if (audioIsPlaying) {
                    audioRef.current.pause();
                    audioContextRef.current?.suspend();
                }
                if (currentNode) {
                    audioCacheData.moveToTail(currentNode.id);
                }
                console.log("PAUSED AUDIO REF NOW SRC = ", audioRef.current.src);
                audioRef.current.src = "";
                setAudioIsPlaying(false);
            }
            // Create or update the AudioContext
            if (!audioContextRef.current || audioContextRef.current.state === "closed") {
                createAudioContext();
            }
            console.log("CURRENT NODE: ", currentNode);
            audioRef.current = new Audio(currentNode?.streamLink);
            console.log("PAUSED AUDIO REF NOW SRC AFTER = ", audioRef.current.src);
            toggleAudio();
        },
        [createAudioContext, toggleAudio, audioIsPlaying, audioCacheData]
    );

    // NEXT AUDIO
    const nextAudio = useCallback(() => {
        console.log("NEXT AUDIO");
        setAudioIsPlaying(false);
        if (audioContextRef.current && audioContextRef.current.state !== "closed") {
            audioContextRef.current.suspend();
            if (animationFrameId.current !== null) {
                cancelAnimationFrame(animationFrameId.current);
            }
            resetSphere();
        }
        (async () => {
            const currentNode = audioCacheData.getCurrentNodeValue();
            console.log("NEXT AUDIO => CURRENT NODE: ", currentNode);
            console.log("NEXT AUDIO => CURRENT CACHE: ", audioCacheData);

            const currentNodeKey = String(currentNode?.id);
            const nextNode = audioCacheData.getNextNode(currentNodeKey);

            if (nextNode !== null && nextNode.id) {
                console.log("NEXT AUDIO => NEXT NODE: ", nextNode.id);
                // if (currentNode && audioCacheData.getPreviousNode(currentNodeKey) === currentNode) {
                //     audioCacheData.moveToTail(currentNode.id);
                // }
                setTrack(nextNode.track);
                setAudioStream(nextNode.streamLink);
                console.log("NEXT AUDIO => NEXT TRACK: ", nextNode.id);
                console.log("NEXT AUDIO => NEXT CACHE: ", audioCacheData);
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
                        const newTrackFetch = await fetchNewTrackData();
                        if (!newTrackFetch) {
                            console.log("NO NEW TRACKS FETCHED");
                            return;
                        }
                        const newTrack: LRUCacheProps = newTrackFetch;
                        if (newTrack && newTrack.id) {
                            setTrack(newTrack.track);
                            setAudioStream(newTrack.streamLink);
                            console.log("NO NEXT AUDIO => FETCHED NEW TRACK: ", newTrack);
                            if (!audioRef.current) return;
                            audioRef.current.src = newTrack.streamLink;
                            if (audioContextRef.current) {
                                audioContextRef.current.close();
                                createAudioContext();
                            }
                            audioCacheData.setCurrentNode(newTrack.id);
                            // autoplayAudio(newTrack);
                        }
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
        resetSphere,
        audioPlaybackData,
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
            setTrack(previousNode.track);
            setAudioStream(previousNode.streamLink);
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
                setTrack(lruTrack.track);
                setAudioStream(lruTrack.streamLink);
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
    }, [audioCacheData, setTrack, setAudioStream, createAudioContext, nextAudio]);

    const updateAudioTime = useCallback(() => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration || 0);
        }
    }, []);
    const seekAudioTime = useCallback(
        (time: number) => {
            if (!audioRef.current) return;
            audioRef.current.currentTime = time;
            setProgressPercentage((time / duration) * 100);
            setCurrentTime(time);
            return time;
        },
        [duration]
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
        [durationTimeString]
    );

    const formattedRemainingTime = useMemo(() => {
        return formatAudioTime(duration - currentTime);
    }, [currentTime, duration, formatAudioTime]);

    // Fetch initial audio data
    useEffect(() => {
        if (!userId) return;
        fetchInitialAudioData();
    }, [userId, fetchInitialAudioData]);

    // Fetch new track data
    useEffect(() => {
        if (!audioRef || !audioStream || !audioContextRef) return;
        if (cacheUpdated) {
            resetSphere();
        }
    }, [audioRef, audioStream, fetchNewTrackData, resetSphere, cacheUpdated]);

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
            setDuration(audio.duration);
        };
        // Update progress percentage
        const updateProgress = () => {
            setProgressPercentage((audio.currentTime / audio.duration) * 100);
        };
        updateProgress();
        // Update current time periodically
        const getAudioTime = () => {
            updateAudioTime();
        };
        audio.addEventListener("loadedmetadata", onLoadMetadata);
        audio.addEventListener("timeupdate", getAudioTime);
        audio.addEventListener("timeupdate", updateProgress);

        return () => {
            audio.removeEventListener("loadedmetadata", onLoadMetadata);
            audio.removeEventListener("timeupdate", getAudioTime);
            audio.removeEventListener("timeupdate", updateProgress);
        };
    }, [updateAudioTime]);

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
        progressPercentage,
    };
}
