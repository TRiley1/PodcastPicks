import { useState } from "react";
import { Link } from "react-router-dom";

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

    };
  

  const URL = `https://api.spotify.com/v1/shows/${show.id}?market=GB`
  console.log(URL)

  const accessToken = 'BQB4U_wVXeLKrbgEhyqzWtm-AcbzYtFIt0A36-QfgghKsUOmbPbbkXccisWm4SCZlJull3_DivQUrRLnIPHMHPCAKqPhKZ35wUwnXx6lYH_kDqPbfcBy'


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
        <Link to={`podcast/${show.id}`}><img onClick={handleSelectClick} src={show.images[2].url} />
        <h5>{show.name}</h5></Link>
        <p>{selected.description}</p>
        <button onClick={handleFavClick}>
          {!isFav ? "Add to faves" : "Remove from faves"}
        </button>
      </div>
    ) : (
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
    )}
  </div>
  );
};

export default Podcast;
