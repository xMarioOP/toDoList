import { Children, createContext } from "react"

const ToDoContext = createContext()

const ToDoProvider = ({children}) => {
    return (
        <ToDoContext.Provider>
            {children}
        </ToDoContext.Provider>
    )
}

const ToDoConsumer = () => {
    return (
        <ToDoContext.Consumer>

        </ToDoContext.Consumer>
    )
}

export { ToDoContext, ToDoProvider, ToDoProvider }