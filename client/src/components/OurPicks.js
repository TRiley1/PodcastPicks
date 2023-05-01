import Podcast from "./Podcast";

const OurPicks = ({ shows }) => {

    

  const ourShows = shows.map((show, index) => {
    console.log(show);
    return <Podcast show={show} key={index} />;
  });

  return (
    <>
      <h4>Our Picks</h4>
      {ourShows}
    </>
  );
};

export default OurPicks;
