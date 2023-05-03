import React, { useState, useEffect } from 'react';


const Episode = ({episode}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    
    const handleClick = () => {
          const audio = document.getElementById('audioPlayer');
          audio.play();
          setIsPlaying(true)
        }; 

    return ( 
        <>  
            <li>
                <span>
                    <img src={episode.images[2].url}/>
                    <img
                    alt={`Play ${episode.name}`}
                    src='https://image.freepik.com/free-icon/play-button_318-42541.jpg'
                    onClick={handleClick}
                    width="50"
                    />
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