import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

function Banner(){
  const [movie, setMovie] = useState([]);

  useEffect (() => {
    async function fetchData(){
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
    );
    return request;
    }
    fetchData();

  }, []);

console.log(movie);

  return(

    <header className="banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      backgroundPosition: "center center",
      backgroundAttachment: "fixed"
    }}
    >

    <div className="banner_contents">
    <h1 className="banner_title">
    {movie?.title || movie?.name || movie?.original_name}
    </h1>

    <h1 className="banner_description">
    {movie?.overview}
    </h1>

    <div className="banner_buttons">

    <button className="banner_button"><FontAwesomeIcon icon={faPlay} size="sm" /> Play</button>
    <button className="banner_button info"><FontAwesomeIcon icon={faInfoCircle} /> More Info</button>

    </div>

    </div>

    <div className="banner--fadeBottom"/>

    </header>
  )
}

export default Banner
