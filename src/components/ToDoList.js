import React, { useState, useEffect } from "react"
import ToDo from "./ToDo"
import ToDoForm from "./ToDoForm"

function ToDoList() {
  const placeholderTodoText = "keine To-dos vorhanden"

  const [todos, setTodos] = useState([{ text: placeholderTodoText }])

  useEffect(() => {
    setTodos(JSON.parse(window.localStorage.getItem("todos")))
  }, [])

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const completeTodo = (indexToRemove) => {
    const newTodos = todos.filter((item, index) => index !== indexToRemove)
    if (todos.length <= 1) {
      setTodos([{ text: placeholderTodoText }])
    } else {
      setTodos(newTodos)
    }
  }

  if (todos && todos.length > 1 && todos[0].text === placeholderTodoText) {
    setTodos(todos.filter((item, index) => index !== 0))
  }

  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo, index) => (
        <ToDo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
        />
      ))}
      <h3>Neues Todo erstellen</h3>
      <ToDoForm addTodo={addTodo} />
    </div>
  )
}
export default ToDoList
