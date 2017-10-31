import initialState from './initialState';
import { FETCH_SONGKICK_LOCATION_SEARCH, RECEIVE_SONGKICK_LOCATION_SEARCH } from '../actions/actionsTypes'

export default function state(state = initialState.state, action){
    let newState;
    switch(action.type){
        case FETCH_SONGKICK_LOCATION_SEARCH:
            console.log('FETCH_SONGKICK_LOCATION_SEARCH Action');
            return action;
        case RECEIVE_SONGKICK_LOCATION_SEARCH:
            console.log('RECEIVE_SONGKICK_LOCATION_SEARCH Action')
            return action.state;
        default:
            return state;
    }
}