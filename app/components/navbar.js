'use client'

import React,{ useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { usePathname } from 'next/navigation'
import { Transition } from '@headlessui/react'

function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full z-20 h-10 pt-2 bg-transparent sticky">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <h1 className='font-medium'>
                <Link href="/">
                    <p>ENGEC GROUP</p>
                </Link>
            </h1>

            <ul className="hidden md:flex gap-x-4 font-medium text-black dark:text-white relative z-0">
                <li className='hover:bg-gray-200 hover:dark:text-white hover:dark:bg-gray-900 p-1 rounded-md flex-1'>
                    <Link className={`link ${pathname === '/' ? 'active' : 'bg-gray-200'}`} href="/">
                        <p>HOME</p>
                    </Link>
                </li>
                <li className='hover:bg-gray-200 hover:dark:text-white hover:dark:bg-gray-900  p-1 rounded-md flex-1'>
                    <Link className={`link ${pathname === '/about' ? 'active' : 'bg-blue-200'}`} href="/about">
                        <p>ABOUT</p>
                    </Link>
                </li>
                <li className='active:bg-gray-200 focus:bg-gray-200 hover:bg-gray-200 hover:dark:text-white hover:dark:bg-gray-900 p-1 rounded-md flex-1'>
                    <Link href="/projects">
                        <p>PROJECTS</p>
                    </Link>
                </li>
                <li className='active:bg-gray-200 focus:bg-gray-200 hover:bg-gray-200 hover:dark:text-white hover:dark:bg-gray-900 p-1 rounded-md flex-1'>
                    <Link href="/contact">
                        <p>CONTACT</p>
                    </Link>
                </li>
              
            </ul>

            

            

            <div className=" flex md:hidden ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className=" inline-flex items-center justify-center p-2 rounded-md text-black  dark:text-white font-bold hover:text-yellow-300 focus:outline-none "
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        > 
                        
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>

                    </div>
            
          </div>
         
        </div>
        <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div
                            ref={ref}
                            className="bg-gray-200 px-2 pt-6 pb-3 space-y-12 sm:px-3 dark:bg-gray-900 h-screen"
                        >   
                            
                            <Link
                            onClick={() => setIsOpen(!isOpen)}
                                href="/"
                                className="cursor-pointer hover:text-yellow-300 text-black block px-3 py-2 rounded-md  font-bold text-left dark:text-white text-6xl"
                            >
                                HOME
                            </Link>
                            <Link
                            onClick={() => setIsOpen(!isOpen)}
                                href="/about"
                                className="cursor-pointer hover:text-yellow-300 text-black block px-3 py-2 rounded-md  font-bold text-left dark:text-white text-6xl"
                            >
                                About
                            </Link>
                            <Link
                            onClick={() => setIsOpen(!isOpen)}
                                href="/projects"
                                className="cursor-pointer hover:text-yellow-300 text-black block px-3 py-2 rounded-md  font-bold text-left dark:text-white text-6xl"
                            >
                                Projects
                            </Link>
                            <Link
                            onClick={() => setIsOpen(!isOpen)}
                                href="/blog"
                                className="cursor-pointer hover:text-yellow-300 text-black block px-3 py-2 rounded-md  font-bold text-left dark:text-white text-6xl"
                            >
                                Blog
                            </Link>
                            
                            
                        </div>
                    </div>
                )}
            </Transition>
      </div>
    </>
  )
}

export default Navbar;