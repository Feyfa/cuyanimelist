import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Link from 'next/link';
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
    
    const topAnime = await getAnimeResponse('top/anime', 'limit=8');

    return (
        <div>
            {/* Anime Terpopuler */}
            <section>
                <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua" />
                <AnimeList api={topAnime} />
            </section>
        </div>
    )
}

export default Page;