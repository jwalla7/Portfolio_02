import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

declare global {
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined;
    // eslint-disable-next-line no-var
    var prismaPool: Pool | undefined;
    // eslint-disable-next-line no-var
    var prismaAdapter: PrismaPg | undefined;
}

const connectionString =
    process.env.POSTGRES_PRISMA_URL ?? process.env.DATABASE_URL ?? process.env.POSTGRES_URL ?? process.env.POSTGRES_URL_NON_POOLING;

if (!connectionString) {
    throw new Error("Missing database connection string (POSTGRES_PRISMA_URL/DATABASE_URL/POSTGRES_URL/POSTGRES_URL_NON_POOLING).");
}

const pool = globalThis.prismaPool ?? new Pool({ connectionString });
const adapter = globalThis.prismaAdapter ?? new PrismaPg(pool);

export const prisma = globalThis.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = prisma;
    globalThis.prismaPool = pool;
    globalThis.prismaAdapter = adapter;
}
