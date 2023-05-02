import Podcast from "./Podcast";

const OurPicks = ({ shows, addFav, isFav, favShows }) => {
  if (!shows) return
  const ourShows = shows.map((show, index) => {
    return <Podcast show={show} key={index} addFav={addFav} isFav={isFav} favShows={favShows}/>;
  });

  return (
    <>
      <h4>Our Picks</h4>
      {ourShows}
    </>
  );
};

export default OurPicks;
