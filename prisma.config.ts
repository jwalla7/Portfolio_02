import { defineConfig } from "prisma/config";

const datasourceUrl = process.env.POSTGRES_PRISMA_URL;

export default defineConfig({
    schema: "prisma/schema.prisma",
    // Required for migrate / introspection commands in Prisma 7+.
    // With `exactOptionalPropertyTypes`, we must omit the property entirely when undefined.
    ...(datasourceUrl ? { datasource: { url: datasourceUrl } } : {}),
    migrations: {
        path: "prisma/migrations",
    },
});
