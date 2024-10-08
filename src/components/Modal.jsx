const Modal = ({ isOpen, onClose, onEdit, todo }) => {
    if (!isOpen) return null;  

    const handleEdit = () => {
        onEdit(todo.id, todo.text);
        onClose();  
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Edit ToDo</h2>
                <input type="text" defaultValue={todo.text} id="editInput" />
                <button onClick={handleEdit}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export  {Modal};
