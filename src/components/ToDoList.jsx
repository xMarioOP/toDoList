
const ToDoList = ({children}) => {
    console.log(children);
    
    return (
        <ul className="todo-list" role="list">
            {children}
        </ul>
    )
}

export  {ToDoList}