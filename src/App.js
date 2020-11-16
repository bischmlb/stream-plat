import logo from './logo.svg';
import './App.css';
import requests from './requests';
import { Font } from 'react';
import ReactDOM from 'react-dom'

/* COMPONENTS */
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';



function App() {
  return (
    <div className="App">

    <Nav />

      <Banner className=""
      />

      <div className="container">
      <Row
      title="Netflix Originals"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={false}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies} isLargeRow={false}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} isLargeRow={false}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} isLargeRow={false}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} isLargeRow={false}/>

      </div>


    </div>
  );
}

export default App;
