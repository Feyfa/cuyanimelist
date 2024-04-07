"use client"

import { FileSearch } from "@phosphor-icons/react";
import Link from 'next/link'

const Page = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center font-semibold text-2xl text-color-accent gap-10">
            <div className="flex justify-center items-center">
                <div className="py-3 px-5 border-r border-r-color-accent">
                    <FileSearch size={33} />
                </div>
                <h3 className="py-3 px-5">NOT FOUND</h3>
            </div>
            <div>
                <Link className="text-color-primary hover:text-color-accent underline" href="/">Kembali</Link>
            </div>
        </div>
    )
}

export default Page

