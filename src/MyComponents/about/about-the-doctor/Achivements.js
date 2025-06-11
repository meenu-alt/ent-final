import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "./about-the-doctor.css";

import img1 from "./images/1.webp";
import img2 from "./images/2.webp";
import img3 from "./images/3.webp";
import img4 from "./images/4.webp";
import img5 from "./images/5.webp";
import img6 from "./images/6.webp";
import img7 from "./images/7.webp";

const Achievements = () => {
  const achievements = [
    "Best ENT Specialist Delhi, Asia Healthcare Summit Awards, 2020",
    "Top Three Rated ENT Specialist of Delhi since many years — an independent global rating agency",
    "Distinguished Doctor’s Award — 2017",
    "Healthcare Ambassador award for disseminating information to the public during Covid times - 2022",
  ];

  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section className="achievements-section">
      <div className="container">
        <div className="row align-items-center">
        
          <div className="col-lg-6">
            <h2 className="pq-section-title">Our Doctor's Achievements</h2>
            <ul className="achievements-list">
              {achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          
          <div className="col-lg-6">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={2}
              spaceBetween={20}
              autoplay={{ delay: 3000 }}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1 }, 
                768: { slidesPerView: 2 }, 
              }}
              className="achievements-swiper">
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Achievement ${index + 1}`}
                    className="achievements-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
