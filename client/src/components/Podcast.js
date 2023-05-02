import { useState } from "react";

const Podcast = ({ show, addFav }) => {
  const [isFav, setIsFav] = useState(false);
  const [selected, setSelected] = useState(null);

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
    setIsFav(!isFav);
    postFavourite(show)
  };

  const handleSelectClick = () => {
    getSelected()
  }

  const URL = `https://api.spotify.com/v1/shows/${show.id}?market=GB`
  console.log(URL)
  const accessToken = 'BQCwWaSxLH8dJhTHg4SaIsYFJwHnZQiaIiVePDrh9naZqEccH_WvoYOm02GacSKDoMAf3mQVWAVx8wsnin9eeKOmpr-hHSIUjy9SMW3IAn2gaBdgB49d'

  const getSelected = () => {
    fetch(URL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSelected(data);
      })
    }
  

  return (
    <div>
    {selected ? (
      <div>
        <img onClick={handleSelectClick} src={show.images[1].url} />
        <h5>{show.name}</h5>
        <p>{selected.description}</p>
        <button onClick={handleFavClick}>
          {!isFav ? "Add to faves" : "Remove from faves"}
        </button>
      </div>
    ) : (
      <div>
        <img onClick={handleSelectClick} src={show.images[1].url} />
        <h5>{show.name}</h5>
        {!isFav ? (
          <button onClick={handleFavClick} addFav={addFav}>
            Add to faves
          </button>
        ) : (
          <button>Remove from faves</button>
        )}
      </div>
    )}
  </div>
  );
};

export default Podcast;
