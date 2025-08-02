import { createSlice } from "@reduxjs/toolkit";

 

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  },
  reducers: {
    
  }
})

export const { } = todoSlice.actions;
export default todoSlice.reducer;