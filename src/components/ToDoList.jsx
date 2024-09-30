
const ToDoList = ({children}) => {
    console.log(children);
    
    return (
        <ul>
            {children}
        </ul>
    )
}

export  {ToDoList}