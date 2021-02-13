import React, { useState } from "react"

import { addTodo } from "./todoSlice"

import { useDispatch } from "react-redux"

export const AddTodo = () => {
  const [input, setInput] = useState("")

  const onInputChange = (e) => setInput(e.target.value)

  const dispatch = useDispatch()

  const onSubmit = () => dispatch(addTodo(input))

  return (
    <div>
      <h1>ToDo List</h1>
      <input value={input} onChange={onInputChange} />
      <button onClick={onSubmit}>Add todo</button>
    </div>
  )
}
