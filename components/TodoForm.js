import { Button, Input } from '@material-tailwind/react'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { UseStateContext } from '../context/StateContext'

function TodoForm() {
    const [todos, setTodos] = UseStateContext()
    const [todoName, setTodoName] = useState('')

    const handleChange = e => {
        setTodoName(e.target.value)
    }

    const handleSubmit = async e => { 
        e.preventDefault();
        const newTodoDetail = { name: todoName, complete: false }

        const url = `https://${'pure-sierra-03433.herokuapp.com/api/post'}`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodoDetail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
                data._id && setTodos([...todos, data]);
            })
        setTodoName('')
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex w-full items-end gap-4 mb-8'>
                <Input
                    type='text'
                    size="lg"
                    variant="standard"
                    label="Add a task"
                    value={todoName}
                    onChange={handleChange}
                    required
                    // ref={inputRef}
                />
                <Button type='submit'>Add</Button>
            </form>
        </>
    )
}

export default TodoForm