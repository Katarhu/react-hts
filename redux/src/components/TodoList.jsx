import React from 'react';
import {connect} from "react-redux";
import {ListItem} from './ListItem';
import {toggleTodo} from "../actions";

const TodoList = ({todoItems, dispatch}) => (
  <ul>
    {
      todoItems.map(({id, completed, text}) => (
        <ListItem
          key={id}
          onClick={() => dispatch(toggleTodo(id))}
          completed={completed}
          text={text}
        />
      ))
    }
  </ul>
);

const mapStateToProps = state => ({
  todoItems: state.todoItems
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps)(TodoList);
