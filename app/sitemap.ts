import { MetadataRoute } from "next";

/**
 * Help search engine crawlers crawl your site more efficiently.
 *
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "http://localhost:3000",
            lastModified: new Date(),
        },
        {
            url: "http://localhost:3000/aboutme",
            lastModified: new Date(),
        },
        {
            url: "http://localhost/3000/resume",
            lastModified: new Date(),
        },
        {
            url: "http://localhost/3000/contactme",
            lastModified: new Date(),
        },
    ];
}
