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
        ServiceHeading: "Any Types of AC SERVICES",
        serviceTitle: "AC Repair Service and Installation services our mechanic reach at your location.",
        cardData: [
            {
                heading: "AC Repair Service",
                Title: "Looking for 24/7 AC Repair Service nearby? AC Service is one of the most widely used on-spot support availed by AC owners."
            },
            {
                heading: "AC Installation Service",
                Title: "Fix the AC Installation Service or if any other Repair"
            },
            {
                heading: "Gas filling up to 1 ton AC",
                Title: "Simplified ac service and repair at your fingertips. We always believe in Transparency and Quality Service. All types of Gas filling up to 1 ton AC in your ac."
            },
            {
                heading: "Copper Pipe per meter (with insulation & Wire)",
                Title: "24/7 Air Conditioner Repair Service"
            },
            {
                heading: "wall stand for split AC",
                Title: "Air Conditioner Service and Repair Mechanics4u provides AC repair services for every types of AC Spilt"
            },
            {
                heading: "Drain pipe per meter",
                Title: "We use only premium Central AC, Split AC, Window AC that are safe for your AC Repair and service that every nook and cranny is thoroughly cleaned."
            }
        ]
    }
    const AskQ = [
        {
            id: 1,
            heading: " What types of AC repair services do you offer?",
            content: "We offer a comprehensive range of AC repair services including routine maintenance, refrigerant recharge, compressor repair, thermostat replacement, duct cleaning, and much more."
        },
        {
            id: 2,
            heading: "How do I know if my AC needs repair?",
            content: " Common signs that your AC may need repair include reduced cooling efficiency, unusual noises or smells, frequent cycling on and off, and visible leaks or moisture around the unit. If you notice any of these signs, it's best to schedule a professional inspection."
        },
        {
            id: 3,
            heading: "How do I book your AC repair services? ",
            content: "Booking our services is simple. Just give us a call at [insert phone number] or fill out our online booking form on our website. Our team will assist you in scheduling a convenient appointment for a technician to assess and repair your AC."
        },
        {
            id: 4,
            heading: "Are your technicians certified and experienced?",
            content: "Yes, our technicians are highly trained, certified, and experienced professionals. They undergo regular training to stay updated on the latest technologies and techniques in AC repair, ensuring reliable service and customer satisfaction."
        },
        {
            id: 5,
            heading: "Do you provide emergency AC repair services?",
            content: "Yes, we understand that AC breakdowns can happen unexpectedly, especially during hot summer months. That's why we offer emergency AC repair services to address urgent issues promptly and restore comfort to your home or office."
        },
        {
            id: 6,
            heading: " What brands of AC units do you repair?",
            content: "Our technicians are proficient in repairing all major brands and models of AC units, including but not limited to Daikin, Carrier, Voltas, LG, Samsung, Blue Star, and Hitachi."
        },
        {
            id: 7,
            heading: "Do you offer warranty or guarantee on your AC repair work?",
            content: "Yes, we stand behind the quality of our workmanship. We offer a warranty or guarantee on our AC repair services, ensuring that you are satisfied with the results and have peace of mind."
        },
        {
            id: 8,
            heading: " How long does an AC repair typically take?",
            content: "The duration of an AC repair depends on the nature and complexity of the issue. Our technicians will assess the problem and provide you with an estimated timeline for completion during the initial inspection."
        },
        {
            id: 9,
            heading: " Do you provide regular maintenance services for AC units?",
            content: "Yes, we highly recommend regular maintenance to keep your AC unit running efficiently and prevent costly repairs. Our maintenance services include cleaning, lubricating, inspecting components, and checking refrigerant levels."
        },
        {
            id: 10,
            heading: " How can I get a quote for my AC repair? ",
            content: "To receive a quote for your AC repair, simply contact us via phone, email, or our online inquiry form. Our team will gather information about your AC unit and the issue you're experiencing, and provide you with a transparent and competitive quote based on your specific needs."
        },
    ]

    return (
        <>
            <div className="bg-blue-500/20 text-2xl text-center text-danger py-10 ">
                <p className="p-5">NO. #1 AC Service & Repair Company in Bangalore
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

                        <b className="text-2xl">DOORSTEP AC SERVICE IN BANGALORE</b>
                        <div className="mt-4">
                            <p>We are one of the leading Virtual ac repair and service serving customers in Bangalore.
                                All services are performed by highly qualified and certified ac mechanics we core focus on building relationships with our customers.
                                We provide ac service at your doorstep so you can just give us a call and our ac mechanics will be available for your air conditioner repair service at your home.
                                Provides high-quality air conditioner service and repair with the convenience of online doorstep aircon repair service, so you can get your ac service repairing fixed without leaving your home.</p>

                        </div>
                        <div className="p-4">
                            <Link href="tel:+91 9880394900" className="text-decoration-none">
                                <div>
                                    <MdPhone className='me-2 ms-4 mt-1.5 position-absolute' style={{ fontSize: "50px" }} />
                                    Mechanic on Call
                                    <div>+91 9880394900</div>
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
                        24X7 AC Repair & Service

                    </h4>
                    <div>
                        <p>Experienced Technicians: Our team consists of experienced and certified technicians with years of experience in the HVAC industry. You can trust us to deliver reliable and professional service every time.</p>
                        <p>Prompt Response: We understand the urgency of AC problems, especially in the sweltering heat of Bangalore. That’s why we strive to respond promptly to service calls and schedule appointments at your convenience.</p>
                        <p>Quality Workmanship: We take pride in our work and adhere to the highest standards of quality and craftsmanship. Whether it’s a minor repair or a complete installation, we ensure attention to detail and meticulous workmanship. You can rest assured that your AC will be repaired with precision and care to ensure long-lasting performance.</p>
                        <p>Transparent Pricing: We believe in transparent pricing and provide upfront estimates for all our services. You’ll never have to worry about hidden fees or surprises on your bill.</p>
                        <p>Customer Satisfaction: Your satisfaction is our priority. We go above and beyond to ensure that every customer is delighted with our services. From start to finish, we strive to exceed your expectations and earn your trust.</p>
                        <p>How can I get the best nearby air conditioning technicians within Bangalore?
                            Does MECHANICS4U provide AC services near me?
                            How do I Find ac techanicians around Me?
                        </p>
                    </div>

                </div>
            </div>
            <div className="container mt-4 text-center">
                <h2>Frequently Asked Questions about AC Repair Services in Bangalore</h2>
                <AskQuestion AskQ={AskQ} />
            </div>

        </>

    )
}
export default AcRepair;