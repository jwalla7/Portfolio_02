import { defineDocumentType, makeSource } from "contentlayer/source-files";

/** @type {import("contentlayer/source-files").ComputedFields} */
const computedField = {
    slug: {
        type: "string",
        resolve: (documentData) => `/${documentData._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: (documentData) =>
            documentData._raw.flattenedPath.split("/").slice(1).join("/"),
    },
};

export const Page = defineDocumentType(() => ({
    name: "Page",
    filePathPattern: `pages/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
        },
    },
    computedField,
}));

export default makeSource({
    contentDirPath: "./content",
    documentTypes: [Page],
});
