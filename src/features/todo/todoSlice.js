import { createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload, 1)
    },
  },
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
