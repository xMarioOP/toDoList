
const ToDoSearch = ({handleChange, searchValue}) => {
    return (
        <>
            <input
                onChange={handleChange}
                className="search__input"
                type="text"
                placeholder="Cut Onion"
                value={searchValue}
            />
        </>
    )
}

export { ToDoSearch }