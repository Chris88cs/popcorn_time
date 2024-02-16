'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
export default function Search({
        searchParams,
    }: {
        searchParams: { page: number | 1, search: string | '' }
    }) {
    const router = useRouter();
    const searchValue = searchParams.search;

    //search
    const handleClick = () => {
        
        const input = document.getElementById('searchText') as HTMLInputElement | null;
        if (input != null) { 
            router.push('/dashboard?page=1&search=' + input?.value);
        }
    };

    const [stateOfInput, setStateOfInput] = useState("");

    return (
        <>
            <div className="items-center px-4 flex justify-center" >
                <div className="relative mr-3">
                    <input type="text" id="searchText" className="block p-2  w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Search Here..." value={stateOfInput} onChange={(e) => setStateOfInput(e.target.value)} />
                    <button className="absolute top-3 right-3 items-center cursor-pointer">
                        <svg onClick={handleClick} className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg>
                    </button>
                </div>
            </div>
        </>
    )
}