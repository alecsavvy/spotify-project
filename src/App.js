import React, { Component } from 'react';
import spotifyLogo from './spotify-logo.png';
import './App.css';
import SearchArtists from './components/SearchArtists'
import NewPlaylist from './components/NewPlaylist'
import Venues from './components/Venues'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={spotifyLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Spotify Project</h1>
        </header>
        <p className="App-intro">
          Created by Alec Savoy.
        </p>
        <SearchArtists />
        <NewPlaylist />
        <Venues />
      </div>
    );
  }
}

export default App;
