import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import img1 from "./images/1.webp";
import img2 from "./images/2.webp";
import img3 from "./images/3.webp";
import img4 from "./images/4.webp";
import img5 from "./images/5.webp";
import img6 from "./images/6.webp";
import img7 from "./images/7.webp";

const Awards = () => {
  return (
    <>
      <section className="pq-awards pq-py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h4>Our Awards</h4>
              <p>
                In 1997, Dr. Bhardwaj entered the private sector and{" "}
                <strong>set up his own clinic, MedFirst ENT Centre.</strong> He
                has been{" "}
                <strong>
                  previously attached with Max Hospital and Modi Hospital (Max
                  Smart City Hospital, Saket)
                </strong>{" "}
                & is currently attached with the{" "}
                <strong>Sitaram Bhartia Hospital.</strong>
              </p>
              <p>
                He was formerly <strong>Head of ENT at Artemis Hospital</strong>{" "}
                (Gurgaon) as also Chief, ENT Services and Cochlear Implant
                Programme at the Columbia Asia Group of Hospitals, Palam Vihar
                (Gurgaon) with responsibility to look after the ENT services of
                the group’s hospitals in North India.
              </p>
              <p>
                Most recently he was Head, ENT, Manipal Hospitals, Dwarka. Dr.
                Bhardwaj has been the President of the ENT Association of India
                (Delhi Branch) and is involved in the Branch activities. He has
                been the Senior Vice President of Delhi Medical Association,
                South Delhi Branch. The Doctor is well known for his ethical
                approach and for providing an honest opinion.
              </p>
            </div>
            <div className="col-lg-3">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                loop={true}>
                <SwiperSlide>
                  <img src={img1} alt="Award 1" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img2} alt="Award 2" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img3} alt="Award 3" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img4} alt="Award 3" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img5} alt="Award 3" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img6} alt="Award 3" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img7} alt="Award 3" className="img-fluid" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
