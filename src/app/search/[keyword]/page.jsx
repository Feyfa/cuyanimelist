import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Link from 'next/link';
import { getAnimeResponse } from "@/app/libs/api-libs";

const Page = async ({ params: {keyword} }) => {
    
    const decodeKeyword = keyword.replace(/%20/g, ' ');
    const searchAnime = await getAnimeResponse('anime', `q=${keyword}`);
    
    return (
        <div>
            {/* Anime Terpopuler */}
            <section>
                <Header title={`Pencarian Untuk "${decodeKeyword}..."`} />
                <AnimeList api={searchAnime} />
            </section>
        </div>
    )
}

export default Page;