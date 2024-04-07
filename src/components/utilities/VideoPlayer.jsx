"use client"

import { useState } from 'react';
import Youtube from 'react-youtube';

const VideoPlayer = ({youtubeId}) => {

    const [isOpen, setIsOpen] = useState(true);

    const handleVideoPlayer = () => {
        setIsOpen(i => !i);
    }

    const options = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <div className="flex justify-end text-color-primary mb-1">
                    <button 
                        onClick={handleVideoPlayer} 
                        className='px-3 bg-color-secondary text-3xl text-color-primary'>
                        x
                    </button>
                </div>
                <Youtube 
                    videoId={youtubeId} 
                    onReady={(event) => event.target.pauseVideo()} 
                    opts={options}
                    onError={() => alert('video not found')} />
            </div>
        )
    }

    const ButtonOpenTrailer = () => {
        return (
            <button onClick={handleVideoPlayer} className='text-xl hover:bg-color-accent transition-all duration-300 fixed bottom-5 right-5 bg-color-primary px-2 py-1 rounded'>Tonton Trailer</button>
        )
    }

    return isOpen ? 
           <Player /> : 
           <ButtonOpenTrailer />
}

export default VideoPlayer;