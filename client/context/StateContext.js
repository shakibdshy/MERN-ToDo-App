import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export const StateContext = ({ children }) => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
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
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }

            return todo
        })

        setTodos(updateTodos)

        console.log(updateTodos);
    }

    return (
        <Context.Provider value={{
            todos,
            setTodos,
            completeTodo,
            addTodo,
            updateTodos,
            removeTodo,
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);