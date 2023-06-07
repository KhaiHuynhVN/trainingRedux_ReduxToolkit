import { createSelector } from '@reduxjs/toolkit';

const searchValueSelector = (state) => state.filter.searchValue;
const statusSelector = (state) => state.filter.status;
const typeSelector = (state) => state.filter.type;
const inputValueSelector = (state) => state.todoList.dataAddTodo.inputValue;
const typeAddTodoSelector = (state) => state.todoList.dataAddTodo.type;
const todosSelector = (state) => state.todoList.todos;

const remainingTodosSelector = createSelector(
   todosSelector,
   statusSelector,
   typeSelector,
   searchValueSelector,
   (todos, status, type, searchValue) => {
      const searchResult = todos.filter((todo) => {
         return todo.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      const statusResult = searchResult.filter((todo) => {
         return todo.completed === status || (status === 'All' && todo);
      });
      const result = statusResult.filter((todo) => {
         return type.includes(todo.type) || (!type.length && todo);
      });

      return result;
   },
);

export {
   searchValueSelector,
   statusSelector,
   typeSelector,
   inputValueSelector,
   typeAddTodoSelector,
   todosSelector,
   remainingTodosSelector,
};
