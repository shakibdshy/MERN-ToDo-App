import { Checkbox, IconButton, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { MdDelete, MdOutlineSystemUpdateAlt } from 'react-icons/md'
import { useStateContext } from '../context/StateContext'

function TodoList() {
    const [todos, setTodos] = useStateContext()
    // console.log(todos);

    const checkComplete = (id) => {
        const newTodos = [...todos]
        newTodos[id].complete = !newTodos[id].complete
        setTodos(newTodos)
        console.log(newTodos[id]);
    }

    return (
        <>
            <ul className='flex flex-col gap-4'>
                {
                    todos.map((todo, index) => (
                        <li key={index} className={`flex items-center justify-between gap-4 text-left bg-white rounded-lg py-2 px-4 pl-2 ${todo.complete ? 'complete' : 'check'}`}>
                            <div className='flex items-center gap-2'>
                                <Checkbox id={index} color="teal" onChange={() => checkComplete(index)} />
                                <Typography>{todo.name}</Typography>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IconButton color="blue">
                                    <MdOutlineSystemUpdateAlt className='text-xl' />
                                </IconButton>
                                <IconButton color="red">
                                    <MdDelete className='text-xl' />
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