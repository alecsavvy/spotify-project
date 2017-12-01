// src/containers.js

import { connect } from 'react-redux';
import { TodoList } from '../components/TodoComponents';
import { addTodo, toggleTodo, toggleArtist, addArtist } from '../actions/actions';

// TodoList container for learning Redux
export const TodoListContainer = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
        addTodo: text => dispatch(addTodo(text)),
        toggleTodo: id => dispatch(toggleTodo(id))
      };
  }
)(TodoList);

// Venues container
export const VenuesContainer = connect(
    function mapStateToProps(state) {
        return {state: state};
    },
    function mapDispatchToProps(dispatch) {
        return {
            toggleArtist: id => dispatch(toggleArtist(id))
        };
    }
)

// AllResults container
export const AllResultsContainer = connect(
    function mapStateToProps(state) {
        return {state: state};
    },
    function mapDispatchToProps(dispatch) {
        return {
            addArtist: text => dispatch(addArtist(text)),
            toggleArtist: id => dispatch(toggleArtist(id))
        };
    }
)

// AllSelected container