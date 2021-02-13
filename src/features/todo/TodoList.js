import React from "react"

import { useSelector, useDispatch } from "react-redux"
import { deleteTodo } from "./todoSlice"

export const TodoList = () => {
  const todos = useSelector((state) => state.todo)
  const dispatch = useDispatch()
  const mapTodo = todos.map((todo, index) => (
    <div>
      <p>{todo}</p>
      <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
    </div>
  ))

  return <div>{mapTodo}</div>
}
