import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const ToDoItem = (props) => {
    // console.log(props.onComplete);

    return (
        <li className="todo-list__item">
            <span>
                <FontAwesomeIcon
                    icon={faCheck}
                    aria-label="check icon"
                    onClick={props.onComplete}
                    className={`check__icon ${props.completed && "check__icon--active"}`}
                />
            </span>

            <p
                className={`todoItem__text ${props.completed && "todoItem__text--complete"}`}>
                {props.text}
            </p>

            <span>
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    aria-label="delete icon"
                    className={`delete__icon `}
                    onClick={props.onDelete}
                // delete__icon--active
                />
            </span>
        </li>
    )
}

export { ToDoItem }