// Actions for the Songkick api and other stuff
import { SONGKICK_API_KEY } from '../modules/keys'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_LOCATION = 'SELECT_LOCATION'
export const SELECT_METRO = 'SELECT_METRO'

export function selectLocation(location) {
    return {
        type: SELECT_LOCATION,
        location
    }
}

function requestPosts(query) {
    return {
      type: REQUEST_POSTS,
      location
    }
  }
  
  function receivePosts(query, json) {
    return {
      type: RECEIVE_POSTS,
      query,
      posts: json.data.children.map(child => child.data),
      receivedAt: Date.now()
    }
  }

  function fetchPosts(query) {
    return dispatch => {
      dispatch(requestPosts(query))
      return fetch(`'http://api.songkick.com/api/3.0/search/locations.json?query=${query}&apikey=${SONGKICK_API_KEY}`)
        .then(response => response.json())
        .then(json => {
            const results = json.resultsPage.results.location[0];
            const metroid = results.metroArea.id;
            const FETCH_CONCERT_URL = `http://api.songkick.com/api/3.0/metro_areas/${metroid}/calendar.json?apikey=${SONGKICK_API_KEY}`;
            fetch(FETCH_CONCERT_URL)
                .then(response => response.json())
                .then(json => {
                    const metroResults = json.resultsPage.results.event;
                })
        })
        .then(json => dispatch(receivePosts(query, json)))
    }
  }