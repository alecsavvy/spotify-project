import React, { Component } from 'react'
import { SONGKICK_API_KEY } from '../modules/keys'
class Venues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            results: null
        }
    }

    generate() {
        console.log('this.state', this.state);
        const FETCH_URL = 'http://api.songkick.com/api/3.0/search/locations.json?query='+ this.state.query +'&apikey='+ SONGKICK_API_KEY;

        fetch(FETCH_URL)
            .then(response => response.json())
            .then(json => {
                const results = json.resultsPage.results.location[0];
                this.setState({ results });
            })
    }

    render() {
        let results = {
            city:{
                country: {
                    displayName: '',
                },
                displayName: '',
                lat: '',
                lng: '',
            }
        };
        if (this.state.results !== null) {
            results = this.state.results;
        }
        return (
            <div className="container">
            <hr />
            <div className="col-lg-6">
              <div className="input-group">
                <input type="text" 
                  onChange={event => { this.setState({ query: event.target.value }) }}
                className="form-control" placeholder="Search for a location..." />
                <span className="input-group-btn">
                  <button 
                  onClick={()=> this.generate()}
                   className="btn btn-default" type="button">Search!</button>
                </span>
              </div>
            </div>
            <hr />

            <div>
              <div> Country Name: {results.city.country.displayName}   </div>
              <div> City Name: {results.city.displayName}   </div>
              <div> Latitude: {results.city.lat}   </div>
              <div> Longitude: {results.city.lng}   </div>
            </div>
    
    
            </div>
        );
    }
}

export default Venues