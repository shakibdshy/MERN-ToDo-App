import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo() {
    
    return (
        <>
            <h1 className="text-6xl font-bold mb-10">Todo List</h1>
            <div className='max-w-xl mx-auto'>
                <TodoForm />
                <TodoList />
            </div>
        </>
    )
}

export default Todo