import { Link } from "react-router-dom";

const Podcast = ({ show, addFav }) => {

  if (!show) return;

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

  const handleFavClick = () => {
    addFav(show)
    postFavourite(show)
  };

  return (

    <div>

        <Link to={`podcast/${show.id}`}>
          <img src={show.images[2].url} />
          <h5>{show.name}</h5>
        </Link>
        <button onClick={handleFavClick}>

        </button>

    
  </div>
  );
};

export default Podcast;
