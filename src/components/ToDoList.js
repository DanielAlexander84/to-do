import React, { useState } from "react"
import ToDo from "./ToDo"

function ToDoList() {
  const [todos, setTodos] = useState([
    { text: "Todo 1" },
    { text: "Todo 2" },
    { text: "Todo 3" },
  ])

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <ToDo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  )
}
export default ToDoList
