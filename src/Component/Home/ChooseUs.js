import React from "react";
import dynamic from 'next/dynamic';
const TypeOfServices = dynamic(() => import('../GlobalComponent/TypeOfService'))


const ChooseUs = () => {
    const AcServicesData = {
        ServiceHeading: "Why Choose Us?",
        serviceTitle: "At Mechanics4u, we understand the importance of keeping your essential appliances and equipment in top condition. That's why we specialize in providing expert repair and installation services for bikes, air conditioners, and washing machines. Here's why you should choose us:",
        cardData: [
            {
                heading: "Expertise in Multiple Services",
                Title: `Bike Repair: Our skilled technicians have extensive experience diagnosing and repairing all types of bike issues, from simple tune-ups to complex repairs. Whether it's a flat tire, brake adjustment, or drivetrain repair, we've got you covered.
                AC Repair and Installation: Beat the heat with our professional AC repair and installation services. We have the knowledge and tools to diagnose and fix any AC issue efficiently. Plus, our expert installation ensures optimal performance and energy efficiency for your cooling system.
                Washing Machine Repair: Don't let a malfunctioning washing machine disrupt your laundry routine. Our technicians are equipped to handle a variety of washing machine problems, including leaks, drainage issues, and mechanical failures.`
            },
            {
                heading: "Prompt and Reliable Service",
                Title: `We understand that appliance breakdowns can be frustrating. That's why we prioritize prompt service to get your appliances back up and running as quickly as possible.
                With our efficient repair process, you can trust us to restore functionality to your bikes, AC units, or washing machines in no time.`
            },
            {
                heading: "Quality Workmanship",
                Title: `When you choose Mechanics4u, you can rest assured that your repairs and installations are in capable hands. Our technicians are highly skilled and undergo regular training to stay updated on the latest industry trends and techniques. We use only quality parts and materials to ensure lasting results.`
            },
            {
                heading: "Transparent Pricing",
                Title: ` We believe in providing honest and transparent pricing for our services. Before any work begins, we'll provide you with a detailed estimate, so you know exactly what to expect. There are no hidden fees or surprises—just fair, upfront pricing.`
            },
            {
                heading: "Customer Satisfaction Guaranteed",
                Title: `Your satisfaction is our ultimate priority. We strive to deliver exceptional service that exceeds your expectations every time. Whether you're getting your bike repaired, AC serviced, or washing machine fixed, we'll go above and beyond to ensure you're satisfied with the results.
                Choose Mechanics4u for reliable, efficient, and affordable repair and installation services for your bikes, air conditioners, and washing machines. Contact us today to schedule your appointment and experience the difference!`
            },
            {
                heading: "Convenient Scheduling",
                Title: `We understand that your time is valuable. That's why we offer flexible scheduling options to accommodate your busy lifestyle. Whether you need a repair service during weekdays, weekends, or even on short notice, we're here to accommodate your needs and provide convenient appointment times.`
            }
        ]
    }
    return (
       
        <TypeOfServices ServicesData={AcServicesData} usedFor={'chooseUs'}></TypeOfServices>
    )

}
export default ChooseUs;