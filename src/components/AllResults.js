import React, { Component } from 'react';
import Checkbox from './Checkbox';
import Result from './Result';

class AllResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
        results: this.props.results,
        metroResults: this.props.metroResults,
        selectedCheckboxes: null,
        generatedPlaylist: false,
        accessToken: this.props.accessToken,
        trackList: []
    }
}
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
    this.setState({ selectedCheckboxes: this.selectedCheckboxes });
  }

  toggleCheckbox = performances => {
    for (const performance of performances){
        if (this.selectedCheckboxes.has(performance.artist.displayName)) {
            this.selectedCheckboxes.delete(performance.artist.displayName);
          } else {
            this.selectedCheckboxes.add(performance.artist.displayName);
          }
    }
  }

  handleFormSubmit = () => {
    const accessToken = this.state.accessToken;
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    var playlistOptions = {
      method: 'POST',
      headers: {
          'Authorization': 'Bearer ' + accessToken,
          "Content-Type": 'application/json',
      },
      body: "{\"name\":\"Spot-A-Show: Concerts Near You\", \"public\":true}"
    }
    // I just put in my user id for the time being
    fetch('https://api.spotify.com/v1/users/1224231141/playlists', playlistOptions)

    var myOptions = {
      method: 'GET',
      headers: {
          'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
  };
    for (const checkbox of this.selectedCheckboxes) {
      const FETCH_URL = BASE_URL + 'q=' + checkbox + '&type=artist&limit=1';
      fetch(FETCH_URL, myOptions)
          .then(response => response.json())
          .then(json => {
              const artist = json.artists.items[0].id;
              fetch('https://api.spotify.com/v1/artists/'+artist+'/top-tracks?country=US', myOptions)
              .then(response => response.json())
              .then(json => {
                const tracks = json.tracks;
                var trackList = this.state.trackList
                for (var i = 0; i < tracks.length; i++) {
                  trackList.push(tracks[i].uri)
                }
                this.setState({trackList: trackList})
                var myNotJSON = this.state.trackList.join();
                myNotJSON = decodeURIComponent(myNotJSON)

                fetch('https://api.spotify.com/v1/users/1224231141/playlists', myOptions)
                .then(response => response.json())
                .then(json => {
                  const playlistId = json.items[0].id
                  var trackOptions = {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    }
                }
                  fetch('https://api.spotify.com/v1/users/1224231141/playlists/'+playlistId+'/tracks?position=0&uris='+myNotJSON, trackOptions)
                })
              })
          })
    }
    this.setState({ generatedPlaylist: true})
  }

  createCheckbox = label => (
    <Checkbox
      label={label.displayName}
      performances={label.performance}
      handleCheckboxChange={this.toggleCheckbox}
      key={label.id}
    />
  )

  createCheckboxesMetroResults = () => (
    this.props.metroResults.map(this.createCheckbox)
  )

  createResult = content => (
    <Result
      content={content}
      key={content.id}
    />
  )
  
  createResults = () => (
    this.props.metroResults.map(this.createResult)
  )

  render() {
    let results = {
      city:{
          country: {
              displayName: '',
          },
          displayName: '',
          lat: '',
          lng: '',
      },
      metroArea:{
          id: '',
      }
  };

  if (this.props.results !== null) {
      results = this.props.results;
  }
    const generatedPlaylist = this.state.generatedPlaylist;
    const accessToken = this.state.accessToken;
    return (
        <div>
            <div style={{padding: "2%", border: "2px solid", borderColor: "#222", borderRadius: "8px", marginRight: "5%", height: "100%", overflowY: "scroll"}}>
                <div className="container">
                    <div>
                        <div> Country Name: {results.city.country.displayName}   </div>
                        <div> City Name: {results.city.displayName}   </div>
                        <div> Latitude: {results.city.lat}   </div>
                        <div> Longitude: {results.city.lng}   </div>
                        <div> ID: {results.metroArea.id}   </div>
                        </div>
                        <hr />
                    <div className="row">
                        <div className="col-sm-12">
                            {this.createCheckboxesMetroResults()}
                            <hr />
                            {generatedPlaylist ? (<Playlist artistList={this.state.selectedCheckboxes} accessToken={accessToken} />):
                            (<GenerateButton onClick={this.handleFormSubmit} accessToken={accessToken} />)
                            }
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default AllResults;

function GenerateButton(props) {
    return (
      <button 
      onClick={props.onClick}
      style={{
        margin: "2%",
        backgroundColor: "#2FD566",
        border: "none",
        color: "black",
        fontWeight: "bold",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
      }}
      >
        Generate Playlist!
      </button>
    );
  }

  function Playlist(props) {
      return (
        <button 
        onClick={props.onClick}
        style={{
          margin: "2%",
          backgroundColor: "#2FD566",
          border: "none",
          color: "black",
          fontWeight: "bold",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
        }}
        >
          Generated Playlist!
        </button>
      );
    }