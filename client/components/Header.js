import { Navbar } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
      <header>
          <Navbar className="mx-auto max-w-screen-xl mt-4 flex items-center justify-between gap-4">
              <Link href='/'>
                  <a className='text-black font-bold text-xl uppercase'>Logo</a>
              </Link>
              <ul className='flex items-center gap-4'>
                  <li>
                      <Link href='/'>
                          <a className='text-black font-bold text-base transition-all hover:text-teal-800'>Home</a>
                      </Link>
                  </li>
                  <li>
                      <Link href='/todo'>
                          <a className='text-black font-bold text-base transition-all hover:text-teal-800'>To-Do</a>
                      </Link>
                  </li>
                  <li>
                      <Link href='/complete'>
                          <a className='text-black font-bold text-base transition-all hover:text-teal-800'>Complete Tasks</a>
                      </Link>
                  </li>
                  <li>
                      <Link href='/calender'>
                          <a className='text-black font-bold text-base transition-all hover:text-teal-800'>Calendar</a>
                      </Link>
                  </li>
              </ul>
          </Navbar>
      </header>
  )
}

export default Header