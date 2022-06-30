import { Button, Input } from '@material-tailwind/react'
import React from 'react'

function TodoForm() {

    return (
        <>
            <form className='flex w-full items-end gap-4 mb-8'>
                <Input size="lg" variant="standard" label="Add a task" />
                <Button type='button'>Add</Button>
            </form>
        </>
    )
}

export default TodoForm