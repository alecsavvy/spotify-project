import React, { Component } from 'react'
import { SPOTIFY_ACCESS_TOKEN } from '../../modules/keys'
class SearchArtists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            artist: null
        }
    }

    search() {
        console.log('this.state', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
        var myOptions = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + SPOTIFY_ACCESS_TOKEN
            },
            mode: 'cors',
            cache: 'default'
        };

        fetch(FETCH_URL, myOptions)
            .then(response => response.json())
            .then(json => {
                const artist = json.artists.items[0];
                this.setState({ artist });
            })
    }

    render() {
        let artist = {
            name: '',
            followers: {
                total: ''
            }
        };
        if (this.state.artist !== null) {
            artist = this.state.artist;
        }

        return (
            <div className="container">
            <hr />
            <div className="col-lg-6">
              <div className="input-group">
                <input type="text" 
                  onChange={event => { this.setState({ query: event.target.value }) }}
                className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                  <button 
                  onClick={()=> this.search()}
                   className="btn btn-default" type="button">Go!</button>
                </span>
              </div>
            </div>
            <hr />
            <div>
              <div> {artist.name}   </div>
              <div> {artist.followers.total} </div>
            </div>
    
    
            </div>
        )
    }
}

export default SearchArtists