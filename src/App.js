import React from 'react';
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      {/* Navbar  */}
      <Navbar />
      {/* Banner  */}
      <Banner />

      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rating" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentations" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
