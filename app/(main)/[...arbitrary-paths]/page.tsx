import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";
import { siteConfig } from "@/config/site";

interface PageProps {
    parameters: {
        data: string[];
    };
}

async function getPageFromParams(params) {
    const data = params?.data?.join("/");
    const page = allPages.find((page) => page.dataAsParams === data);
}
