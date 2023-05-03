import Podcast from "./Podcast";

const OurPicks = ({ shows, addFav, isFav, favShows, handleFavDelete }) => {


  if (!shows) return;


  const ourShows = shows.map((show, index) => {
    return <Podcast show={show} key={index} addFav={addFav} favShows={favShows} handleFavDelete = {handleFavDelete}/>;
 
  });

  return (
    <>
      <h4 className="our-picks-header">Our Picks</h4>

      {ourShows}
    </>
  );
};

export default OurPicks;
