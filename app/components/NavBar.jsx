'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu } from 'lucide-react'


const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <nav className='bg-white bg-opacity-10 backdrop-blur-md w-full fixed top-0 left-0 h-20 py-5 px-5 md:px-[10%] flex justify-between items-center z-50'>
            <Link href={''} className='flex items-center justify-center'>
                <Image src={'/logo.png'} width={60} height={80} alt='FacePresence' />
                <span className='text-2xl md:text-3xl font-bold'>Face<span className='text-accent'>Presence</span></span>
            </Link>

            <ul className='hidden md:flex'>
                <Link href={'#accueil'} className=''>
                    <li className='btn mx-5 rounded-xl py-4 px-8 w-[90%]'>
                        Accueil
                    </li>
                </Link>

                <Link href={'#fonctionnalites'} className=''>
                    <li className='btn mx-5 rounded-xl py-4 px-8 w-[90%]'>
                        Fonctionnalités
                    </li>
                </Link>

                <Link href={'#avantages'} className=''>
                    <li className='btn mx-5 rounded-xl py-4 px-8 w-[90%]'>
                        Avantages
                    </li>
                </Link>

                <Link href={'#contact'} className=''>
                    <li className='btn mx-5 rounded-xl py-4 px-8 w-[90%]'>
                        Contact
                    </li>
                </Link>
            </ul>

            <button className='btn md:hidden' onClick={toggleMenu}>
                <Menu size={30} color="black" className='font-bold' />
            </button>
            {
                showMenu ? (
                    <ul className='bg-opacity-80 backdrop-blur-md flex flex-col gap-8 bg-gray-300 py-10 px-5 absolute top-[80px] left-0 w-[60%] h-[100vh] drop-shadow-2xl'>
                        <Link
                            href={'#accueil'}
                            className=''
                            onClick={toggleMenu}
                        >
                            <li className='btn mx-5 rounded-xl py-4 px-8 w-[90%]'>
                                Accueil
                            </li>
                        </Link>

                        <Link
                            href={'#fonctionnalites'}
                            className=''
                            onClick={toggleMenu}
                        >
                            <li className='btn mx-5 rounded-xl py-4 px-8 w-[90%]'>
                                Fonctionnalités
                            </li>
                        </Link>

                        <Link
                            href={'#avantages'}
                            className=''
                            onClick={toggleMenu}
                        >
                            <li className='btn mx-5 rounded-xl py-4 px-8 w-[90%]'>
                                Avantages
                            </li>
                        </Link>

                        <Link
                            href={'#contact'}
                            className=''
                            onClick={toggleMenu}
                        >
                            <li className='btn mx-5 rounded-xl py-4 px-8 w-[90%]'>
                                Contact
                            </li>
                        </Link>
                    </ul>
                ) : (
                    ''
                )
            }
        </nav>
    )
}

export default NavBar