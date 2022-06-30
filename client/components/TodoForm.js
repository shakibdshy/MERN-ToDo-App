import { Button, Input } from '@material-tailwind/react'
import React, { useEffect, useRef, useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })


    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });

        setInput('')
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex w-full items-end gap-4 mb-8'>
                {
                    props.edit ? (
                        <>
                            <Input
                                type='text'
                                size="lg"
                                variant="standard"
                                label="Add a task"
                                value={input}
                                onChange={handleChange}
                                ref={inputRef}
                            />
                            <Button color='green' type='submit'>Update</Button>
                        </>
                    ) : (
                        <>
                            <Input
                                type='text'
                                size="lg"
                                variant="standard"
                                label="Add a task"
                                value={input}
                                onChange={handleChange}
                                ref={inputRef}
                            />
                            <Button type='submit'>Add</Button>

                        </>
                    )
                }
            </form>
        </>
    )
}

export default TodoForm