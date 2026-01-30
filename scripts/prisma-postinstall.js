const fs = require("fs");
const path = require("path");

function ensurePrismaSymlink() {
    const projectRoot = process.cwd();
    const prismaGeneratedDir = path.join(projectRoot, "node_modules", ".prisma");
    const prismaClientPkgDir = path.join(projectRoot, "node_modules", "@prisma", "client");
    const linkPath = path.join(prismaClientPkgDir, ".prisma");

    if (!fs.existsSync(prismaGeneratedDir) || !fs.existsSync(prismaClientPkgDir)) {
        // Nothing to do (generate may have been skipped).
        return;
    }

    // If it exists already (dir or symlink), remove it so we can recreate deterministically.
    try {
        fs.rmSync(linkPath, { recursive: true, force: true });
    } catch {
        // ignore
    }

    const relativeTarget = path.relative(prismaClientPkgDir, prismaGeneratedDir);
    const linkType = process.platform === "win32" ? "junction" : "dir";

    fs.symlinkSync(relativeTarget, linkPath, linkType);
}

try {
    ensurePrismaSymlink();
    // eslint-disable-next-line no-console
    console.log("[postinstall] Linked @prisma/client/.prisma -> node_modules/.prisma");
} catch (err) {
    // eslint-disable-next-line no-console
    console.error("[postinstall] Failed to link @prisma/client/.prisma:", err);
    process.exitCode = 1;
}
