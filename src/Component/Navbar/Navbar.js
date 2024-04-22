"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";

import Image from 'next/image';
import phoneimage from '../../../public/images/Navbar/phone.svg'


const navigation = [
    { name: 'Home', href: '/', current: false },
    {
        name: 'Services',
        href: '',
        current: false,
        sublinks: [
            { name: 'Ac-Repair', href: '/Ac-Repair', current: false },
            { name: 'Bike-Repair', href: '/Bike-Repair', current: false },
            { name: 'Carpenter', href: '/Carpenter ', current: false },
            // Add more services as needed
        ]
    },
    { name: 'About us', href: '/About-us', current: false },
    { name: 'Contact Us', href: '/Contact-us', current: false },
];


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar2 = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar2">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-6 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}

                            <div className="flex sm:hidden flex-shrink-0 items-center border-right">
                                <Image src="/images/Logo/Logo.svg" alt="logo" width={36} height={36} />
                                <Link href="/" className='text-2xl font-semibold text-black ml-4'>
                                    Chef&apos;s Kitchen.
                                </Link>
                            </div>
                            <div className="hidden sm:flex flex-shrink-0 items-center border-right">
                                <Image src="/images/Logo/Logo.svg" alt="logo" width={56} height={56} />
                                <Link href="/" className='text-2xl font-semibold text-black ml-4'>
                                    Chef&apos;s Kitchen.
                                </Link>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right ">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <div key={item.name} className={`relative topNav px-3 ${item?.sublinks != undefined ? "dropdown-toggle navchild" : ''}`}>
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-black' : `navlinks hover:opacity-100`,
                                                    "py-4 rounded-md text-lg font-normal opacity-50 space-links"
                                                )}
                                                aria-current={item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                            {item.sublinks && (
                                                <div className="absolute top-full left-0 bg-white shadow-lg p-2 mt-1 rounded-md hidden subchild">
                                                    {item.sublinks.map((sublink) => (
                                                        <Link key={sublink.name} href={sublink.href}
                                                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                                                            {sublink.name}

                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                            </div>
                            <div className='gap-6 hidden lg:flex'>
                                <div className='flex items-center gap-2'>
                                    <Image src={phoneimage} alt="phone-image" width={19} height={19} />
                                    <Link href="tel:-+9880394900" className='text-lg font-medium'>+91 9880394900</Link>
                                </div>
                                {/* <button className='flex justify-end text-xl font-medium bg-bgpink text-pink py-4 px-4 lg:px-8 navbutton rounded-full hover:text-black'>Sign in</button> */}

                            </div>
                        </div>

                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar2;
