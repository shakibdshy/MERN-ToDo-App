import { Navbar } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

function Header() {
    return (
        <header>
            <Navbar className="mx-auto max-w-screen-xl mt-4 flex items-center justify-between gap-4">
                <Link href='/'>
                    <a className='text-black font-bold text-xl uppercase'>Logo</a>
                </Link>
                <ul className='items-center gap-4 hidden md:flex'>
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
                <div className='flex md:hidden'>
                    <Menu>
                        <MenuHandler>
                            <Button variant="gradient">Open Menu</Button>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>
                                <Link href='/'>
                                    <a className='text-black font-bold text-base transition-all hover:text-teal-800'>Home</a>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href='/todo'>
                                    <a className='text-black font-bold text-base transition-all hover:text-teal-800'>To-Do</a>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href='/complete'>
                                    <a className='text-black font-bold text-base transition-all hover:text-teal-800'>Complete Tasks</a>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href='/calender'>
                                    <a className='text-black font-bold text-base transition-all hover:text-teal-800'>Calendar</a>
                                </Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </Navbar>
        </header>
    )
}

export default Header