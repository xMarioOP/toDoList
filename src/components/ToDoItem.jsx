import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const ToDoItem = (props) => {

    return (
        <li className="todo-list__item">
            <span><FontAwesomeIcon icon={faCheck} alt="check icon" className="checkIcon" /></span>
            <p>{props.text}</p>
            <span><FontAwesomeIcon icon={faCircleXmark} alt="x icon" className="xIcon" /></span>
        </li>
    )
}

export { ToDoItem }