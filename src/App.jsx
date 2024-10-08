import { useState, useEffect } from 'react'
import { ToDoCounter } from './components/ToDoCounter'
import { ToDoSearch } from './components/ToDoSearch'
import { ToDoList } from './components/ToDoList'
import { ToDoItem } from './components/ToDoItem'
import { CreateToDoButton } from './components/CreateToDoButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

// import { faL } from '@fortawesome/free-solid-svg-icons'

// const defaultToDos = [
//   { id: 1, text: "Cut onion", completed: false },  
//   { id: 2, text: "Buy milk", completed: false },
//   { id: 3, text: "Go to the gym", completed: true },
//   { id: 4, text: "Take a bath", completed: false },
//   { id: 5, text: "Breakfast", completed: true },
//   { id: 6, text: "Visit family", completed: true },
// ]


function App() {

  const storedDarkMode = JSON.parse(localStorage.getItem("darkmode"));
  console.log(localStorage);


  const saveToDos = (toDos) => {
    localStorage.setItem('TODOLIST', JSON.stringify(toDos))
  };

  const loadToDos = () => {
    const storedToDos = localStorage.getItem('TODOLIST')
    return storedToDos ? JSON.parse(storedToDos) : []
  };

  const [toDos, setToDos] = useState(loadToDos)
  const [searchValue, setSearchValue] = useState("")
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode || false)

  const saveDarkMode = (mode) => {
    localStorage.setItem("darkmode", JSON.stringify(mode));
  };


  const handleDarkMode = () => {
    setIsDarkMode(prev => {
      const newMode = !prev
      saveDarkMode(newMode)
      return newMode
    })
  }

  const totalToDos = toDos.length
  const completedToDos = toDos.filter(toDo => !!toDo.completed).length


  const handleChange = (e) => {
    const { value } = e.target
    setSearchValue(value)
    console.log(value)
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
    if (editingId === id) {
      setIsEditing(false)
      setSearchValue("")
    }
  }

  const handleEditToDo = (id) => {
    const selectToDo = toDos.find(toDo => toDo.id === id);
    if (selectToDo) {
      setSearchValue(selectToDo.text);
      setIsEditing(true)
      setEditingId(id)
    }

  }

  const handleNewToDo = () => {
    if (searchValue === "") return;
    if (isEditing) {
      const updatedToDo = {
        id: editingId,
        text: searchValue,
        completed: false
      }
      setToDos(prev => prev.map(toDo => toDo.id === editingId ? updatedToDo : toDo))
      setIsEditing(false)
    } else {
      const newToDo = {
        id: new Date(),
        text: searchValue,
        completed: false
      }
      setToDos(prev => [...prev, newToDo])
    }
    setSearchValue("")
  }

  useEffect(() => {
    saveToDos(toDos)
  }, [toDos])

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <ToDoCounter completed={completedToDos} total={totalToDos} />


      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleChange={handleChange}
      />


      <ToDoList>
        {searchedToDo.map(toDo => (
          <ToDoItem
            key={toDo.id}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => handleCompleteToDo(toDo.id)}
            onDelete={() => handleDeleteToDo(toDo.id)}
            onEdit={() => handleEditToDo(toDo.id)}
          />
        ))}
      </ToDoList>


      <CreateToDoButton
        onChange={handleNewToDo}
      />


      <FontAwesomeIcon
        icon={faMoon}
        className='darkMode__Icon'
        onClick={handleDarkMode}
      />
    </div>
  )
}

export { App }
