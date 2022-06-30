import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Todo from '../components/Todo'
import useStateContext from '../context/StateContext'

function complete() {
    const [list, setList] = useStateContext()

    return (
        <>
            <Head>
                <title>Complete List</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <section className='py-24 text-center container mx-auto px-4'>
                <div className="container mx-auto px-4">
                    {
                        list.length
                    }
                </div>
            </section>
        </>
    )
}

export default complete