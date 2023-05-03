import Podcast from "./Podcast";
import { StyledContainer } from "./StyledComponents";
import { StyledItem } from "./StyledComponents";

const OurPicks = ({ shows, addFav, favShows, handleFavDelete }) => {


  if (!shows) return;


  const ourShows = shows.map((show, index) => {
    return <Podcast show={show} key={index} addFav={addFav} favShows={favShows} handleFavDelete = {handleFavDelete}/>;
 
  });

  return (
    <>
      

      <StyledContainer>
        {ourShows}
      </StyledContainer>
    </>
  );
};

export default OurPicks;
