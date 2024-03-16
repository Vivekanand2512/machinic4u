"use client"
 import React from "react";
 import Image from 'next/image';
 import { Fade } from "react-awesome-reveal";
 const OurServices=()=>{
    
const cardData=[
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: "Menu variations",
        
    },
    {
        imgSrc: '/images/Features/featureTwo.svg',
        heading: "Cooking warw",
      
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: "Best chef",
       
    },
    {
        imgSrc: '/images/Features/featureFour.svg',
        heading: "Fast food",
     
       
    }

]
    return(
        <>
        
            <div className="mx-auto max-w-7xl pb-40 px-6">
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32'>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        {cardData.map((items, i) => (
                            <div className='card-b p-8 relative rounded-3xl' key={i}>
                                <div className='work-img-bg rounded-full flex justify-center absolute top-[-50%] sm:top-[-40%] md:top-[-55%] lg:top-[-45%] left-[0%]'>
                                    <Image src={items?.imgSrc} alt={items?.imgSrc} width={510} height={10} />
                                </div>
                                <h3 className='text-2xl text-black font-semibold text-center mt-16'>{items.heading}</h3>
                              
                            </div>
                        ))}
                    </Fade>
                </div>
                
            </div>
        
        </>
    )
 }
 export default OurServices;