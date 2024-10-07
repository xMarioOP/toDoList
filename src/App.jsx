import { useState, useEffect } from 'react'
import { ToDoCounter } from './components/ToDoCounter'
import { ToDoSearch } from './components/ToDoSearch'
import { ToDoList } from './components/ToDoList'
import { ToDoItem } from './components/ToDoItem'
import { CreateToDoButton } from './components/CreateToDoButton'
import { EmptyToDo } from './components/EmptyToDo'
import { ToDoError } from './components/ToDoError'
import { ToDoLoading } from './components/ToDoLoading'

import { faL } from '@fortawesome/free-solid-svg-icons'

// const defaultToDos = [
//   { id: 1, text: "Cut onion", completed: false },  
//   { id: 2, text: "Buy milk", completed: false },
//   { id: 3, text: "Go to the gym", completed: true },
//   { id: 4, text: "Take a bath", completed: false },
//   { id: 5, text: "Breakfast", completed: true },
//   { id: 6, text: "Visit family", completed: true },
// ]




function App() {


  const saveToDos = (toDos) => {
    localStorage.setItem('TODOLIST', JSON.stringify(toDos))
  };

  const loadToDos = () => {
    const storedToDos = localStorage.getItem('TODOLIST')
    return storedToDos ? JSON.parse(storedToDos) : []
  };

  const [toDos, setToDos] = useState(loadToDos)
  const [searchValue, setSearchValue] = useState("")



  const totalToDos = toDos.length
  const completedToDos = toDos.filter(toDo => !!toDo.completed).length


  const handleChange = (e) => {
    const { value } = e.target
    setSearchValue(value)
    console.log(value);
  }


  const searchedToDo = toDos.filter((toDo) => {
    const toDoText = toDo.text.toLowerCase()
    const searchedToDoText = searchValue.toLowerCase()
    return toDoText.includes(searchedToDoText)
  })

  const handleCompleteToDo = (id) => {
    const newToDos = toDos.map(toDo => toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo)
    setToDos(newToDos)
  }

  const handleDeleteToDo = (id) => {
    const newToDos = toDos.filter(toDo => toDo.id !== id)
    setToDos(newToDos)
  }

  const handleNewToDo = () => {
    if (searchValue === "") return;
    const newToDo = {
      id: new Date(),
      text: searchValue,
      completed: false
    }
    setToDos(prev => [...prev, newToDo])
    setSearchValue("")
  }


  useEffect(() => {
    saveToDos(toDos)
  }, [toDos])

  return (
    <div className='app'>
      <ToDoCounter completed={completedToDos} total={totalToDos} />


      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleChange={handleChange}
      />


      <ToDoList>
        {/* {loading && <ToDoLoading />}
        {error && <ToDoError />}
        {(!loading && searchedToDo.length === 0) && <EmptyToDo />} */}

        {searchedToDo.map(toDo => (
          <ToDoItem
            key={toDo.id}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => handleCompleteToDo(toDo.id)}
            onDelete={() => handleDeleteToDo(toDo.id)}
          />
        ))}
      </ToDoList>


      <CreateToDoButton
        onChange={handleNewToDo}
      />
    </div>
  )
}

export default App
