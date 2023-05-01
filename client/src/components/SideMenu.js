import { Link } from "react-router-dom";

const SideMenu = () => {
    return ( 
        <ul>
            <li><Link to="api/podcasts/favourites">Favourites</Link></li>
            <li><Link to="api/podcasts/explore">Explore</Link></li>
            <li><Link to="api/podcasts/about">About</Link></li>
        </ul>
     );
}
 
export default SideMenu;