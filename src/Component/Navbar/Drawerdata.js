import React from "react";
import Link from "next/link";




const navigation = [
    { name: 'Home', href: '/', current: false },
    { 
        name: 'Services', 
        href: '/', 
        current: false, 
        sublinks: [
            { name: 'Service 1', href: '/service-1',current:false },
            { name: 'Service 2', href: '/service-2',current:false },
            // Add more services as needed
        ] 
    },
    { name: 'About us', href: '/About-us', current: false },
    { name: 'Contact Us', href: '/Contact-us', current: false},
    {name:"+91 8863886860" ,href:"tel:-+8863886860",current:false}
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
                        ))}
                        <div className="mt-4"></div>
                       

                        {/* <Contactusform /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
