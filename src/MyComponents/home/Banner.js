import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";

// Desktop Banner Images
import desktopBanner1 from "./images/ent-new-banner.jpg";
import desktopBanner2 from "./images/ent-new-banner2.jpg";

// Mobile Banner Images
import mobileBanner1 from "./images/ent-mob1.jpg";
import mobileBanner2 from "./images/ent-mob2.jpg";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const banners = isMobile
    ? [
        { src: mobileBanner1, alt: "Mobile Banner 1", link: "/book-an-appointment/" },
        { src: mobileBanner2, alt: "Mobile Banner 2", link: "/book-an-appointment/" },
      ]
    : [
        { src: desktopBanner1, alt: "Desktop Banner 1", link: "/book-an-appointment/" },
        { src: desktopBanner2, alt: "Desktop Banner 2", link: "/book-an-appointment/" }
      ];

  return (
    <section className="banner-carousel">
      <style>
        {`
          .banner-carousel {
            position: relative;
            padding: 0;
            margin: 0;
            width: 100%;
          }
          
          .banner-carousel .swiper {
            width: 100%;
            height: auto;
          }
          
          .banner-carousel .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .banner-carousel .swiper-slide a {
            display: block;
            width: 100%;
          }
          
          .banner-carousel .swiper-slide img {
            width: 100%;
            height: auto;
            display: block;
          }
          
          /* Custom arrow styles */
          .banner-carousel .swiper-button-prev,
          .banner-carousel .swiper-button-next {
            color: white;
            background: rgba(0,0,0,0.5);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: ${isMobile ? "none" : "flex"};
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }
          
          .banner-carousel .swiper-button-prev {
            left: 20px;
          }
          
          .banner-carousel .swiper-button-next {
            right: 20px;
          }
          
          .banner-carousel .swiper-button-prev:hover,
          .banner-carousel .swiper-button-next:hover {
            background: rgba(0,0,0,0.8);
            transform: scale(1.1);
          }
          
          .banner-carousel .swiper-button-prev:after,
          .banner-carousel .swiper-button-next:after {
            font-size: 20px;
            font-weight: bold;
          }
        `}
      </style>
      
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{ 
          delay: 3000,
          disableOnInteraction: false 
        }}
        loop={true}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Link to={banner.link}>
              <img
                src={banner.src}
                alt={banner.alt}
                loading="lazy"
              />
            </Link>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </section>
  );
};

export default Banner;