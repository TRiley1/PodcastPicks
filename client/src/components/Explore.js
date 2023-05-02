import Podcast from "./Podcast";
import React, { useState, useEffect } from "react";

const Explore = ({ shows }) => {
  const [sortedShows, setSortedShows] = useState(shows);
  const [searchText, setSearchText] = useState("");

  if (!shows) return

  const sortedShowsToMapThrough = sortedShows.map((show, index) => {
    return <Podcast show={show} key={index} />;
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

  const sortKidFriendly = () => {
    const kidFriendlyShows = shows.filter((show) => show.explicit === false);
    setSortedShows(kidFriendlyShows);
  };

  const sortAToZ = () => {
    const aToZShows = shows.sort((a, b) => (a.name > b.name ? 1 : -1));
    setSortedShows(aToZShows);
  };

  return (
    <>
      <input
        type="text"
        value={searchText}
        onChange={searchShows}
        placeholder="Search keyword..."
      />
      <button onClick={sortKidFriendly}>Kid Friendly Options!</button>
      <button onClick={sortAToZ}>All Shows A-Z</button>

      {sortedShowsToMapThrough}
    </>
  );
};

export default Explore;
