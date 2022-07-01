import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Todo from '../components/Todo'

function todo() {
  return (
      <>
          <Head>
              <title>To-Do Page</title>
              <meta name="description" content="Todo App" />
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header />

          <main className='py-24 text-center container mx-auto px-4'>
              <Todo />
          </main>
      </>
  )
}

export default todo