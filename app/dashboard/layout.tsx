
export default function RootLayout({
    children,
    search,
    list,
}: Readonly<{
    children: React.ReactNode;
    search: React.ReactNode;
    list: React.ReactNode;
    popup: React.ReactNode;
}>) {
    return (
        <div>
            <div>{children}</div>
            <div>{search}</div>
            <div>{list}</div>
        </div>
    );
}
