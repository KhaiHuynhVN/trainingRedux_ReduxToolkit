// import { ADD_TODO, ADD_TODO_INPUT_VALUE, ADD_TODO_TYPE, COMPLETED } from '../../redux/constants';

// const initState = {
//    todos: [
//       { id: 1, name: 'Học Front-end', completed: true, type: 'High' },
//       { id: 2, name: 'Học Back-end', completed: false, type: 'Medium' },
//       { id: 3, name: 'Học Redux', completed: false, type: 'Low' },
//    ],
//    dataAddTodo: {
//       inputValue: '',
//       type: 'High',
//    },
// };

// const reducer = (state = initState, action) => {
//    switch (action.type) {
//       case COMPLETED:
//          // const newTodos = state.todos;
//          // const result = newTodos.find((todo) => todo.id === action.payload.dataID);
//          // result.completed = action.payload.checked;
//          return {
//             ...state,
//             todos: state.todos.map((todo) =>
//                todo.id === action.payload.dataID
//                   ? { ...todo, completed: action.payload.checked }
//                   : todo,
//             ),
//          };
//       case ADD_TODO_INPUT_VALUE:
//          return {
//             ...state,
//             dataAddTodo: {
//                ...state.dataAddTodo,
//                inputValue: action.payload,
//             },
//          };
//       case ADD_TODO_TYPE:
//          return {
//             ...state,
//             dataAddTodo: {
//                ...state.dataAddTodo,
//                type: action.payload,
//             },
//          };
//       case ADD_TODO:
//          return {
//             ...state,
//             todos: [...state.todos, action.payload],
//          };
//       default:
//          return state;
//    }
// };

import { createSlice } from '@reduxjs/toolkit';

const todoListSlice = createSlice({
   name: 'todoList',
   initialState: {
      todos: [
         { id: 1, name: 'Học Front-end', completed: true, type: 'High' },
         { id: 2, name: 'Học Back-end', completed: false, type: 'Medium' },
         { id: 3, name: 'Học Redux', completed: false, type: 'Low' },
      ],
      dataAddTodo: {
         inputValue: '',
         type: 'High',
      },
   },
   reducers: {
      setCompleted(state, action) {
         const result = state.todos.find((todo) => todo.id === action.payload.dataID);
         result.completed = action.payload.checked;
      },
      setAddTodoInputValue(state, action) {
         state.dataAddTodo.inputValue = action.payload;
      },
      setAddTodoType(state, action) {
         state.dataAddTodo.type = action.payload;
      },
      setAddTodo(state, action) {
         state.todos.push(action.payload);
      },
   },
});

export default todoListSlice;
