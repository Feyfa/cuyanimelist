import { getAnimeResponse } from "@/app/libs/api-libs";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import Image from 'next/image';

const Page = async ({params: {id}}) => {

    const { data } = await getAnimeResponse(`anime/${id}`);

    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-color-primary text-2xl font-semibold">{data.title} - {data.year}</h3>
            </div>
            <div className="pt-4 px-4 text-color-primary grid grid-cols-3 items-center justify-center gap-2 sm:grid-cols-4">
                <div className="border border-color-primary flex flex-col justify-center items-center rounded p-2">
                    <h3>PERINGKAT</h3>
                    <p>{data.rank}</p>
                </div>
                <div className="border border-color-primary flex flex-col justify-center items-center rounded p-2">
                    <h3>SKOR</h3>
                    <p>{data.score}</p>
                </div>
                <div className="border border-color-primary flex flex-col justify-center items-center rounded p-2">
                    <h3>ANGGOTA</h3>
                    <p>{data.members}</p>
                </div>
                <div className="border border-color-primary flex flex-col justify-center items-center rounded p-2">
                    <h3>EPISODE</h3>
                    <p>{data.episodes}</p>
                </div>
            </div>
            <div className="pt-4 px-4 flex flex-col sm:flex-row gap-2 text-color-primary">
                <Image 
                    src={data.images.webp.image_url}
                    alt={data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full rounded object-cover" />
                <p className="text-justify text-xl">{data.synopsis}</p>
            </div>
            <VideoPlayer youtubeId={data.trailer.youtube_id} />
        </>
    )
}

export default Page;