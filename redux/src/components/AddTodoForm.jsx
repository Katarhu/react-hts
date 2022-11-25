import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodoForm = ({dispatch}) => {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <form
        onSubmit={event => {
        event.preventDefault();

        dispatch(addTodo(value));

        setValue('');
      }}
      >
        <input value={value} onChange={(event) => setValue(event.target.value)}/>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
};

export default connect()(AddTodoForm);
