
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodoAction } from './redux/action';
import { useState } from 'react';
import Todo from './todo';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const todo = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [id, setId] = useState(0);

  return (
    <div className='container'>
      <h1 className='text-center text-info'>Todo App</h1>
      <div className='input-group mt-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter todo'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='btn btn-primary' onClick={() => {
          dispatch(addTodoAction(id, text));
          setText('');
          setId(id + 1);
        }}>
          Add
        </button>
      </div>
      <ul className='list-group'>
        {todo.map((item) => (
          <li className='list-group-item mt-3' key={item.id}>
            <Todo text={item.text} id={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
