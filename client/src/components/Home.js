import OurPicks from "./OurPicks";
import Search from "./Search";
import React, { useState, useEffect } from "react";
import HomeIcon from "./icons/HomeIcon";

const Home = ({ shows, addFav }) => {
  const [search, setSearch] = useState("");
  const [filterShows, setFilterShows] = useState(shows);

  useEffect(() => {
    const searchTerm = search.toLowerCase();

    const searchFilter = shows.filter((show) => {
      return show.name.toLowerCase().includes(searchTerm);
    });

    if (searchFilter.length === 0) {
      setFilterShows(shows);
    } else {
      setFilterShows(searchFilter);
    }
  }, [search, shows]);

  const searchHome = (value) => {
    setSearch(value);
  };

  return (
    <>
      <div className="home-logo-container">
        <button className="home-logo">PP</button>
      </div>
      <Search searchHome={searchHome} />
      <OurPicks shows={filterShows} addFav={addFav} />
    </>
  );
};

export default Home;
