
const ToDoCounter = ({ total, completed }) => {
    return (
        <header>
            <h1 className="header__counter">You have completed <span>{completed}</span> out of <span>{total}</span> to-dos </h1>
        </header>
    )
}

export { ToDoCounter }