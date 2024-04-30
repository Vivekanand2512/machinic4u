import React from "react";
import Link from "next/link";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";






function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Data({ isOpen, setIsOpen }) { // Add props as function parameters
    const [navigation, setNavigation] = React.useState([
        { name: 'Home', href: '/', current: false },
        {
            name: 'Services',
            href: '/',
            current: false,
            sublinksOpen: false,
            sublinks: [
                { name: 'Ac-Repair', href: '/Ac-Repair', current: false },
                { name: 'Bike-Repair', href: '/Bike-Repair', current: false },
                { name: 'Car-Repair', href: '/Car-Repair', current: false },
                { name: 'Carpenter', href: '/Carpenter ', current: false },
                { name: 'Electrician', href: '/Electrician ', current: false },
                // Add more services as needed
            ]
        },
        { name: 'About us', href: '/About-us', current: false },
        { name: 'Contact Us', href: '/Contact-us', current: false },
        { name: "+91 9880394900", href: "tel:-+9880394900", current: false }
    ]);

    const openHideChild = (index) => {
        let allNav = [];
        allNav = navigation.map((child, childIndex) => {
            if (index === childIndex && child.sublinks !== undefined) {
                console.log("Toggling sublinksOpen for item:", child);
                child.sublinksOpen = !child.sublinksOpen;
            }
            return child;
        });
        setNavigation(allNav);
    };


    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item, index) => (
                            <div key={index} className={`topNav align-items-center`}>
                              
                                    <Link
                                        href={item.href}
                                        className={classNames(
                                            item.current ? ' text-purple' : 'text-black hover: hover:text-purple d-flex',
                                            'block py-2 rounded-md text-base font-medium d-flex'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                        onClick={() => {
                                            if (item.sublinks !== undefined) {
                                                openHideChild(index);
                                            } else {
                                                setIsOpen(false);
                                            }
                                        }}
                                    >
                                        {item.name}
                                        {item.sublinks && (item?.sublinksOpen == true ? <MdArrowDropUp /> : <MdArrowDropDown />)}
                                    </Link>
                                {item.sublinks && item.sublinksOpen && (
                                    <div className="top-full left-0 bg-white shadow-lg p-2 mt-1 rounded-md lotusKKI">
                                        {item.sublinks.map((sublink, subIndex) => (
                                            <Link key={subIndex} href={sublink.href} className="block px-3 py-2 text-sm text-gray-700 hover: rounded-md" onClick={() => setIsOpen(false)}>
                                                {sublink.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="mt-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
