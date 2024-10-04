import plusIcon from '../assets/images/plusIcon.png'

const CreateToDoButton = (props) => {    
    return (
        <button
            onClick={props.onChange}
            className="button__add">

            <img src={plusIcon} alt="plus icon" />

        </button>
    )
}

export { CreateToDoButton }