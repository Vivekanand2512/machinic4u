import React from "react";
import Link from "next/link";




const navigation = [
    { name: 'Home', href: '/', current: false },
    {
        name: 'Services',
        href: '/',
        current: false,
        sublinks: [
            { name: 'Ac-Repair', href: '/Ac-Repair', current: false },
            { name: 'Bike-Repair', href: '/Bike-Repair', current: false },
            { name: 'Car-Repair', href: '/Car-Repair', current: false },
            { name: 'Carpenter', href: '/Carpenter ',current:false },
            { name: 'Electrician', href: '/Electrician ',current:false },
            // Add more services as needed
        ]
    },
    { name: 'About us', href: '/About-us', current: false },
    { name: 'Contact Us', href: '/Contact-us', current: false },
    { name: "+91 9880394900", href: "tel:-+9880394900", current: false }
];



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <div className={`topNav align-items-center d-flex ${item?.sublinks != undefined ? "dropdown-toggle navchild" : ''}`}>
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                        'block  py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                                {item?.sublinks && (
                                    <div className=" top-full left-0 bg-white shadow-lg p-2 mt-1 rounded-md hidden subchild">
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
                        <div className="mt-4"></div>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
