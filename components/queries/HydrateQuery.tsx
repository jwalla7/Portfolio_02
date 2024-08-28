"use client";

import { useQueryClient } from "@/lib/query";
import {
    HydrationBoundary as NextHydrateBoundary,
    // HydrationBoundaryProps, 
    dehydrate
} from "@tanstack/react-query";

const dehydratedState = dehydrate(useQueryClient, {});
export const HydrateQuery = (
    // props: HydrationBoundaryProps
) => {
    return <NextHydrateBoundary state={dehydratedState} />;
};
