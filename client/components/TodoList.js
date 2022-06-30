import { Checkbox, IconButton, Typography } from '@material-tailwind/react'
import React from 'react'
import { MdDelete, MdOutlineSystemUpdateAlt } from 'react-icons/md'

function TodoList() {
    return (
        <>
            <ul className='flex flex-col gap-4'>
                <li className='flex items-center justify-between gap-4 text-left bg-white rounded-lg py-2 px-4 pl-2'>
                    <div className='flex items-center gap-2'>
                        <Checkbox color="teal" />
                        <Typography>
                            Material Tailwind is an easy to use components
                        </Typography>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IconButton color="blue">
                            <MdOutlineSystemUpdateAlt className='text-xl' />
                        </IconButton>
                        <IconButton color="red">
                            <MdDelete className='text-xl' />
                        </IconButton>
                    </div>
                </li>
                <li className='flex items-center justify-between gap-4 text-left bg-white rounded-lg py-2 px-4 pl-2'>
                    <div className='flex items-center gap-2'>
                        <Checkbox color="teal" />
                        <Typography>
                            Material Tailwind is an easy to use components
                        </Typography>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IconButton color="blue">
                            <MdOutlineSystemUpdateAlt className='text-xl' />
                        </IconButton>
                        <IconButton color="red">
                            <MdDelete className='text-xl' />
                        </IconButton>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default TodoList