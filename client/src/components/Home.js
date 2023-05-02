import OurPicks from "./OurPicks";
import Search from "./Search";
import React, { useState, useEffect } from 'react';


const Home = ({ shows, addFav }) => {

  const [search, setSearch] = useState('')
  const [filterShows, setFilterShows] = useState(shows)

  useEffect(() => {
    const searchTerm = search.toLowerCase()
  
    const searchFilter = shows.filter((show) => {
        return show.name.toLowerCase().includes(searchTerm)
    })
  
    if (searchFilter.length === 0) {
      setFilterShows(shows)
    } else {
      setFilterShows(searchFilter)
    }
  }, [search, shows])
  

  const searchHome = (value) => {
    setSearch(value)
  }

  return (
    <>
      <h1>PodcastPicks</h1>
      <Search searchHome={searchHome}/>
      <OurPicks shows={filterShows} addFav={addFav} />
    </>
  );
};

export default Home;
