import { Checkbox, IconButton, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { MdDelete, MdOutlineSystemUpdateAlt } from 'react-icons/md'
import TodoForm from './TodoForm';

function TodoList({ todos, updateTodos, completeTodo, removeTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodos(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return (
        <>
            <ul className='flex flex-col gap-4'>
                {
                    todos.map((todo, index) => (
                        <li key={index} className={`${'flex items-center justify-between gap-4 text-left bg-white rounded-lg py-2 px-4 pl-2'} ${todo.isComplete ? 'completeTodo' : ''}`}>
                            <div className='flex items-center gap-2'>
                                <Checkbox onClick={() => completeTodo(todo.id)} color="teal" />
                                {
                                    todo.isComplete ? <del>{todo.text}</del> : <Typography>{todo.text}</Typography>
                                }
                                
                            </div>
                            <div className='flex items-center gap-2'>
                                <IconButton color="blue">
                                    <MdOutlineSystemUpdateAlt onClick={() => setEdit({ id: todo.id, value: todo.text })} className='text-xl' />
                                </IconButton>
                                <IconButton color="red">
                                    <MdDelete onClick={() => removeTodo(todo.id)} className='text-xl' />
                                </IconButton>
                            </div>
                        </li>

                    ))
                }
            </ul>
        </>
    )
}

export default TodoList