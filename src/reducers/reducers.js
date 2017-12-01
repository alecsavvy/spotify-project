// src/reducer.js

import { List, Map } from 'immutable';

const init = List([]);

export default function(state=init, action) {
  switch(action.type) {
    case 'ADD_TODO':
        return state.push(Map(action.payload));
    case 'TOGGLE_TODO':
        return state.map(state => {
          if(state.get('id') === action.payload) {
            return state.update('isDone', isDone => !isDone);
          } else {
            return state;
          }
        });
    case 'ADD_ARTIST':
        return state.push(Map(action.payload));
    case 'TOGGLE_ARTIST':
    return state.map(state => {
        if(state.get('id') === action.payload) {
            return state.update('selected', selected => !selected);
        } else {
            return state;
        }
    });
    default:
      return state;
  }
}