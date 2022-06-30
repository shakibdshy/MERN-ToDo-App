import { Button, Checkbox, IconButton, Input, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { MdDelete, MdOutlineSystemUpdateAlt } from 'react-icons/md'
import { useStateContext } from '../context/StateContext'

function TodoList() {
    const [todos, setTodos] = useStateContext()
    const [edit, setEdit] = useState(false)
    const [editValue, setEditValue] = useState(todos.name)
    console.log(edit);

    const checkComplete = (id) => {
        const newTodos = [...todos]
        newTodos[id].complete = !newTodos[id].complete
        setTodos(newTodos)
    }

    const handleEdit = () => {
        setEdit(true)
    }

    const handleEditTodos = (editValue, id) => {
        const newTodos = [...todos]
        newTodos[id].name = editValue
        setTodos(newTodos)
    }

    const handleUpdate = (id) => {
        setEdit(false)
        if (setEdit) {
            handleEditTodos(editValue, id)
        } else {
            setEdit(todos.name)
        }
    }

    const handleDelete = (id) => {
        const newTodos = [...todos]
        newTodos.splice(id, 1)
        setTodos(newTodos)
    }

    return (
        <>
            <ul className='flex flex-col gap-4'>
                {
                    todos.map((todo, index) =>
                        edit ? (
                            <li key={index} className={`flex items-center justify-between gap-4 text-left bg-white rounded-lg py-2 px-4 pl-2 ${todo.complete ? 'complete' : 'check'}`}>
                                <div className='flex items-center gap-2 w-full'>
                                    <Input
                                        type='text'
                                        size="lg"
                                        variant="standard"
                                        value={editValue}
                                        name='editValue'
                                        onChange={(e) => setEditValue(e.target.value)}
                                    />
                                    <IconButton className='basis-auto grow-0 shrink-0' color="green" onClick={() => handleUpdate(index)}>
                                        <MdOutlineSystemUpdateAlt className='text-xl' />
                                    </IconButton>
                                </div>
                            </li>
                        ) : (
                            <li key={index} className={`flex items-center justify-between gap-4 text-left bg-white rounded-lg py-2 px-4 pl-2 ${todo.complete ? 'complete' : 'check'}`}>
                                <div className='flex items-center gap-2'>
                                    <Checkbox id={index} color="teal" onChange={() => checkComplete(index)} />
                                    {
                                        todo.complete ? <del>{todo.name}</del> : <Typography>{todo.name}</Typography>

                                    }
                                    {
                                        console.log(todo.complete)
                                    }
                                </div>
                                <div className='flex items-center gap-2'>
                                    {
                                        todo.complete ? '' : <IconButton color="blue" onClick={handleEdit}>
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