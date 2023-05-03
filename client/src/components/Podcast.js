import { Link } from "react-router-dom";

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
    <div>

      <Link to={`podcast/${show.id}`}>
        <img src={show.images[2].url} />
        <h5>{show.name}</h5>
      </Link>

      {favShowIds.includes(show.id) ? ( 
        <button onClick= {deletePodcast}>Delete</button>
      ) : (
        <button onClick={handleFavClick}> Add Fave</button>
      )}
    </div>

  );
};


export default Podcast;
