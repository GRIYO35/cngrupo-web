/*import carru1 from "../Assets/redi1.png";
import carru2 from "../Assets/redi2.png";
import carru3 from "../Assets/redi3.png";
import carru4 from "../Assets/redi4.png";
import carru5 from "../Assets/redi5.png";
import carru6 from "../Assets/redi6.png";
import carru7 from "../Assets/redi7.png";
import carru8 from "../Assets/redi8.png";
import carru9 from "../Assets/redi9.png";
import carru10 from "../Assets/redi10.png";
import carru11 from "../Assets/redi11.png";
import carru12 from "../Assets/redi12.png";*/
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css"
import FlechaDerecha from "../Assets/flecha derecha@300x-8.png"
import FlechaIzquierda from "../Assets/flecha izquierda@300x-8.png"
import { EffectCoverflow, Pagination, Navigation } from "swiper";

function Slider() {
  const carru1 = "http://webcontent.cn-grupo.net/Media/Fotos/Home/redi1.png";
  const carru2 = "http://webcontent.cn-grupo.net/Media/Fotos/Home/redi2.png";
  const carru3 = "http://webcontent.cn-grupo.net/Media/Fotos/Home/redi3.png";
  const carru4 = "http://webcontent.cn-grupo.net/Media/Fotos/Home/redi4.png";
  const carru5 = "http://webcontent.cn-grupo.net/Media/Fotos/Home/redi5.png";
  const carru6 = "http://webcontent.cn-grupo.net/Media/Fotos/Home/redi6.png";
  const carru7 = "http://webcontent.cn-grupo.net/Media/Fotos/Home/redi7.png";
  const carru8 = "http://webcontent.cn-grupo.net/Media/Fotos/Home/redi8.png";
  const carru9 = "http://webcontent.cn-grupo.net/Media/Fotos/Home/redi9.png";
  const carru10 = "http://webcontent.cn-grupo.net/Media/Fotos/Home/redi10.png";
  const carru11 = "http://webcontent.cn-grupo.net/Media/Fotos/Home/redi11.png";
  const carru12 = "http://webcontent.cn-grupo.net/Media/Fotos/Home/redi12.png";
  const swiperRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(carru1);
  const [currentImage1, setCurrentImage1] = useState(carru2);
  const [currentImage2, setCurrentImage2] = useState(carru3);
  const [currentImage3, setCurrentImage3] = useState(carru4);
  const [currentImage4, setCurrentImage4] = useState(carru5);
  const [currentImage5, setCurrentImage5] = useState(carru6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1919) {
        setCurrentImage(carru7);
      } else {
        setCurrentImage(carru1);
      }
      if (window.innerWidth > 1919) {
        setCurrentImage1(carru8);
      } else {
        setCurrentImage1(carru2);
      }
      if (window.innerWidth > 1919) {
        setCurrentImage2(carru9);
      } else {
        setCurrentImage2(carru3);
      }
      if (window.innerWidth > 1919) {
        setCurrentImage3(carru10);
      } else {
        setCurrentImage3(carru4);
      }
      if (window.innerWidth > 1919) {
        setCurrentImage4(carru11);
      } else {
        setCurrentImage4(carru5);
      }
      if (window.innerWidth > 1919) {
        setCurrentImage5(carru12);
      } else {
        setCurrentImage5(carru6);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  return (
<div className="container-swiper">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={currentImage} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={currentImage1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={currentImage2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={currentImage3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={currentImage4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={currentImage5} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next">
          <img src={FlechaDerecha} 
               alt="Siguiente" 
               onClick={handleNext} 
               style={{
                  width: 11, 
                  height: 22, 
                  top: "50%",
                  left: "50%",
                  transform: "translate(20%, 0%)",
                }}/>
          </div>
          <div className="swiper-button-prev">
          <img src={FlechaIzquierda} 
               alt="Siguiente" 
               onClick={handlePrev} 
               style={{
                  width: 11, 
                  height: 22, 
                  top: "50%",
                  left: "50%",
                  transform: "translate(-10%, 0%)",
                }}/>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
