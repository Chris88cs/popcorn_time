import { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image'
export const metadata: Metadata = {
    title: "Popcorn Time",
};

export default function Home() {
    return (
        <>
            <div className="mt-10">
                <div className="inline-block w-1/6 whitespace-nowrap px-2.5">
                    <Image
                        src="/pic.jpg"
                        width={200}
                        height={200}
                        alt="Picture of the author"
                    />
                </div>
                <div className="inline-block w-5/6 whitespace-nowrap align-top">
                    <div>Hi, my name is Christopher, hope that Sir/Madam can give me the opportunity to work in your company.<br/>Do email me at : christopherque88@gmail.com <br/>Please click the link below :</div>
                    <div><Link href="/dashboard">Movie list</Link></div>
                </div>
            </div>
        </>
    )
}