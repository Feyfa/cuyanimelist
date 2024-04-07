import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 px-4">
            {/* jika api.data ada isinya maka jalankan operasi map nya */}
            {/* jika api.data belum ada isinya, maka tunggu dulu */}
            {api.data?.map(anime => 
                <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`} className="transition-all duration-200 ease-linear cursor-pointer text-color-primary hover:text-color-accent">
                    <Image 
                        src={anime.images.webp.image_url} 
                        alt="..." 
                        width={350} 
                        height={350} 
                        className="w-full max-h-80 object-cover" 
                        />
                    <h3 className="font-bold text-md py-2 md:text-xl">{anime.title}</h3>
                </Link>
            )}
        </div>
    )
}

export default AnimeList;