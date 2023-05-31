import { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { allPages } from "contentlayer/generated";

interface PageProps {
    params: {
        slug: string[];
    };
}

async function getPageFromParams(params: any) {
    const slug = params?.slug?.join("/");
    const page = allPages.find((page) => page.slugAsParams === slug);

    if (!page) null;

    return page;
}

export default async function PagePage({ params }: PageProps) {
    const page = await getPageFromParams(params);
    if (!page) {
        notFound();
    }
    return <article>1</article>;
}
