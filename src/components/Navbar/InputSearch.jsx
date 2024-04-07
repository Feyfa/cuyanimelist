"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation";
import { useRef } from "react"

const InputSearch = () => {

    const searchRef = useRef();
    const router = useRouter();

    const handleSearchInput = (event) => {
        if(
            (event.key === 'Enter' || event.type === 'click') && 
            (searchRef.current.value.trim() !== '')
        ) {
            event.preventDefault();
            const keyword = searchRef.current.value;
            router.push(`/search/${keyword}`);
        }

    }

    return (
        <div className="relative">
            <input 
                ref={searchRef}
                type="text" 
                placeholder="cari anime" 
                className="py-2 pl-2 pr-8 w-full"
                onKeyDown={handleSearchInput} />
            <button className="absolute right-1 top-2 end-2" onClick={handleSearchInput}>
                <MagnifyingGlass size={22} />
            </button>
        </div>
    )
}

export default InputSearch;