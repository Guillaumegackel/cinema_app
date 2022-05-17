import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";

const UserLists = () => {
  const [ListData, setListData] = useState([]);

  useEffect(() => {
let moviesId=window.localStorage.movies ? window.localStorage.movies.split(",") :[];
console.log("🚀 ~ file: UserLists.js ~ line 10 ~ useEffect ~ moviesId", moviesId)

for (let i = 0; i<moviesId.length; i++){

	axios
	.get(
		`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=d6550bd46ed439905916ceb920fb07c4&language=fr-FR`
		)
		.then((res) => setListData((ListData)=> [...ListData, res.data]));
	}
	}, []);
	
  return (
    <div className="user-list-page">
      <Header />
      <div className="titre-coup-de-coeur">
       Vos  Coups de Coeur <span>💓</span>
      </div>
      <div className="result">
	  {ListData.length > 0 ? ListData.map((movie)=> <Card movie={movie} key={movie.id} /> 
	  ) : (<h2>Aucun coup de coeur pour le moment</h2> )}
    </div></div>
  );
};

export default UserLists;
