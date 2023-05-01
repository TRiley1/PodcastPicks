import OurPicks from "./OurPicks";
import TopPicks from "./TopPicks";

const Home = ({ shows, addFav }) => {
  return (
    <>
      <h1>Home</h1>
      <OurPicks shows={shows} addFav={addFav} />
      <TopPicks shows={shows} addFav={addFav} />
    </>
  );
};

export default Home;
