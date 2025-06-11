import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import about from "./images/about1.webp"

const AboutDR = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 pe-xl-5">
            <img
              src={about}
              className="img-fluid wow fadeInLeft"
              alt="home"
            />
          </div>
          <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
            <div className="pq-section pq-style-1 text-left">
              <span className="pq-section-sub-title">About the Doctor</span>
              <h1 className="pq-section-title">Dr. (Major) Rajesh Bhardwaj</h1>
              <p className="pq-section-description">
                MBBS (AFMC), MS, DNB, DLO, DHA
              </p>
              <p className="pq-section-description">
                Dr. (Major) Bhardwaj graduated from Armed Forces Medical College
                (AFMC), Pune in 1982 and served in the Indian Army for 15 years,
                where he gained vast clinical experience as an ENT specialist.
                He has served in the largest and busiest hospitals of the armed
                forces including Command Hospitals at Pune and Chandigarh and at
                the Army Hospital (R&R), Delhi Cantt.
              </p>
              <p className="pq-section-description">
                Dr. Bhardwaj earned his blue and white striped Siachen Glacier
                Medal for his long stint on the Siachen glacier in 1984 and was
                the first medical officer to complete his tour of duty without
                being medically evacuated. He has also served at Jaffna (Sri
                Lanka) during the peacekeeping mission and was in charge of the
                battle casualty ward, where his skill as a surgeon and hardiness
                of a soldier were put to the test while handling many casualties
                on a daily basis.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDR;
