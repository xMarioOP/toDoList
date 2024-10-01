import { useState } from 'react'
import { ToDoCounter } from './components/ToDoCounter'
import { ToDoSearch } from './components/ToDoSearch'
import { ToDoList } from './components/ToDoList'
import { ToDoItem } from './components/ToDoItem'
import { CreateToDoButton } from './components/CreateToDoButton'

function App() {

  const defaultToDos = [
    { id: 1, text: "Cut onion", completed: false },
    { id: 2, text: "Buy milk", completed: false },
    { id: 3, text: "Go to the gym", completed: true },
    { id: 4, text: "Take a bath", completed: false },
    { id: 5, text: "Breakfast", completed: true }
  ]

  return (
    <div className='app'>
      <ToDoCounter completed={5} total={16} />
      <ToDoSearch />

      <ToDoList>
        {defaultToDos.map(toDo => (
          <ToDoItem
            key={toDo.id}
            text={toDo.text}
            completed={toDo.completed}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </div>
  )
}

export default App
