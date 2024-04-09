
'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export default function SingleCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    prevArrow : <FaAngleLeft />,
    nextArrow: <FaAngleRight />
  };

  const slides = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      title: "Title 1",
      subhead: "Subtitle 1",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      title: "Title 2",
      subhead: "Subtitle 2",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
      title: "Title 3",
      subhead: "Subtitle 3",
    },
  ];

  return (
    <div className="slider-container">
       <div className="carouselSlider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
            <div key={index}>
            <img style={{ height: "500px" }} 
              src={slide.imageUrl}
              loading="lazy"
              className="h-full w-full object-cover"
            />
               {/* <Image
        src={slide?.imageUrl}
        alt="Description of image"
        width={500}
        height={300}
        loading="lazy" // Enable lazy loading
      /> */}
          
          </div>
        ))}
      </Slider>
    </div>
    </div>
   
  );
}
