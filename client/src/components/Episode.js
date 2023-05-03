import React, { useState } from 'react';
import { StyledContainer, StyledEpisode, StyledEpisodeImg, StyledEpisodePlay, StyledFlex, StyledText } from './StyledComponents';


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
            <StyledEpisode>
                    <div>
                    <StyledEpisodeImg src={episode.images[2].url}/>
                    {!isPlaying ? <StyledEpisodeImg
                    alt={`Play ${episode.name}`}
                    src='/play-button.png'
                    onClick={handlePlayClick}
                    width="50"
                    /> :
                    <StyledEpisodeImg
                    alt={`Pause ${episode.name}`}
                    src='/pause-symbol-in-circle.png'
                    onClick={handlePauseClick}
                    width="50"
                    />}
                    <audio
                        id="audioPlayer"
                        src={episode.audio_preview_url} 
                    /></div>
                    <StyledFlex>
                    <a href={episode.external_urls.spotify} target="_blank"><h4>{episode.name}</h4></a>
                    </StyledFlex>
                <StyledText>{episode.description}</StyledText>
            </StyledEpisode>
        </>
     );
}
 
export default Episode;