import { useState } from "react";

const ToDoSearch = () => {
    const [task, setTask] = useState("")

    const handleChange = (e) => {
        const { value } = e.target
        setTask(value)
        console.log(value);
    }



    return (
        <>
            <input
                onChange={handleChange}
                className="search__input"
                type="text"
                placeholder="Cut Onion"
                value={task}
            />
        </>
    )
}

export { ToDoSearch }