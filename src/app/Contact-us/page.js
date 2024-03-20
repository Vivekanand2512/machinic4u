import React from "react";
import dynamic from 'next/dynamic';

import { IoLocationSharp } from "react-icons/io5";
const ContactForm = dynamic(() => import('@/Component/ContactForm'))

import { MdPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";


export const metadata = {
    title: "contact us ",
    description: "contact us pages",
}
const ContactUs = () => {
    return (

        <div className="row mx-auto max-w-7xl py-10 px-6">
            <div className="col-md-6 col-sm-12 mb-4 rounded-lg shadow-lg p-4">
                <h2 className="font-bold text-center">Request a Free Estimate</h2>
                <div className="p-3">
                    <p> “Our Expert Mechanics working 24*7 to Update your Bikes and car Ignoring squealing brakes is not good, as less responsive brakes can even lead to severe accidents”.</p>
                </div>
                <div className="p-3">
                    <div className="border row shadow-2xl p-3">
                        <div className="col-sm-12 col-md-2">
                            <IoLocationSharp className='bg-blue-gray-50 p-2 rounded-5' style={{ fontSize: "50px" }} />

                        </div>
                        <div className="col-sm-12 col-md-10">
                            <p className="fw-semibold">Address</p>
                            <p className="figure-caption"> Mechanicrew india hub Opposite of Aditya academy of architecture Kogilu Main Rd, Prakruthi Nagar, Yelahanka,, Bangalore, India, Karnataka</p>

                        </div>
                        <div className="col-sm-12 col-md-2">
                            <MdPhone className='bg-blue-gray-50 p-2 rounded-5' style={{ fontSize: "50px" }} />
                        </div>
                        <div className="col-sm-12 col-md-10 p-3">
                            <p className="fw-semibold">Call Us</p>
                            <p className="figure-caption">+9198803-94900</p>

                        </div>
                        <div className="col-sm-12 col-md-2">
                            <IoMdMail className='bg-blue-gray-50 p-2 rounded-5' style={{ fontSize: "50px" }} />
                        </div>
                        <div className="col-sm-12 col-md-10">
                            <p className="fw-semibold">Email Us</p>
                            <p className="figure-caption">mechanicsu8@gmail.com</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <ContactForm />
            </div>
            <div>
                {/* <GoogleMap address="1600 Amphitheatre Parkway, Mountain View, CA"/> */}
            </div>
        </div>


    )
}
export default ContactUs;