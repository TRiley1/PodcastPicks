import React, { useState, useEffect } from "react";
import Podcast from "./Podcast";
import styled from "styled-components";
import {StyledItem, StyledContainerFav, StyledImageFav, StyledTitleFav} from "./StyledComponents"
import { Link } from "react-router-dom";

const Explore = ({ shows, favShows, addFav, handleFavDelete }) => {
  const [sortedShows, setSortedShows] = useState(shows);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSortedShows(shows);
  }, [shows]);

  if (!shows) return;
  

  console.log(sortedShows);

  const sortedShowsToMapThrough = sortedShows.map((show, index) => {
    return (
      <StyledContainerFav>
        <StyledItem>
          <Link to={`http://localhost:3000/podcast/${show.id}`}>
            <StyledTitleFav>{show.name}</StyledTitleFav>
            <StyledImageFav src={show.images[1].url} />
          </Link>
        </StyledItem>
      </StyledContainerFav>
    );
  });

  const searchShows = (event) => {
    setSearchText(event.target.value);
    const searchedShows =
      searchText === ""
        ? shows
        : shows.filter(
            (show) =>
              show.description &&
              show.description.toLowerCase().includes(searchText.toLowerCase())
          );
    setSortedShows(searchedShows);
  };

  const sortAToZ = () => {
    const aToZShows = shows.toSorted((a, b) => (a.name > b.name ? 1 : -1));
    setSortedShows(aToZShows);
  };

  const sortKidFriendly = () => {
    const kidFriendlyShows = shows.filter((show) => show.explicit === false);
    setSortedShows(kidFriendlyShows);
  };

  return shows ? (
    <div className="explore-container">
      <input
        type="text"
        value={searchText}
        onChange={searchShows}
        placeholder="Search keyword..."
        className="explore-search-bar"
      />
      <button onClick={sortKidFriendly} className="explore-button">Kid Friendly Options!</button>
      <button onClick={sortAToZ} className="explore-button">All Shows A-Z</button>

      {sortedShowsToMapThrough}
    </div>
  ) : null;
};

export default Explore;
