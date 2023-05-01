import { useState } from "react";

const Podcast = ({ show, addFav }) => {
  const [isFav, setIsFav] = useState(false);
  const [selected, setSelected] = useState(null);

  if (!show) return;


  const handleFavClick = () => {
    addFav(show);
    setIsFav(!isFav);
  };

  const handleSelectClick = () => {
    getSelected()
  }

  const URL = `https://api.spotify.com/v1/shows/${show.id}?market=GB`
  console.log(URL)
  const accessToken = 'BQBX3alEK2KQlLLhUKBleP563spqpMKx6DXm-RYr6O1a4IRtebJKG_scGoItzv-XZcHYq92In8XFXCNlYwfUSsCs5oFYMb5AON386VJjiu1LxBce2e7K'

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
