import React, { Component } from 'react'
import { SPOTIFY_ACCESS_TOKEN } from '../../modules/keys'
class NewPlaylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            name: null
        }
    }

    generate() {
        console.log('this.state', this.state);
        const userId = 'alecsavvy';
        const BASE_URL = 'https://api.spotify.com/v1/users/'+ userId + '/playlists';
        const FETCH_URL = BASE_URL;
        var myOptions = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + SPOTIFY_ACCESS_TOKEN,
                'Content-Type': 'application/json'
            },
            data: {
                name: '',
                public: true,
                collaborative: false,
                description: '',
            }
        };

        fetch(FETCH_URL, myOptions)
            .then(response => response.json())
    }

    render() {
        let playlist = {
            name: '',
            public: true,
            collaborative: false,
            description: '',
        };

        return (
            <div className="container">
            <hr />
            <div className="col-lg-6">
              <div className="input-group">
                <input type="text" 
                  onChange={event => { this.setState({ query: event.target.value }) }}
                className="form-control" placeholder="Name of playlist..." />
                <span className="input-group-btn">
                  <button 
                  onClick={()=> this.generate()}
                   className="btn btn-default" type="button">Generate!</button>
                </span>
              </div>
            </div>
            <hr />
            <div>
              <div> {playlist.name} </div>
            </div>
    
    
            </div>
        );
    }
}

export default NewPlaylist