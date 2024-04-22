"use client"
import React from "react";
import $ from 'jquery'
let toggledIndex = 0
let clickedBtn = ''
const TypeOfServices = (props) => {
    const [clicked, setClicked] = React.useState(false);
    React.useEffect(() => {
        if (clickedBtn == 'readMore') {
            $(`#fullContent-${props?.usedFor}${toggledIndex}`).css('display', 'block')
            $(`#lessContent-${props?.usedFor}${toggledIndex}`).css('display', 'none')
            $(`#readLess-${props?.usedFor}${toggledIndex}`).css('display', 'block')
            $(`#readMore-${props?.usedFor}${toggledIndex}`).css('display', 'none')
        } else if (clickedBtn == 'readLess') {
            $(`#fullContent-${props?.usedFor}${toggledIndex}`).css('display', 'none')
            $(`#lessContent-${props?.usedFor}${toggledIndex}`).css('display', 'block')
            $(`#readLess-${props?.usedFor}${toggledIndex}`).css('display', 'none')
            $(`#readMore-${props?.usedFor}${toggledIndex}`).css('display', 'block')
        }

    }, [clicked])
    const toggleReadMore = (clickedIndex, clickedBtnName) => {

        toggledIndex = clickedIndex;
        clickedBtn = clickedBtnName
        setClicked(!clicked);
    }
    return (
        <div className="p-4 ">
            <div className="container mx-auto">
                <div className="text-center">
                    <h4 className="font-bold text-3xl">
                        {props?.ServicesData?.ServiceHeading}
                    </h4>
                    <p className="my-4 text-gray-700"> {props?.ServicesData?.serviceTitle}</p>
                </div>

                <div className="row">
                    {props?.ServicesData?.cardData?.map((cardItems, index) => {

                        return (

                            <div className="co-sm-12 col-md-4 mb-5">
                                <div className="p-4 rounded shadow-lg h-100">

                                    <h2 className="text-xl font-bold text-blue-700">{cardItems?.heading}</h2>


                                    {cardItems?.Title?.length > 250 ?
                                        <>
                                            <p id={`fullContent-${props?.usedFor}${index}`} style={{ display: 'none' }}>{cardItems?.Title}</p>
                                            <p id={`lessContent-${props?.usedFor}${index}`}>{cardItems?.Title?.substring(0, 250)}</p>
                                            <button className="font-bold" id={`readLess-${props?.usedFor}${index}`} style={{ display: 'none' }} onClick={() => { toggleReadMore(index, "readLess") }}>
                                                Read Less
                                            </button>
                                            <button  className="font-bold"id={`readMore-${props?.usedFor}${index}`} onClick={() => { toggleReadMore(index, "readMore") }}>
                                                Read More
                                            </button>
                                        </> : <p className="text-gray-600">{cardItems?.Title}</p>
                                    }
                                </div>
                            </div>
                        );

                    })}

                </div>
            </div>
        </div >
    )

}
export default TypeOfServices;