import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoAction, updateTodoAction } from './redux/action';

function Todo({ text, id }) {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(text);

    return (
        <>
            {edit ? (
                <div className='input-group'>
                    <input
                        type='text'
                        className='form-control'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button className='btn btn-secondary' onClick={() => {
                        dispatch(updateTodoAction(id, title));
                        setEdit(false);
                    }}>Save</button>
                </div>
            ) : (
                <>
                    {title}
                    <button className='btn btn-danger float-end' onClick={() => dispatch(deleteTodoAction(id))}>
                        Delete
                    </button>
                    <button className='btn btn-secondary float-end me-2' onClick={() => setEdit(true)}>
                        Update
                    </button>
                </>
            )}
        </>
    );
}

export default Todo;
