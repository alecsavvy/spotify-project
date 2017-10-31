import * as types from './actionsTypes'
import { SONGKICK_API_KEY } from '../keys'

function url(){
    const query = 'London'
    // query is going to be coming from the state so it doesn't have to be passed in 
    // as a parameter becaues I currently do not want to deal with that now
    return 'http://api.songkick.com/api/3.0/search/locations.json?query='+ query +'&apikey='+ SONGKICK_API_KEY;
}

export function receiveLocationSearch(json){
    return { type: types.RECEIVE_SONGKICK_LOCATION_SEARCH, location: json}
}

export function fetchLocationSearch(){
    return dispatch => {
        return fetch(url())
        .then(response => response.json())
    }
}
