// import { SEARCH_VALUE, STATUS, TYPE } from '../../redux/constants';

// const initState = {
//    searchValue: '',
//    status: 'All',
//    selectFilter: [],
// };

// const reducer = (state = initState, action) => {
//    switch (action.type) {
//       case SEARCH_VALUE:
//          return {
//             ...state,
//             searchValue: action.payload,
//          };
//       case STATUS:
//          return {
//             ...state,
//             status: action.payload,
//          };
//       case TYPE:
//          return {
//             ...state,
//             selectFilter: [...action.payload],
//          };
//       default:
//          return state;
//    }
// };

import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
   name: 'filter',
   initialState: {
      searchValue: '',
      status: 'All',
      type: [],
   },
   reducers: {
      setSearchValue(state, action) {
         state.searchValue = action.payload;
      },
      setStatus(state, action) {
         state.status = action.payload;
      },
      setType(state, action) {
         state.type = action.payload;
      },
   },
});

export default filtersSlice;
