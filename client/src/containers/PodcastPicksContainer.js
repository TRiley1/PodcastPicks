import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import NavBar from "../components/NavBar";
import Favourites from "../components/Favourites";
import PodcastByGenre from "../components/PodcastByGenre";
import About from "../components/About";
import Home from "../components/Home";

const PodcastPicksContainer = () => {
    return ( 
        <>
        <Router>
            <NavBar /> 
            <Routes>
                <Route path='/' element={< Home />} />
                <Route path="/favourites" element={< Favourites />} />
                <Route path="/explore" element={< PodcastByGenre />} />
                <Route path="/about" element={< About />} />
            </Routes>
        </Router>
        </>
     );              
}
 
export default PodcastPicksContainer;