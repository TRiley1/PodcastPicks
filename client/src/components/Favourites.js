import Podcast from "./Podcast";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


const Favourites = ({ favShows, handleFavDelete }) => {


  const deletePodcast = (id) => {
    console.log(`Deleting podcast with ID ${id}`);
    return fetch(`http://localhost:9000/api/podcasts/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
      handleFavDelete(id); 
    })
  };
  
  if (!favShows) return;

  const favShowsList = favShows.map((show) => {
    return (
      <>
        <Link to={`http://localhost:3000/podcast/${show.id}`}>
          <img src={show.images[2].url} />
          <h5>{show.name}</h5>
        </Link>
        <button onClick={() => deletePodcast(show.id)}>Delete</button>
      </>
    );
  });

  return <>{favShowsList}</>;
};

export default Favourites;
