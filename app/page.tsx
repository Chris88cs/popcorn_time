import { Metadata } from "next";
import Link from "next/Link";
export const metadata: Metadata = {
    title: "Popcorn Time",
};

export default function Home() {
    return (
        <>
            <Link href="/dashboard?page=1">Movie List</Link>
        </>
    )
}