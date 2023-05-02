import Podcast from "./Podcast";
import { Link } from "react-router-dom";

const Favourites = ({ favShows, handleFavClick }) => {
  if (!favShows) return;

  const favShowsList = favShows.map((show) => {
    return (
      <Link to={`http://localhost:3000/podcast/${show.id}`}>
        <img src={show.images[2].url} />
        <h5>{show.name}</h5>
      </Link>
    );
  });

  return <>{favShowsList}</>;
};

export default Favourites;
