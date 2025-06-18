import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";

const PatientReviews = () => {
  const videoLinks = [
    "jYguN1Gqgoo",
    "rFPeW_FPRbw",
    "FWavyPp1UCY",
    "bzqf5nTBurI",
    "N_ERiAOoUEE",  // New video (YouTube Shorts)
    "oJ7Ur0mStYY",  // New video (YouTube Shorts)
  ];

  return (
    <section className="our-work">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pq-section pq-style-1 text-center">
              <h2 className="pq-section-title">Patient's Reviews</h2>
            </div>
          </div>
          <div className="col-lg-12 position-relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                480: { slidesPerView: 1, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 25 },
                1280: { slidesPerView: 4, spaceBetween: 30 },
              }}
              loop={true}
              autoplay={{ delay: 3000 }}
              className="custom-swiper"
            >
              {videoLinks.map((videoId, index) => (
                <SwiperSlide key={index}>
                  <div className="pq-portfoliobox pq-style-1">
                    <div className="pq-portfolio-block">
                      <div className="pq-portfolio-img">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`Review ${index + 1}`}
                          allowFullScreen
                          className="pq-video-frame"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            {/* Custom Styles */}
            <style>
  {`
    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 35px;
      height: 35px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      z-index: 10;
      cursor: pointer;
    }

    .swiper-button-prev { left: -40px; }
    .swiper-button-next { right: -40px; }

    .pq-video-frame {
      width: 100%;
      height: 500px; /* Increased height */
      border: none;
      border-radius: 10px;
    }

    @media (max-width: 1024px) {
      .pq-video-frame {
        height: 480px; /* Increased height */
      }
    }

    @media (max-width: 768px) {
      .pq-video-frame {
        height: 370px; /* Increased height */
      }
      .swiper-button-prev, .swiper-button-next {
        width: 30px;
        height: 30px;
        font-size: 16px;
      }
      .swiper-button-prev { left: -20px; }
      .swiper-button-next { right: -20px; }
    }

    @media (max-width: 480px) {
      .pq-video-frame {
        height: 300px; /* Increased height */
      }
      .swiper-button-prev, .swiper-button-next {
        width: 25px;
        height: 25px;
        font-size: 14px;
      }
      .swiper-button-prev { left: -15px; }
      .swiper-button-next { right: -15px; }
    }
  `}
</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientReviews;
