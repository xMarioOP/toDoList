import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const ToDoItem = (props) => {

    return (
        <li className="todo-list__item">
            <div className="iconContainer">
                <span>
                    <FontAwesomeIcon
                        icon={faCheck}
                        aria-label="check icon"
                        onClick={props.onComplete}
                        className={`check__icon ${props.completed && "check__icon--active"}`}
                    />
                </span>

                <span>
                    <FontAwesomeIcon
                        icon={faPenToSquare}
                        aria-label="edit icon"
                        onClick={props.onEdit}
                        className='edit__icon'
                    />
                </span>
            </div>

            <p
                className={`todoItem__text ${props.completed && "todoItem__text--complete"}`}>
                {props.text}
            </p>

            <span>
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    aria-label="delete icon"
                    className="delete__icon"
                    onClick={props.onDelete}
                // delete__icon--active
                />
            </span>
        </li>
    )
}

export { ToDoItem }