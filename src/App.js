import React, { Component } from 'react';
import spotifyLogo from './spotify-logo.png';
import './App.css';
import SearchArtists from './components/spotify/SearchArtists'
import NewPlaylist from './components/spotify/NewPlaylist'
import Venues from './components/songkick/Venues'
import LocationSearch from './components/songkick/LocationSearch'

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
        <LocationSearch />
      </div>
    );
  }
}

export default App;
