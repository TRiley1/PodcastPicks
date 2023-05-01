import { useState } from "react";

const Podcast = ({ show, addFav }) => {
  const [isFav, setIsFav] = useState(false);


  const handleFavClick = () => {
    addFav(show);
    setIsFav(!isFav);
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
