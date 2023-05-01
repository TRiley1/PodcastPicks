import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Favourites from "../components/Favourites";
import PodcastByGenre from "../components/PodcastByGenre";
import About from "../components/About";
import Home from "../components/Home";

const PodcastPicksContainer = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getShows();
  }, []);

  const showsUrl = "https://api.spotify.com/v1/shows?ids=4rOoJ6Egrf8K2IrywzwOMk,7g6RO74SVquuVd8sbwzk7q,0Z0KhuivFm1Ry4WIpWspPv,7iQXmUT7XGuZSzAMjoNWlX,1L4biGtn1rrp8yBmV0MFlb,6cKm5noj2BK3M2mJKcXswC,68XHjBcgGBEA8HQcIHZwl5,1Ysx8g1Iw42gESAtegrFaH,1Zuurv8AZFWti60lSXiDgz,3g89DYSv46rN1AnYmBjDgc,7oZTRX8Q4OtD1SgKRbiXw5,7oZTRX8Q4OtD1SgKRbiXw5,5yl10o2UFyMc9vzVKXVQ3o,0azMejb7zrmAqctVsUSAdq,79CkJF3UJTHFV8Dse3Oy0P,6olvQhNhQwMbGG26t3rVgM,5iaZ78Bqj6Jgrcqjs6NBG7,2K186zrvRgeE2w0wQjbaw7,0XrOqvxlqQI6bmdYHuIVnr,7zdc2S4VPAGPYJ3ecjzBNh,1xDawqT8Cgm6HAnbpFX5T5,1xDawqT8Cgm6HAnbpFX5T5,63hkYLOuRSVzhFNmMLX8wK,4UjhcQPewUJwOgGHWtjTuC,7bnjJ7Va1nM07Um4Od55dW,7Cvsbcjhtur7nplC148TWy,2F9rNDThYAfyLdy9Pv3t0i,3gaGfrqgnVqUBNDdtv5p3S,0zXLdM0YV1ukb8p8WzEG6D,6ixcVOUX3HR8WiVohQJXLF&market=GB";
  const accessToken = "BQDlcSyylqpkurHWCul_ZoT3Haeu_HifDc-lBe8k2mYrVxsNB0lIkvZzvwwx6Uxu3Ip1ajh973I_1319X3oQJ0aNBiwW-Rvwq3dep4hEuN7FtWgoAxVt";

  const getShows = () => {
    fetch(showsUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setShows(data.shows);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/api/podcasts" element={<Home shows={shows} />} />
          <Route path="/api/podcasts/favourites" element={<Favourites />} />
          <Route path="api/podcasts/explore" element={<PodcastByGenre />} />
          <Route path="api/podcasts/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default PodcastPicksContainer;
