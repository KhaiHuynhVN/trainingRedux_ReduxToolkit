// --> redux core

// import { legacy_createStore as createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import reducer from './reducer';

// const composeEnhancer = composeWithDevTools();

// const store = createStore(reducer, composeEnhancer);

// export default store;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

// --> redux toolkit

import { configureStore } from '@reduxjs/toolkit';
import { todoListSlice } from '../components/TodoList';
import { filtersSlice } from '../components/Filters';

const store = configureStore({
   reducer: {
      filter: filtersSlice.reducer,
      todoList: todoListSlice.reducer,
   },
});

export default store;
