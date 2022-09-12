import React from "react"

function ToDo({ todo, index, completeTodo }) {
  return (
    <div>
      {todo.text}
      {todo.text === "keine To-dos vorhanden" ? (
        <></>
      ) : (
        <div>
          <button onClick={() => completeTodo(index)}>Erledigt</button>
        </div>
      )}
    </div>
  )
}

export default ToDo
