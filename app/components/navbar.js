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
      <div className="w-full z-20 h-12 py-2 bg-black sticky">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <h1 className='font-medium'>
                <Link href="/">
                    <p className='text-white'>ENGEC GROUP</p>
                </Link>
            </h1>

            <ul className="hidden md:flex gap-x-4 font-medium text-white relative z-0">
                <li className='hover:underline underline-offset-2 '>
                    <Link className={`link ${pathname === '/about' ? 'active' : 'bg-blue-200'}`} href="/about">
                        <p>ABOUT US</p>
                    </Link>
                </li>
                <li className='active:bg-gray-200 focus:bg-gray-200 hover:underline underline-offset-2'>
                    <Link href="/projects">
                        <p>OUR PROJECTS</p>
                    </Link>
                </li>
                <li className='active:bg-gray-200 focus:bg-gray-200 hover:underline underline-offset-2'>
                    <Link href="/contact">
                        <p>CONTACT US</p>
                    </Link>
                </li>
              
            </ul>

            

            

            <div className=" flex md:hidden ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className=" inline-flex items-center justify-center p-2 rounded-md text-white font-bold hover:text-yellow-300 focus:outline-none "
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        > 
                        
                            <span className="sr-only">Open nav menu</span>
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
                                ABOUT
                            </Link>
                            <Link
                            onClick={() => setIsOpen(!isOpen)}
                                href="/projects"
                                className="cursor-pointer hover:text-yellow-300 text-black block px-3 py-2 rounded-md  font-bold text-left dark:text-white text-6xl"
                            >
                                PROJECTS
                            </Link>
                            <Link
                            onClick={() => setIsOpen(!isOpen)}
                                href="/contact"
                                className="cursor-pointer hover:text-yellow-300 text-black block px-3 py-2 rounded-md  font-bold text-left dark:text-white text-6xl"
                            >
                                CONTACT
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