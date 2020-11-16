import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube";


const base_urlPics = "https://image.tmdb.org/t/p/original/";


function Row( { title, fetchUrl, isLargeRow } ) {

  const [movies, setMovies] = useState([]); // UseState er en React funktion -> En slags 'setter' til et element.

  useEffect(() => {
    // if [], run once when row loads, and dont run again;

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();

  }, [fetchUrl]);



  return (
    <div className="row">
    <h2 className="title"> { title } </h2>

    <div className="row_posters">
    {/* container -> posters*/}
    {movies.map( movie => (
      <img
      key={movie.id}
      className={`row_poster ${isLargeRow && "row_posterLarge"}`}
      src={`${base_urlPics}${
        isLargeRow ? movie.poster_path : movie.backdrop_path
      }`}
      alt={movie.name} />
    ))}
    </div>
    <YouTube videoId={trailerUrl} opts={opts} />

    </div>
  )
}

export default Row;