import OurPicks from "./OurPicks";


const Home = ({ shows, addFav }) => {
  return (
    <>
      <h1>Home</h1>
      <OurPicks shows={shows} addFav={addFav} />
    </>
  );
};

export default Home;
