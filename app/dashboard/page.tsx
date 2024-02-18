import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Movie List",
};

export default function Dashboard() {
    return (
        <>
            <h1 className="font-sans text-center pb-10">List of movies</h1>
        </>
    )
}