import Podcast from "./Podcast";

const Favourites = ({ favShows, handleFavClick }) => {
  if (!favShows) return;

  const favShowsList = favShows.map((show, index) => {
    return <Podcast show={show} key={index} handleFavClick={handleFavClick}/>;
  });

  return <>{favShowsList}</>;

};

export default Favourites;
