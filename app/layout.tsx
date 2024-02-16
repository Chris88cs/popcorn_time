import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "PopcornTime",
    description: "This is a movie list",
};

export default function RootLayout({
    children,
    search,
}: Readonly<{
    children: React.ReactNode;
    search: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {search}
                {children}
            </body>
        </html>
    );
}