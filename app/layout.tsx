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
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en"> 
            <body className={inter.className}>
                <link
                    rel="stylesheet"
                    type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                {children}
            </body>
        </html>
    );
}