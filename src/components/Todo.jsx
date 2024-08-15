import React from 'react'

const Todo = ({todo, remove, completarTarefa}) => {
  return (
    <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
        <div className='content'>
            <p>{todo.text}</p>
            <p>({todo.category})</p>
        </div>
        <div>
            <button className='complete' onClick={() => completarTarefa(todo.id)}>Completar</button>
            <button className='remove' onClick={() => remove(todo.id)}>x</button>
        </div>
    </div>
  )
}

export default Todo
