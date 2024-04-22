import React from "react";

import AskQuestion from "../../Component/GlobalComponent/AskQuestion";
import Link from "next/link";
import dynamic from 'next/dynamic'
const TypeOfServices = dynamic(() => import('../../Component/GlobalComponent/TypeOfService'))
const ContactForm = dynamic(() => import('../../Component/ContactForm'))
import { MdPhone } from "react-icons/md";
export const metadata = {
    title: "Ac repair",
    description: "ac repair near me",
}
const AcRepair = () => {
    const AcServicesData = {
        heading: "Any Types of Bike SERVICES",
        Title: "Bike Repair Service  our mechanic reach at your location.",
        cardData: [
            {
                heading: "Bike Battery Repair",
                Title: "Looking for 24/7 Car & Bike Battery Jumpstart nearby? Battery jumpstart is one of the most widely used on-spot support availed by car and bike owners."
            },
            {
                heading: "Bike Puncture",
                Title: "Fix the puncture or if any other issue"
            },
            {
                heading: "Gas filling up to 1 ton AC",
                Title: "Simplified bike service and repair at your fingertips. We always believe in Transparency and Quality Service. All types of contaminants can stain and destroy the interior of your vehicle."
            },
            {
                heading: "Bike Flat Tire Repair",
                Title: "24/7 Bike Tyre Puncture Repair"
            },
            {
                heading: "Bike Servicing",
                Title: "Brakes, clutch or engine repair. Mechanics4u provides repair services for every mechanical, electrical or technical issues of your bike."
            },
            {
                heading: "Bike Cleaning",
                Title: "We use only premium cleaning products that are safe for your bike's paint, chrome, and other parts, ensuring that every nook and cranny is thoroughly cleaned."
            }
        ]
    }
    const AskQ = [
        {
            id: 1,
            heading: " What types of bike repair services do you offer?",
            content: " We offer a comprehensive range of bike repair services including routine maintenance, engine tune-ups, brake repairs, tire replacements, chain adjustments, electrical repairs, and more."
        },
        {
            id: 2,
            heading: "How do I know if my bike needs repair? ",
            content: "Common signs that your bike may need repair include strange noises, difficulty shifting gears, brake problems, sluggish performance, and visible wear and tear. If you notice any of these signs, it's best to schedule a professional inspection."
        },
        {
            id: 3,
            heading: "How do I book your bike repair services?",
            content: "Booking our services is easy! Simply give us a call at [insert phone number] or visit our website to fill out our online booking form. Our team will assist you in scheduling a convenient appointment for your bike repair."
        },
        {
            id: 4,
            heading: " Are your technicians experienced and qualified?",
            content: "Yes, our technicians are highly experienced and qualified professionals. They undergo rigorous training and have years of experience in bike repair, ensuring top-notch service and customer satisfaction."
        },
        {
            id: 5,
            heading: "Do you provide on-site repair services? ",
            content: " Yes, we offer on-site repair services for your convenience. Our technicians will come to your location equipped with the necessary tools and equipment to perform the required repairs."
        },
        {
            id: 6,
            heading: "Do you use genuine spare parts for bike repairs?",
            content: "Absolutely! We believe in using only genuine spare parts to ensure the quality and longevity of our repairs. Rest assured that your bike will be fitted with authentic components during the repair process."
        }, {
            id: 7,
            heading: " How long does a bike repair typically take?",
            content: "The duration of a bike repair depends on the nature and complexity of the issue. Our technicians will assess the problem and provide you with an estimated timeline for completion during the initial inspection."
        },
        {
            id: 8,
            heading: "Do you offer warranty or guarantee on your bike repair work?",
            content: "Yes, we stand behind the quality of our workmanship. We offer a warranty or guarantee on our bike repair services, ensuring that you are satisfied with the results and have peace of mind."
        },
        {
            id: 9,
            heading: "Are your bike repair services available in all areas of Bangalore?",
            content: "Yes, we provide bike repair services across Bangalore and its surrounding areas. Whether you're in the city center or on the outskirts, our team is ready to assist you with your bike repair needs."
        },
        {
            id: 10,
            heading: "How can I get a quote for my bike repair? ",
            content: "To receive a quote for your bike repair, simply contact us via phone, email, or our online inquiry form. Our team will gather information about the issue you're experiencing and provide you with a transparent and competitive quote based on your specific needs."
        },
    ]

    return (
        <>
            <div className="bg-blue-500/20 text-2xl text-center text-danger py-10 ">
                <p className="p-5">NO. #1 Bike  Service & Repair Company in Bangalore
                    At an Affordable Price</p>
                <Link href="tel:+91 9880394900" type="button" className="animationbtn bor mb-2 p-1 px-4 rounded-2 text-bg-danger text-center text-decoration-none">
                    Call Now
                </Link>
            </div>
            <div className="row mb-4 mx-auto max-w-7xl py-10 px-6">
                <div className="col-sm-12 col-md-6 ">
                    <ContactForm />
                </div>
                <div className="col-md-6 col-sm-12 rounded-lg shadow-lg  text-center">
                    <div className="p-3">

                        <b className="text-2xl">DOORSTEP BIKE REPAIR  SERVICE IN BANGALORE</b>
                        <div className="mt-4">
                            <p>Are you hesitant to entrust your beloved two-wheeler to just any local motorbike mechanic? Concerned about the authenticity of spare parts used during servicing? We understand the importance of maintaining your bike's performance and reliability. That's why Mechanics4u doorstep Bike service in Bangalore is here to provide you with a hassle-free servicing experience.

                                With us, you can rest assured that only 100% genuine spare parts are used for your bike, ensuring optimal performance and longevity. Our bike service packages are priced reasonably, starting at just Rs.499 for regular servicing and Rs.999 for standard bikes.

                                Unlike nearby local garages or mechanics, Mechanics4u offers reputable and authentic bike mechanics for your two-wheeler service in Bangalore at unbeatable prices. You even have the flexibility to choose the engine oil of your preference.

                                Download the Apna Mechanic app today and gain access to a wide range of garage services designed to simplify bike repair and servicing. Say goodbye to the hassles of maintaining your two-wheeler and keep it in top-notch condition with Mechanics4u Mechanic!
                            </p>
                        </div>
                       
                            <div className="p-4">
                            <Link href="tel:+91 9880394900" className="text-decoration-none">
                                <div className="d-flex justify-center">
                                   <div> <MdPhone className='me-2 ms-4 mt-1.5 ' style={{ fontSize: "50px" }} /></div>
                                   <p> Mechanic on Call<br></br>
                                    +91 9880394900</p>
                                </div>
                            </Link>

                        </div>
                        
                    </div>


                </div>

            </div>
            <TypeOfServices ServicesData={AcServicesData} usedFor={'acServices'} />
            <div className="shadow">
                <div className="container mx-auto p-4">
                    <h4 className="font-bold text-3xl text-center">
                        Premier Bike Repair Service in Bangalore

                    </h4>
                    <div>
                        <p>Is your two-wheeled companion feeling a bit under the weather? Don't let a flat tire or a sputtering engine dampen your spirits! Welcome to Revive Your Ride, your ultimate destination for premium bike repair services in Bangalore.</p>
                        <p>At Revive Your Ride, we understand the unique bond between a rider and their bike. Whether you're a seasoned pro or a casual rider, your bike is not just a mode of transport but a reflection of your personality and passion for the road. That's why we treat every bike that comes through our doors with the utmost care and attention it deserves.</p>
                        <p>What sets us apart from the rest? It's not just our expertise, but our commitment to excellence in every aspect of bike repair:</p>
                        <p><h4>1. Skilled Technicians:</h4> Our team of experienced technicians is not just adept at fixing bikes; they're enthusiasts themselves. With years of hands-on experience and a passion for all things two-wheeled, you can trust them to diagnose and repair any issue with precision and efficiency.</p>
                        <p><h4>2. Comprehensive Services: </h4>From minor tune-ups to major overhauls, we've got you covered. Whether it's a routine maintenance check, brake adjustment, chain replacement, or engine repair, our comprehensive range of services ensures that your bike gets the attention it needs to perform at its best.</p>
                        <p><h4>3. Quality Parts: </h4>We believe in using only the highest quality parts and components for every repair job. With access to genuine OEM parts and accessories, you can rest assured that your bike is in good hands.</p>
                        <p><h4>4. Personalized Service:</h4> We understand that every rider and every bike is unique. That's why we take the time to listen to your concerns and tailor our services to meet your specific needs. Whether you ride a sleek sports bike, a rugged cruiser, or a nimble scooter, we have the expertise to keep it running smoothly.</p>
                        <p><h4>5. Convenient Location:</h4> Located in the heart of Bangalore, our workshop is easily accessible from all parts of the city. Whether you need a quick fix on your way to work or a comprehensive service on the weekend, we're here to make bike repair hassle-free and convenient for you.</p>
                        <p>So why wait? Give your bike the care and attention it deserves with Revive Your Ride. Because when it comes to keeping your ride in top condition, there's no substitute for quality and expertise. Schedule your service appointment today and experience the difference first hand!</p>
                    </div>

                </div>
            </div>
            <div className="container mt-4 text-center">
                <h2>Frequently Asked Questions about Bike Repair Services in Bangalore</h2>
                <AskQuestion AskQ={AskQ} />
            </div>

        </>

    )
}
export default AcRepair;