import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import { API_key } from "../API_info";

import "./movie-details.css";

//make use of the linked slug here somehow ... props cannot be used

const MovieDetails = ({ title, overview, backdrop_path }) => {
  // the id is captured by MovieDetails using useParams hook; 
  //  then we can do whatever we want with it
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  // console.log({ id });

  useEffect(() => {
    //API url pasted from API_info and inserted id
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_key}&language=en-US&page=1`)
      .then(response => response.json())
      // .then(data => console.log(data));
      .then(data => setMovie(data));
  }, [id])
  const BACKDROP_URL = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
  const POSTER_URL = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
  //onclick(history.goBack)

  return (
    <section className="movie-details-main-container">
      <img className="movie-details-background" src={BACKDROP_URL} alt={movie.title} />
      <div className="movie-details">
        <h1>{movie.title}</h1>
        <h2>{movie.original_title}</h2>
        <p>{movie.vote_average}/10</p>
        <img src={POSTER_URL} alt={movie.title} />
        <article>{movie.overview}</article>
      </div>
      {/* <div className="movie-details-poster-image">
        <img src={POSTER_URL} alt={movie.title} />
      </div> */}

      {/* background w1280 */}
      {/* {movie.backdrop_path} */}

      {/* smaller image  w185*/}
      {/* {movie.poster_path} */}

      {/* <article>{movie.overview}</article> */}
    </section>
  );
};


export default MovieDetails;