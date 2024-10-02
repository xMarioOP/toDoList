import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const ToDoItem = (props) => {

    return (
        <li className="todo-list__item">
            <span>
                <FontAwesomeIcon
                    icon={faCheck}
                    aria-label="check icon"
                    className={`check__icon ${props.completed && "check__icon--active"}`} />
            </span>

            <p
                className={`todoItem__text ${props.completed && "todoItem__text--complete"}`}>
                {props.text}
            </p>

            <span>
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    aria-label="x icon"
                    // className={`x__icon x__icon--active`}
                />
            </span>
        </li>
    )
}

export { ToDoItem }