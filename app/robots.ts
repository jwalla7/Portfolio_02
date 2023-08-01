import { MetadataRoute } from "next";

/*
 * designates which URLs search engine crawlers can access on site.
 */

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
    };
}
