import Podcast from "./Podcast";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { StyledImageFav } from "./StyledComponents";
import { StyledTitleFav } from "./StyledComponents";
import { StyledItem } from "./StyledComponents";
import { StyledContainerFav } from "./StyledComponents";
import { StyledButtonFav, StyledLink } from "./StyledComponents";
import TrashCan from "./icons/TrashCan";
import InfoIcon from "./icons/InfoIcon";


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
      <StyledContainerFav>
        <StyledItem>
          <StyledLink to={`http://localhost:3000/podcast/${show.id}`}>
            <StyledTitleFav>{show.name}</StyledTitleFav>
            <StyledImageFav src={show.images[1].url} /></StyledLink>
            <div><StyledButtonFav><InfoIcon/></StyledButtonFav>
          
          <StyledButtonFav onClick={() => deletePodcast(show.id)}><TrashCan/></StyledButtonFav></div>
        </StyledItem>
      </StyledContainerFav>
    );
  });

  return <>{favShowsList}</>;
};

export default Favourites;
