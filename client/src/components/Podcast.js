import { Link } from "react-router-dom";
import { StyledItem, StyledLink, StyledTitle } from "./StyledComponents";
import { StyledImage } from "./StyledComponents";
import { StyledButton } from "./StyledComponents";
import HeartIcon from "./icons/HeartIcon";
import HeartIconEmpty from "./icons/HeartIconEmpty";

const Podcast = ({ show, addFav, favShows, handleFavDelete }) => {
  if (!show) return null;

  const postFavourite = (payload) => {
    return fetch("http://localhost:9000/api/podcasts", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
      return {
        ...data,
        ...payload
      }
    })
  }

  const deletePodcast = () => {
    console.log(`Deleting podcast with ID ${show.id}`);
    return fetch(`http://localhost:9000/api/podcasts/${show.id}`, {
        method: 'DELETE'
    })
    .then(() => {
      handleFavDelete(show.id); 
    })
  };

  const favShowIds = favShows.map(favShow => favShow.id); 
  const handleFavClick = () => {
    addFav(show);
    postFavourite(show);
  };

  return (
    <StyledItem>

      <StyledLink to={`podcast/${show.id}`}>
      <StyledTitle>{show.name}</StyledTitle>
        <StyledImage src={show.images[1].url} />
      </StyledLink>

      <div>{favShowIds.includes(show.id) ? ( 
        <StyledButton onClick= {deletePodcast}><HeartIcon/></StyledButton>
      ) : (
        <StyledButton onClick={handleFavClick}><HeartIconEmpty/></StyledButton>
      )}</div>

    </StyledItem>
  );
};


export default Podcast;
