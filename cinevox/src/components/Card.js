import React from "react";

const Card = ({ movie }) => {
  const dateFormatter = (date) => {
    let [yy, mm, dd] = date.split("-");
    // return dd+" "+mm+" "+" "+yy
    return [dd, mm, yy].join("/");
  };

  const genreFinder = () => {
    let genreArray = [];

    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push("Action");
          break;

        case 12:
          genreArray.push("Aventure");
          break;

        case 16:
          genreArray.push("Animation");
          break;

        case 35:
          genreArray.push("Comédie");
          break;

        case 80:
          genreArray.push("Crime");
          break;

        case 99:
          genreArray.push("Documentaire");
          break;

        case 18:
          genreArray.push("Drame");
          break;

        case 10751:
          genreArray.push("Familial");
          break;

        case 14:
          genreArray.push("Fantastique");
          break;

        case 36:
          genreArray.push("Histoire");
          break;

        case 27:
          genreArray.push("Horreur");
          break;

        case 10402:
          genreArray.push("Musique");
          break;

        case 9648:
          genreArray.push("Mystère");
          break;

        case 10749:
          genreArray.push("Romance");
          break;

        case 878:
          genreArray.push("Science-Fiction");
          break;

        case 10770:
          genreArray.push("Téléfilm");
          break;

        case 53:
          genreArray.push("Thriller");
          break;

        case 10752:
          genreArray.push("Guerre");
          break;

        case 37:
          genreArray.push("Western");
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id);
      window.localStorage.movies = storedData;
    } else {
      alert("Vous l'avez dejà rajouté");
    }
  };

  const deleteStorage =() =>{

	let stored =window.localStorage.movies.split(",");



	let newData = stored.filter((id)=> id !=movie.id);
	  window.localStorage.movies=newData;
  }

  return (
    <div>
      <div className="card">
        <img
          src={
            movie.poster_path
              ? "https://images.tmdb.org/t/p/w500" + movie.poster_path
              : "./img/poster.jpg"
          }
          alt=""
        />
        <h2>{movie.title}</h2>
        {movie.release_date ? (
          <h5>sorti le: {dateFormatter(movie.release_date)}</h5>
        ) : (
          "pas précisé"
        )}
        <h4>
          {movie.vote_average}/10 <span>⭐</span>
        </h4>
        <ul>
          {movie.genre_ids
            ? genreFinder()
            : movie.genres.map((genre, index) => (
                <li key={index}>{genre.name}</li>
              ))}
        </ul>
        {movie.overview ? <h3>Synopsis</h3> : "non renseigné"}
        <p>{movie.overview}</p>

        {movie.genre_ids ? (
          <div className="btn" onClick={() => addStorage()}>
            Ajouter aux coups de coeur
          </div>
        ) : (
          <div className="btn" onClick={() => {
			  deleteStorage()
			  window.location.reload();
			}}> Supprimer </div>
        )}
      </div>
    </div>
  );
};

export default Card;
