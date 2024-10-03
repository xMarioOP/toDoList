import { useState } from 'react'
import { ToDoCounter } from './components/ToDoCounter'
import { ToDoSearch } from './components/ToDoSearch'
import { ToDoList } from './components/ToDoList'
import { ToDoItem } from './components/ToDoItem'
import { CreateToDoButton } from './components/CreateToDoButton'

const defaultToDos = [
  { id: 1, text: "Cut onion", completed: false },
  { id: 2, text: "Buy milk", completed: false },
  { id: 3, text: "Go to the gym", completed: true },
  { id: 4, text: "Take a bath", completed: false },
  { id: 5, text: "Breakfast", completed: true },
  { id: 6, text: "Visit family", completed: true },
]

function App() {
  const [toDos, setToDos] = useState(defaultToDos)
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
    const searchedToDoText  = searchValue.toLowerCase()
    return toDoText.includes(searchedToDoText)
  })

  return (
    <div className='app'>
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
          />
        ))}
      </ToDoList>


      <CreateToDoButton />
    </div>
  )
}

export default App
