import { Checkbox, IconButton, Input, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { MdDelete, MdOutlineSystemUpdateAlt } from 'react-icons/md'
import { UseStateContext } from '../context/StateContext'

function TodoList() {
    const [todos, setTodos] = UseStateContext()
    const [update, setUpdate] = useState({})
    const [edit, setEdit] = useState(0);
    const [editState, setEditState] = useState(false)
    const [editValue, setEditValue] = useState(todos.name)

    const checkComplete = (id) => {
        const newTodos = [...todos]
        newTodos[id].complete = !newTodos[id].complete;
        console.log(todos[id])
        // setUpdate(newTodos[id]);
        fetch(`https://${'pure-sierra-03433.herokuapp.com/api/post'}/${todos[id]._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodos[id])
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                data._id && setTodos(newTodos)
            })
    }

    const handleEdit = (id) => {
        console.log('clc');
        setEdit(id);
        setEditState(true)
    }   

    const handleEditTodos = (editValue, id) => {
        const newTodos = [...todos]
        newTodos[id].name = editValue;
        // setUpdate(newTodos[id]);
        fetch(`https://${'pure-sierra-03433.herokuapp.com/api/post'}/${todos[id]._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodos[id])
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        setTodos(newTodos)
    }

    const handleUpdate = (id) => {
        handleEditTodos(editValue, id);
        setEditValue('')
        setEdit(0);
        setEditState(false);
    }

    const handleDelete = (id) => {
        const newTodos = [...todos];
        fetch(`https://${'pure-sierra-03433.herokuapp.com/api/post'}/${todos[id]._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    newTodos.splice(id, 1)
                    setTodos(newTodos)
                }
            })
    }

    return (
        <>
            <ul className='flex flex-col gap-4'>
                {
                    editState ? (
                        <li className={`flex items-center justify-between gap-4 text-left bg-white rounded-lg py-2 px-4 pl-2 `}>
                            <div className='flex items-center gap-2 w-full'>
                                <Input
                                    type='text'
                                    size="lg"
                                    variant="standard"
                                    value={editValue}
                                    name='editValue'
                                    onChange={(e) => setEditValue(e.target.value)}
                                />
                                <IconButton className='basis-auto grow-0 shrink-0' color="green" onClick={() => handleUpdate(edit)}>
                                    <MdOutlineSystemUpdateAlt className='text-xl' />
                                </IconButton>
                            </div>
                        </li>
                    ) : (
                        todos.map((todo, index) =>
                            <li key={index} className={`flex items-center justify-between gap-4 text-left bg-white rounded-lg py-2 px-4 pl-2 ${todo.complete ? 'complete' : 'check'}`}>
                                <div className='flex items-center gap-2'>
                                    <Checkbox id={index} color="teal" onChange={() => checkComplete(index)} />
                                    {
                                        todo.complete ? <del>{todo.name}</del> : <Typography>{todo.name}</Typography>
                                    }
                                </div>
                                <div className='flex items-center gap-2'>
                                    {
                                        todo.complete ? '' : <IconButton color="blue" onClick={() => handleEdit(index)}>
                                            <MdOutlineSystemUpdateAlt className='text-xl' />
                                        </IconButton>
                                    }
                                    <IconButton color="red" onClick={() => handleDelete(index)}>
                                        <MdDelete className='text-xl' />
                                    </IconButton>
                                </div>
                            </li>
                        )
                    )
                }
            </ul>
        </>
    )
}

export default TodoList