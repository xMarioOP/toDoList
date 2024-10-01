import checkIcon from '../assets/images/checkIcon.png'
import xIcon from '../assets/images/xIcon.png'

const ToDoItem = (props) => {

    return (
        <li className="todo-list__item">
            <span><img src={checkIcon} alt="check icon" /></span>
            <p>{props.text}</p>
            <span><img src={xIcon} alt="x icon" /></span>
        </li>
    )
}

export { ToDoItem }