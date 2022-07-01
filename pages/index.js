import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Todo from '../components/Todo'

export default function Home() {
    return (
        <div>
            <Head>
                <title>To-Do List</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className='py-24 text-center container mx-auto px-4'>
                <Todo />
            </main>
            <Footer />
        </div>
    )
}