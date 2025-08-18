import React from 'react'
import Button from './common/Button'
import { useState } from 'react'
import PropTypes from 'prop-types';

const Todo = ({ todo, handleChangeIsDone, handleEditTodo, handleDeleteTodo }) => {
    const [editInput, setEditInput] = useState(todo.text);
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div className='todolist-div'>
            {!isEditing ? (<li
                className={`li-style ${todo.isDone ? "li-style-isDone" : ""}`}
                //key={todo.id}
                onClick={() => handleEditTodo(todo._id, {isDone: !todo.isDone})}

            >
                {todo.text}

            </li>) : (
                <input
                    type='text'
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)} />
            )}
            {!isEditing ? (<Button
                cssid={'edit-button'}
                clickFunction={() => setIsEditing(true)}
                buttonName={'Edit'}
            />) : (
                <Button
                    cssid={'done-button'}
                    clickFunction={() => { 
                        handleEditTodo(todo._id,{text: editInput})
                        setIsEditing(false) }}
                    buttonName={"Update"} />
            )}

            <Button
                cssid={'delete-button'}
                clickFunction={() => 
                handleDeleteTodo(todo._id)
                }
                buttonName={'Delete'}
            />


        </div>
    )
}

// Todo.propTypes = {
//     handleEditTodo: PropTypes.func.isRequired,
//     todo: PropTypes.shape({
//         _id: PropTypes.string.isRequired,
//         _id: PropTypes.string.isRequired,
//         _id: PropTypes.string.isRequired,
//     })
// }

export default Todo
