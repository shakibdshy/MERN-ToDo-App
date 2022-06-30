import { Button, Checkbox, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo() {
    return (
        <>
            <h1 className="text-6xl font-bold mb-10">Todo List</h1>
            <div className='max-w-2xl mx-auto'>
                <TodoForm />
                <TodoList />
            </div>
        </>
    )
}

export default Todo