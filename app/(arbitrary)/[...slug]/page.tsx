// import { Metadata } from "next";
// import { siteConfig } from "@/config/site";
// import { allPages } from "contentlayer/generated";
import { audiusTest } from "@/app/api/audius/route";
import Custom404 from "@/app/not-found";

interface PageProps {
    params: {
        slug: string[];
    };
}

async function getPageFromParams(params: any) {
    const slug = params?.slug?.join("/");
    // const page = allPages.find((page) => page.slugAsParams === slug);

    // if (!page) {
    //     return null;
    // }
    // return page;
}

export default async function PagePage({ params }: PageProps) {
    audiusTest();
    const page: any = await getPageFromParams(params);

    if (!page) {
        return <Custom404 />;
    }
    return page;
}
