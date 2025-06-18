import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

import Myringotomy from "./images/icons/myringotomy.png";
import MLS from "./images/icons/mls.png";
import Tonsillectomy from "./images/icons/tonsillectomy.png";
import Adenoidectomy from "./images/icons/adenoidectomy.png";
import Snoring from "./images/icons/Snoring-Sleep-Apnea-Surgery.png";
import Septoplasty from "./images/icons/septoplasty.png";
import Turbinectomy from "./images/icons/turbinectomy.png";
import FESS from "./images/icons/functional-endoscopic-sinus-surgery.png";
import Swelling from "./images/icons/neck-swelling-surgery.png";
import Nasal from "./images/icons/nasal-polyp-removal.png";
import Myringoplasty from "./images/icons/myringoplasty.png";
import Mastoidectomy from "./images/icons/mastoidectomy.png";

export default function WhatWeDo() {
  return (
    <section className="pq-home2-about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 mt-4 mt-lg-0">
            <div className="pq-section pq-style-1 text-left">
              <span className="pq-section-sub-title">What we do</span>
              <h2
                className="pq-section-title"
                style={{ color: "#4C906F", fontSize: "40px" }}
              >
              ENT Consultation, Vertigo, Allergies, ENT Surgeries, Hearing Aids
              </h2>
              <p className="pq-section-description">
  Comprehensive ENT examination including Endoscopies and Audiology, Dedicated Vertigo Clinic, Testing for allergies (Skin Prick Test) and Allergen Immunotherapy (AIT), All ENT Surgeries, World's latest Hearing Aids-  Trial and Dispensation.</p>

            </div>
          </div>
        </div>
        <style>
          {` 
            .pq-fancy-box-icon i img {
    max-width: 100%;
    transition: transform 0.3s ease; /* Add a smooth hover effect */
  }

  .pq-fancy-box {
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .pq-fancy-box:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px); /* Lift the box on hover */
  }

  .pq-fancy-box-title {
    font-size: 1.5rem;
    color: #333;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .pq-fancybox-description {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }
    .pq-fancy-box.pq-style-1 {
    padding: 12px 12px;
    transition: all 0.5s ease;
    height: auto;
    display: flex
;
}
.pq-fancy-box.pq-style-1 .pq-fancy-box-title {
    text-transform: capitalize;
    margin-top: 15px;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 18px;
}
   .pq-fancy-box-info{
      align-items: center;
    text-align: left;
    justify-content: flex-start;
    display: flex;
    padding: 0 3px;
   } 


          `}
        </style>
        <div className="service">
          <div className="">
            <div className="row">
              <div className="col-md-6 col-6 col-lg-4 col-xl-3">
                <Link to="./tonsillectomy">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img
                          src={Tonsillectomy}
                          className="img-fluid"
                          alt="Tonsillectomy"
                        />
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">Tonsillectomy</h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="./adenoid-surgery">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Adenoidectomy}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">Adenoidectomy</h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="./snoring-sleep-apnea-surgery">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Snoring}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">
                        Snoring & Sleep Apnea Surgery
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="./myringotomy-with-grommet">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Myringotomy}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">Myringotomy</h2>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="./septoplasty">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Septoplasty}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">Septoplasty</h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="./turbinectomy">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Turbinectomy}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">Turbinectomy</h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="./functional-endoscopic-sinus-surgery">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={FESS}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">FESS</h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="./neck-swelling-surgery">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Swelling}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">
                        Removal of Neck Swelling
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="./nasal-polyp-removal">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Nasal}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">Nasal Polypectomy</h2>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="./myringoplasty">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Myringoplasty}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">Myringoplasty</h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="./mastoidectomy">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Mastoidectomy}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">Mastoidectomy</h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="./microlaryngeal-surgery-mls/">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={MLS}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">MLS</h2>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
