import {
   ADD_TODO,
   SEARCH_VALUE,
   ADD_TODO_INPUT_VALUE,
   ADD_TODO_TYPE,
   COMPLETED,
   STATUS,
   TYPE,
} from './constants';

const setAddTodo = (payload) => {
   return {
      type: ADD_TODO,
      payload,
   };
};

const setSearchValue = (payload) => {
   return {
      type: SEARCH_VALUE,
      payload,
   };
};

const setAddTodoInputValue = (payload) => {
   return {
      type: ADD_TODO_INPUT_VALUE,
      payload,
   };
};

const setAddTodoType = (payload) => {
   return {
      type: ADD_TODO_TYPE,
      payload,
   };
};

const setCompleted = (payload) => {
   return {
      type: COMPLETED,
      payload,
   };
};

const setStatus = (payload) => {
   return {
      type: STATUS,
      payload,
   };
};

const setType = (payload) => {
   return {
      type: TYPE,
      payload,
   };
};

export {
   setAddTodo,
   setSearchValue,
   setAddTodoInputValue,
   setAddTodoType,
   setCompleted,
   setStatus,
   setType,
};
