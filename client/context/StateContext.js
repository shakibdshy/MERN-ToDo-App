import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export const StateContext = ({ children }) => {
    const [todos, setTodos] = useState([])

    return (
        <Context.Provider value={[todos, setTodos]}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);