import React from "react";


const TypeOfServices=(props)=>{
    return(
         <div className="p-4 ">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h4 className="font-bold text-3xl">
                            {props?.ServicesData?.ServiceHeading}
                        </h4>
                        <p className="my-4 text-gray-700"> {props?.ServicesData?.serviceTitle}</p>
                    </div>

                    <div className="row">
                        {props?.ServicesData?.cardData?.map((cardItems) => {
                            return (
                                <div className="co-sm-12 col-md-4 mb-5">
                                    <div className="p-4 rounded shadow-lg h-100">

                                        <h2 className="text-xl font-bold text-blue-700">{cardItems?.heading}</h2>
                                        <p className="text-gray-600">{cardItems?.Title}</p>
                                    </div>
                                </div>
                            );

                        })}

                    </div>
                </div>
            </div>
    )

}
export default TypeOfServices ;