import React, { useState } from 'react';


const Episode = ({episode}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    
    const handlePlayClick = () => {
          const audio = document.getElementById('audioPlayer');
          audio.play();
          setIsPlaying(true)
        }; 

    const handlePauseClick = () => {
        const audio = document.getElementById('audioPlayer');
        audio.pause();
        setIsPlaying(false)
        };     

    return ( 
        <>  
            <li>
                <span>
                    <img src={episode.images[2].url}/>
                    {!isPlaying ? <img
                    alt={`Play ${episode.name}`}
                    src='https://image.freepik.com/free-icon/play-button_318-42541.jpg'
                    onClick={handlePlayClick}
                    width="50"
                    /> : null}
                    {isPlaying ? <img
                    alt={`Pause ${episode.name}`}
                    src='/pause-symbol-in-circle.png'
                    onClick={handlePauseClick}
                    width="50"
                    /> : null}
                    <audio
                        id="audioPlayer"
                        src={episode.audio_preview_url} 
                    />
                    <a href={episode.external_urls.spotify} target="_blank"><h5>{episode.name}</h5></a>
                </span>
                <p>{episode.description}</p>
            </li>
        </>
     );
}
 
export default Episode;