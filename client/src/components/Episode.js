const Episode = ({episode}) => {
    return ( 
        <>  
            <li>
                <span>
                    <img src={episode.images[2].url}/>
                    <a href={episode.external_urls.spotify} target="_blank"><h5>{episode.name}</h5></a>
                </span>
                <p>{episode.description}</p>
                <audio onPlay={episode.audio_preview_url}>Play Button</audio>
            </li>
        </>
     );
}
 
export default Episode;