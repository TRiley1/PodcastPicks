import { useState } from "react";

const Podcast = ({ show, addFav }) => {
  const [isFav, setIsFav] = useState(false);

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
    setIsFav(!isFav);
    postFavourite(show)
  };

  if (!show) return;

  return (
    <div>
      <img src={show.images[2].url} />
      <h5>{show.name}</h5>
      {!isFav ? (
        <button onClick={handleFavClick} addFav={addFav}>
          Add to faves
        </button>
      ) : (
        <button>Remove from faves</button>
      )}
    </div>
  );
};

export default Podcast;
