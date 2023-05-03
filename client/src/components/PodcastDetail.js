import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Episode from "./Episode";
import { StyledDescription, StyledEpisodeImg, StyledImage } from "./StyledComponents";

const PodcastDetail = ({accessToken}) => {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        getSelected()
    }, [])

    let {id} = useParams()

    const URL = `https://api.spotify.com/v1/shows/${id}?market=GB`

    const getSelected = () => {
        fetch(URL, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setSelected(data);
          })
        }

    console.log(selected)

    if (selected == null || selected.length === 0) {
      return <p>Loading...</p>;
    }

    if (!selected) return
    const mapped = selected.episodes.items.slice(0, 15).map((episode, index) => {
        return <Episode episode={episode} key={index}/>
    })

    return ( 
        <>  
            {selected ? <StyledEpisodeImg src={selected.images[1].url}/> : null}
            {selected ? <StyledDescription>{selected.description}</StyledDescription> : null}
            {mapped}
        </>
     );
}
 
export default PodcastDetail;