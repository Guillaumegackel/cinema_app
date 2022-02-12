import React from 'react';

const Card = ({movie}) => {
	return (
		<div>
			<div className="card">
				 <img src= {movie.poster_path ?
					"https://images.tmdb.org/t/p/w500" + movie.poster_path : "./img/poster.jpg"} alt=''/>
				<h2>{movie.title}</h2>
			</div>
		</div>
	);
};

export default Card;