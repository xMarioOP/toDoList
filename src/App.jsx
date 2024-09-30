import { useState } from 'react'
import { ToDoCounter } from './components/ToDoCounter'
import { ToDoSearch } from './components/ToDoSearch'
import { ToDoList } from './components/ToDoList'
import { ToDoItem } from './components/ToDoItem'
import { CreateToDoButton } from './components/CreateToDoButton'
import './App.css'

function App() {

  const defaultToDos = [
    { id: 1, text: "Cut onion", completed: false },
    { id: 2, text: "Buy milk", completed: false },
    { id: 3, text: "Go to the gym", completed: true }
  ]

  return (
    <>
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
    </>
  )
}

export default App
