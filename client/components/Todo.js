import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => { 
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos);
    }

    const updateTodos = (todoId, newValue) => { 
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = (id) => { 
        const removeTodos = todos.filter(todo => todo.id !== id)

        setTodos(removeTodos)
    }

    const completeTodo = (id) => { 
        const updateTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }

            return todo
        })

        setTodos(updateTodos)
    }

    return (
        <>
            <h1 className="text-6xl font-bold mb-10">Todo List</h1>
            <div className='max-w-xl mx-auto'>
                <TodoForm onSubmit={addTodo} />
                <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodos={updateTodos} />
            </div>
        </>
    )
}

export default Todo