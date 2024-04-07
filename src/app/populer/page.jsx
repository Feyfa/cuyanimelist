"use client"

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../libs/api-libs";

const Page = () => {

    const [page, setPage] = useState(1);
    const [topAnime, setTopAnime] = useState([]);

    const fetchData = async () => {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
        // const topAnime = await response.json();
        const populerAnime = await getAnimeResponse('top/anime', `page=${page}`);
        setTopAnime(populerAnime)
    }

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <>
            <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
            <AnimeList api={topAnime} />
            {/* jika topAnime.pagination sudah ada maka jalankan kode di dalam kurung */}
            {/* karena saat di fetch membutuhkan waktu oleh karena itu harus menggunakan kondisi jika ada tampilkan jika belum ada jangan tampilkan dahulu */}
            <Pagination  page={page} setPage={setPage} lastPage={topAnime.pagination?.last_visible_page} />
        </>
    )
}

export default Page;