import { combineReducers } from 'redux'
import metroSearch from './metroSearch'

const rootReducer = combineReducers({
    metroSearchResponse: metroSearch
});

export default rootReducer