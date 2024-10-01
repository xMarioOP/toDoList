
const ToDoCounter = ({total, completed}) => {
    return (
        <header>
            <h1 className="header__counter">You have completed {completed} out of {total} to-dos </h1>
        </header>
    )
}

export { ToDoCounter }