import { Checkbox, IconButton, Typography } from '@material-tailwind/react'
import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import { UseStateContext } from '../context/StateContext'
import { MdDelete } from 'react-icons/md'
import Footer from '../components/Footer'

function complete() {
    const [todos, setTodos] = UseStateContext();
    const completed = todos.filter(todo => todo.complete);
    
    const handleDelete = (id) => { 
        const newTodos = [...todos]
        newTodos.splice(id, 1)
        setTodos(newTodos)
    }

    return (
        <>
            <Head>
                <title>Complete List</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <section className='py-24 text-center container mx-auto px-4'>
                <div className="container max-w-xl mx-auto px-4">
                    <Typography variant='h1'>Completed Task List</Typography>
                    <ul className='flex flex-col gap-4 mt-8'>
                        {
                            completed.map((todo, index) => (
                                <li key={index} className={`flex items-center justify-between gap-4 text-left bg-white rounded-lg py-2 px-4 pl-2`}>
                                    <div className='flex items-center gap-2'>
                                        <Checkbox id={index} color="green" defaultChecked />
                                        <del>{todo.name}</del>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <IconButton color="red" onClick={() => handleDelete(index)}>
                                            <MdDelete className='text-xl' />
                                        </IconButton>
                                    </div>
                                </li>

                            ))
                        }
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default complete