
'use client'
import React from "react";
import Slider from "react-slick";
import * as $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import image1 from '../../../public/images/Slider/image1.jpeg'
import image2 from '../../../public/images/Slider/image2.jpeg'
import image3 from '../../../public/images/Slider/image3.jpeg'

export default function SingleCarousel() {
  let sliderRef = React.useRef(null);
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
        image1,
      title: "Title 1",
      subhead: "Subtitle 1",
    },
    {
      imageUrl:image2,
      title: "Title 2",
      subhead: "Subtitle 2",
    },
    {
      imageUrl:
      image3,
      title: "Title 3",
      subhead: "Subtitle 3",
    },
  ];

  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  return (
    <div className="slider-container">
       <div className="carouselSlider">
    
      <Slider  ref={slider => (sliderRef = slider)} {...settings}>
        {slides.map((slide, index) => (
            <div key={index}>
            <img style={{ height: "500px" }} 
              src={slide.imageUrl?.src}
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
    <div style={{ textAlign: "center" }}>
        <button className="button" onClick={play}>
          Play
        </button>
        <button className="button" onClick={pause}>
          Pause
        </button>
        </div>
    </div>
   
  );
}
