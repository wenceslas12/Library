import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ "id": 1, "item": "Smrt na Nilu", "completed": true },
  { "id": 2, "item": "Harry Potter a tajmená komnata", "completed": false }];

const addBookReducer = createSlice({
  name: "books",
  initialState,
  reducers: {
    //Add
    addBook: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove
    removeBook: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //completed
    completeBook: (state, action) => {
      return state.map((book) => {
        if (book.id === action.payload) {
          return {
            ...book,
            completed: true,
          };
        }
        return book;
      });
    },
  },
});

export const {
  addBook,
  removeBook,
  completeBook,
} = addBookReducer.actions;
export const reducer = addBookReducer.reducer;
