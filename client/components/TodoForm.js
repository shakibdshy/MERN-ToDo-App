import { Button, Input } from '@material-tailwind/react'
import React, { useEffect, useRef, useState } from 'react'
import { useStateContext } from '../context/StateContext'

function TodoForm() {
    const [todos, setTodos] = useStateContext()
    const [todoName, setTodoName] = useState('')

    const handleChange = e => {
        setTodoName(e.target.value)
    }

    const handleSubmit = e => { 
        e.preventDefault()
        setTodos([...todos, { name: todoName, complete: false }])
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
                    // ref={inputRef}
                />
                <Button type='submit'>Add</Button>
            </form>
        </>
    )
}

export default TodoForm