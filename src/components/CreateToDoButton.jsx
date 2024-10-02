import plusIcon from '../assets/images/plusIcon.png'

const CreateToDoButton = () => {

    const handleClick = () => {
        return (
            <>
                <p></p>
            </>
        )
    }

    return (
        <button onClick={handleClick} className="button__add"><img src={plusIcon} alt="plus icon" /></button>
    )
}

export { CreateToDoButton }