import { combineReducers } from 'redux';
import todoItemsList from './todoItems';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todoItems: todoItemsList,
  visibilityFilter
});
