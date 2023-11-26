"use client";

import { ReactNode, cache, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider as NextQueryProvider } from "@tanstack/react-query";
// import { HydrateQuery } from "./HydrateQuery";

interface QueryProviderProps {
    children?: ReactNode;
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
    // Instead do this, which ensures each request has its own cache:
    const [client] = useState(
        cache(
            () =>
                new QueryClient({
                    defaultOptions: {
                        queries: {
                            // With SSR, we usually want to set some default staleTime
                            // above 0 to avoid refetching immediately on the client
                            staleTime: 60 * 1000,
                        },
                    },
                })
        )
    );
    return (
        <NextQueryProvider client={client}>
            {/* <HydrateQuery> */}
            {children}
            {/* </HydrateQuery> */}
            <ReactQueryDevtools initialIsOpen={false} />
        </NextQueryProvider>
    );
};
