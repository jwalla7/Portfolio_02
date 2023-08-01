import Link from "next/link";

/**
 * Implementing another not-found.tsx file in the (main) route group will override this not-found.tsx file.
 *
 * I will need to look into this more.
 */

export default function Custom404() {
    return (
        <div>
            <h1>Not Found</h1>
            <p> Sorry, could not find requested resource</p>
            <p>
                View <Link href="/dashboard"> the dashboard page</Link>
            </p>
        </div>
    );
}
