import { Link } from "react-router-dom";

const SideMenu = () => {
    return ( 
        <ul>
            <li><Link to="/favourites">Favourites</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
     );
}
 
export default SideMenu;