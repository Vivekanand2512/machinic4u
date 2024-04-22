"use client"
 import React from "react";
 import Image from 'next/image';
 import { Fade } from "react-awesome-reveal";
 import AcRepair from '../../../public/images/OurServicesImage/Ac Repair.jpeg'
 import BikeService from '../../../public/images/OurServicesImage/Bike Service.jpeg'
 import Carpenter from '../../../public/images/OurServicesImage/Carpenter.jpeg'
 import CarRepair from '../../../public/images/OurServicesImage/CarRepair.jpeg'
 import Electrician from '../../../public/images/OurServicesImage/Electrician.jpeg'
 const OurServices=()=>{
    
const cardData=[
    {
        imgSrc: AcRepair,
        heading: "Ac Repair",
        
    },
    {
        imgSrc: BikeService,
        heading: "Bike Service",
      
    },
    {
        imgSrc: Carpenter,
        heading: "Carpenter",
       
    },
    {
        imgSrc: CarRepair,
        heading: "Car Repair",
     
       
    }, {
        imgSrc: Electrician,
        heading: "Electrician",
     
       
    }

]
    return(
        <>
     
            <div className="mx-auto max-w-7xl pb-40 px-6">
            <h4 class="font-bold mt-32 t text-3xl text-center OurServices">Our Services</h4>
            <div className='d-flex gap-xl-5 gap-y-20 grid lg:grid-cols-4 mt-32 sm:grid-cols-2 TypeOfServiceImg'>
                    <Fade direction={'up'} delay={300} cascade damping={1e-1} triggerOnce={true}>
                        {cardData.map((items, i) => (
                            <div className='text-center' key={i}>
                                <div>
                                    <Image src={items?.imgSrc?.src} alt={items?.imgSrc?.src} width={510} height={10} />
                                </div>
                                <h3 className='text-2xl text-black font-semibold text-center mt-4'>{items.heading}</h3>
                              
                            </div>
                        ))}
                    </Fade>
                </div>
                
            </div>
        
        </>
    )
 }
 export default OurServices;