import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import Favourites from "../components/Favourites";
import PodcastByGenre from "../components/PodcastByGenre";
import About from "../components/About";
import Home from "../components/Home";

const PodcastPicksContainer = () => {

const [shows, setShows] = useState([])

useEffect(() => {
    getShows()
}, [])

const getShows = () => {
    fetch('localhost:9000/api/podcasts')
    .then(res => res.json())
    .then(data => setShows(data))
    .catch(err => console.error(err))
}

    return ( 
        <>
        <Router>
            <NavBar /> 
            <Routes>
                <Route path='/api/podcasts' element={< Home shows = {shows}/>} />
                <Route path="/api/podcasts/favourites" element={< Favourites />} />
                <Route path="api/podcasts/explore" element={< PodcastByGenre />} />
                <Route path="api/podcasts/about" element={< About />} />
            </Routes>
        </Router>
        </>
     );              
}
 
export default PodcastPicksContainer;