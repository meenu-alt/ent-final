import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import doctor from "./images/doc.webp"

const WhatWeDo = () => {
  return (
    <section className="single-team">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4">
            <div className="pq-patient-img">
              <img src={doctor} className="img-fluid" alt="Team Member" />
            </div>
          </div>
          <div className="col-xl-8 mt-xl-0 mt-4 ps-xl-5">
            <div className="pq-section pq-style-1 text-left">
              <span className="pq-section-sub-title">What We DO</span>
              <h2 className="pq-section-title">Dr. Rajesh Bhardwaj</h2>
              <h2 className="pq-section-sub-sub-title">ENT SPECIALIST</h2>
              <p>
                Address: D 3/14, Vasant Vihar Lane opposite Vasant Vihar Club,
                opp. Shri Ram School, New Delhi, Delhi 110057
              </p>
            </div>
            <div className="pq-icon-box-3 d-lg-flex d-md-flex mb-2">
              <div className="pq-icon-box-icon-3">
                <i aria-hidden="true" className="ion ion-ios-telephone"></i>
              </div>
              <div className="pq-icon-box-content-3">
                <h3 className="pq-icon-box-title-3">
                  <span>+91-9871150032</span>
                </h3>
              </div>
            </div>
            <div className="pq-icon-box-3 d-lg-flex d-md-flex mb-2">
              <div className="pq-icon-box-icon-3">
                <i aria-hidden="true" className="ion ion-ios-email"></i>
              </div>
              <div className="pq-icon-box-content-3">
                <h3 className="pq-icon-box-title-3">
                  <span>entdelhi@gmail.com</span>
                </h3>
              </div>
            </div>
            <div className="pq-icon-box-3 d-lg-flex d-md-flex mb-2">
              <div className="pq-icon-box-icon-3">
                <i aria-hidden="true" className="ion ion-link"></i>
              </div>
              <div className="pq-icon-box-content-3">
                <h3 className="pq-icon-box-title-3">
                  <span>entdelhi.com</span>
                </h3>
              </div>
            </div>
            <div className="pq-title-text mt-4">
              <h2>Follow Us On:</h2>
            </div>
            <div className="pq-social-icon">
              <ul className="d-flex">
              <li>
                    <a href="https://www.facebook.com/medfirstentcentre"  target="blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://g.co/kgs/KjhXPQP" target="blank">
                      <i className="fab fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/drbhardwajent/" target="blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/entdelhi" target="blank">
                      <i className="fab fa-x"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@ENTDelhi" target="blank">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
