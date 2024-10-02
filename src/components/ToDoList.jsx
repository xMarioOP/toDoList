
const ToDoList = ({ children }) => {

    return (
        <ul className="todo-list" role="list">
            {children}
        </ul>
    )
}

export { ToDoList }