import React from 'react'
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './components/Nav';
import requests from './requests';
import './App.css'
function App() {
  return (
    <div className='app'>
      {/* <Navbar/> */}
      < Nav />
      <Banner/>
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.getNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.getTrending}/>
      {/* <Row title="Top Rated" fetchUrl={requests.getTopRated}/> */}
      <Row title="Action Movies" fetchUrl={requests.getActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.getComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.getHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.getRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.getDocumentaries}/>
    </div>
  );
}

export default App;
