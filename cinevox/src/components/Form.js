import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Form = () => {
  const [moviesdata, setMoviesdata] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=d6550bd46ed439905916ceb920fb07c4&query=avenger&language=fr-FR"
      )

      .then((res) => setMoviesdata(res.data.results));
  }, []);

  return (
    <div className="form-component">
      <div className="form-container">
        <form action="">
          <input type="text" placeholder="Entrez le titre" id="search-input" />
          <input type="submit" value="Recherchez" />
        </form>

        <div className="btn-sort-container">
          <div className="bt-sort" id="goodToBad">
            Top<span>--></span>
          </div>
          <div className="bt-sort" id="badToGood">
            Flop<span>--></span>
          </div>
        </div>
      </div>

      <div className="result">
        {moviesdata.slice(0,12).map((movie) => (
          <Card  key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  );
};

export default Form;
