// src/actions.js

// succinct hack for generating passable unique ids

// redux stuff learned from https://www.sitepoint.com/how-to-build-a-todo-app-using-react-redux-and-immutable-js/
const uid = () => Math.random().toString(34).slice(2);

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}

export function addArtist(text) {
    return {
        type: 'ADD_ARTIST',
        payload: {
            id: uid(),
            selected: false,
            text: text
        }
    }
}

export function toggleArtist(id) {
    return {
        type: 'TOGGLE_ARTIST',
        payload: id
    }
}