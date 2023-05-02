import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import EpisodeList from "./EpisodeList";
import Episode from "./Episode";

const PodcastDetail = ({accessToken, shows}) => {
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

    if (!selected) return
    const mapped = selected.episodes.items.slice(0, 10).map((episode, index) => {
        return <Episode episode={episode} key={index}/>
    })

    return ( 
        <>  
            {selected ? <img src={selected.images[1].url}/> : null}
            {selected ? <h3>{selected.description}</h3> : null}
            <ul>{mapped}</ul>
        </>
     );
}
 
export default PodcastDetail;