import React, { createContext, useContext, useState } from 'react'
import useFetch from '../hooks/useFetch'

const Context = createContext()

export const StateContext = ({ children }) => {
    const [todos, setTodos] = useState([])
    const [post, setPost] = useFetch()
    // console.log(post);

    return (
        <Context.Provider value={[post, setPost]}>
            {children}
        </Context.Provider>
    )
}

export const UseStateContext = () => useContext(Context);