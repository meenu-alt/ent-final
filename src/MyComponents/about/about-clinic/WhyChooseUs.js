import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import about3 from "../about-the-doctor/images/about3.jpg";

const WhyChooseUs = () => {
  return (
    <section className="about-clinic">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 pe-xl-5">
            <img src={about3} className="img-fluid wow fadeInLeft" alt="home" />
          </div>
          <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
            <div className="pq-section pq-style-1 text-left">
              <span className="pq-section-sub-title">Why CHoose Us</span>
              <h1 className="pq-section-title">Why choose MedFirst?</h1>
              <p className="pq-section-heighlight">
                MedFirst ENT Centre is a specialist ENT clinic located in Vasant
                Vihar, New Delhi. At the helm is the city’s leading ENT surgeon
                Dr (Major) Rajesh Bhardwaj. The centre has a well equipped OT
                with trained, experienced, and caring staff.
              </p>
              <p className="pq-section-description">
                In 1997, Dr Bhardwaj entered the private sector and set up his
                own clinic, MedFirst ENT Centre. He has been previously attached
                with Max Hospital and Modi Hospital (Max Smart City Hospital,
                Saket ) & is currently attached with the Sitaram Bhartia
                Hospital.
              </p>
              <p className="pq-section-description">
                Most recently he was Head, ENT, Manipal Hospitals, Dwarka. Dr
                Bhardwaj has been the President of the ENT Association of India
                (Delhi Branch) and is involved in the Branch activities. He has
                been the Senior Vice President of Delhi Medical Association,
                South Delhi Branch. The doctor is well known for his ethical
                approach and for providing an honest opinion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
