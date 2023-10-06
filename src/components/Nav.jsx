

import { navLinks } from "../constants"
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";


import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Nav = () => {

  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-white">
        <nav className=" flex justify-between items-center max-container">
            <a href="/">
                <img
                src={headerLogo}
                alt='Logo'
                width={130}
                height={29}
                className="m-0 w-[129px] h-[29px]"
                />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key ={item.label}>
                        <a
                        href={item.href}
                        className="font-montserrat leading-normal text-lg text-slate-gray"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}

            </ul>
            <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
                <a href="/">Sign in</a>
                <span></span>
                <a href="/">Explore now</a>

            </div>
            
            
            <Menu as="div" className=" hidden max-lg:block relative text-left ">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2  hover:bg-slate-100">
                        <img 
                            src={hamburger}
                            alt="hamburger icon"
                            width={20}
                            height={20}
                            />

                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >

                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-slate-100 shadow-lg  focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                                    'block px-6 py-2 text-sm'
                                )}
                                >
                                Home
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                                    'block px-6 py-2 text-sm'
                                )}
                                >
                                About Us
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                                    'block px-6 py-2 text-sm'
                                )}
                                >
                                Products
                                </a>
                            )}
                            </Menu.Item>
                            
                            <Menu.Item>
                                {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                                    'block px-6 py-2 text-sm'
                                )}
                                >
                                Contact Us
                                </a>
                                )}
                            </Menu.Item>
                            
                        </div>
                    </Menu.Items>
                </Transition>

            </Menu>
    
        </nav>

    </header>
  )
}

export default Nav


/* 
            <div className="hidden max-lg:block " id="hamburger-container" >
                <img 
                src={hamburger}
                width={25}
                height={25}
                onClick={handleHamburger}
                />
               
            </div>
            
                    {hamburgerMenu ? (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right  bg-slate-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" aria-orientation="vertical" id="hamburger-dropdown">
                    <div className="">
                        <a className="block px-4 py-2 text-sm" tabIndex="-1" href="/Home">Home</a>
                        <a className="block px-4 py-2 text-sm" tabIndex="-1" href="/AboutUs">About Us</a>
                        <a className="block px-4 py-2 text-sm" tabIndex="-1" href="/Products">Products</a>
                        <a className="block px-4 py-2 text-sm" tabIndex="-1" href="/ContactUs">ContactUs</a>
                    </div>

                </div>
                ):null}  
            */