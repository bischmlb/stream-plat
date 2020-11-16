import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';


const base_urlPics = "https://image.tmdb.org/t/p/original/";


function Row( { title, fetchUrl, isLargeRow } ) {

  const [movies, setMovies] = useState([]); // UseState er en React funktion -> En slags 'setter' til et element.
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    // if [], run once when row loads, and dont run again;

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();

  }, [fetchUrl]);

  const opts={
    height:"390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
        console.log(movie?.title);
        console.log(movie?.name);
        console.log(movie?.original_name);
      })
      .catch((error) => console.log(error));
    }
  }

  return (
    <div className="row">
    <h2 className="title"> { title } </h2>

    <div className="row_posters">
    {/* container -> posters*/}
    {movies.map( movie => (
      <img
      key={movie.id}
      onClick={() => handleClick(movie)}
      className={`row_poster ${isLargeRow && "row_posterLarge"}`}
      src={`${base_urlPics}${
        isLargeRow ? movie.poster_path : movie.backdrop_path
      }`}
      alt={movie.name} />
    ))}
    </div>
    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row;
