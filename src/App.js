//Deployed at https://netflix-clone-772c3.web.app at firebase

import React, { Component } from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';

class App extends Component {
  render() {
    return (
      <div className="App">
		 <Nav       />	
		 <Banner    />	
         <Row title="NETFLIX-ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
		 <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>	
		 <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
		 <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
		 <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
		 <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
		 <Row title="Romentic Movies" fetchUrl={requests.fetchRomanceMovies}/>
		 <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>	
      </div>
    );
  }
}

export default App;
