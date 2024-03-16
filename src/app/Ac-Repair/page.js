import React from "react";

import AskQuestion from "../../../public/components/Sevices/AskQuestionon";
import Link from "next/link";
import dynamic from 'next/dynamic'
const TypeOfServices = dynamic(() => import('../../../public/components/Sevices/TypeOfServicece'))
const ContactForm = dynamic(() => import('../../../public/components/ContactForm'))
import { MdPhone } from "react-icons/md";
export const metadata = {
    title: "Ac repair",
    description: "ac repair near me",
}
const AcRepair = () => {
    const AcServicesData = {
        heading: "Any Types of AC SERVICES",
        Title: "AC Repair Service and Installation services our mechanic reach at your location.",
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
     const AskQ=[
        {
        id:1,
        heading:"How can I get the best nearby air conditioning technicians within Bangalore?",
        content:"MECHANICS4U makes it easier to find the right ac techanicians"
     },
     {
        id:2,
        heading:"Does MECHANICS4U provide AC services near me?",
        content:"Yes, MECHANICS4U provide the best ac services nearby your location including all parts of bangalore"
     },
     {
        id:3,
        heading:"How do I Find ac techanicians around Me?",
        content:"Ac techanicians near me close-by you are available on MECHANICS4U that can be selected on calls."
     },
    ]

    return (
        <>
            <div className="bg-blue-500/20 text-2xl text-center text-danger">
                <p className="p-5">NO. #1 AC Service & Repair Company in Bangalore
                    At an Affordable Price</p>
                <Link href="tel:+91 8863886860" type="button" className="border-1 mb-2 p-1 px-4 rounded-2 text-bg-danger text-center text-decoration-none">
                    Call Now
                </Link>
            </div>
            <div className="row mb-4">
                <div className="col-md-6 col-sm-12 rounded-lg shadow-lg text-2xl text-center">
                    <div className="p-3">
                   
                    <b>DOORSTEP AC SERVICE IN BANGALORE</b>
                   <div className="mt-4">
                        <p>We are one of the leading Virtual ac repair and service serving customers in Bangalore.</p>
                        <p>All services are performed by highly qualified and certified ac mechanics we core focus on building relationships with our customers.</p>
                        <p>We provide ac service at your doorstep so you can just give us a call and our ac mechanics will be available for your air conditioner repair service at your home.</p>
                        <p>Provides high-quality air conditioner service and repair with the convenience of online doorstep aircon repair service, so you can get your ac service repairing fixed without leaving your home.</p>
                    </div>
                    <div className="p-4">
                    <Link href="tel:+91 8863886860" className="text-decoration-none">
                    <div>
                      <MdPhone className='me-2 ms-4 mt-1.5 position-absolute'style={{fontSize:"50px"}} />
                     Mechanic on Call
                      <div>+91 8863886860</div>
                    </div>
                  </Link>
                   
                    </div>
                    </div>
                   
                  
                </div>
                <div className="col-sm-12 col-md-6">
                    <ContactForm/>
                </div>
            </div>
            <TypeOfServices ServicesData={AcServicesData} />
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
                    </div>

                </div>
            </div>
            <AskQuestion AskQ={AskQ}/>
        </>

    )
}
export default AcRepair;