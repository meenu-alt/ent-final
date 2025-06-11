import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import image1 from "./images/New-Project-1.webp";

const Laryngoscopy = () => {
  return (
    <>
      <section className="left-right-section">
      <style>
        {`
        section {
    position: relative;
    padding: 15px 0px !important;
}`}
      </style>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h6 className="pq-section-title text-danger">Laryngoscopy</h6>
                <p className="text-danger">
                  Advanced Diagnostic Procedure for Throat Conditions
                </p>
                <h2 className="pq-section-title">Laryngoscopy at ENT Delhi</h2>
                <p>
                  Laryngoscopy is a diagnostic procedure used to examine the throat, voice box, and vocal cords. It helps in detecting abnormalities such as inflammation, infections, or structural issues.
                </p>
                <h2 className="pq-section-subtitle sub-subtitle">
                  How is the Test Performed?
                </h2>
                <p>
                  Laryngoscopy can be performed using different techniques, including rigid telescopy and fiberoptic laryngoscopy. These procedures provide detailed visuals for accurate diagnosis.
                </p>
              </div>
            </div>

            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={image1}
                className="img-fluid wow fadeInRight"
                alt="laryngoscopy-procedure"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="left-right-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={image1}
                className="img-fluid wow fadeInRight"
                alt="laryngoscopy-procedure"
              />
            </div>

            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h2 className="pq-section-subtitle sub-subtitle">
                  When is Laryngoscopy Needed?
                </h2>
                <ul className="key-points">
                  <li>
                    Persistent throat pain, irritation, or difficulty swallowing.
                  </li>
                  <li>
                    Changes in voice or chronic hoarseness.
                  </li>
                  <li>
                    Sensation of something stuck in the throat.
                  </li>
                </ul>

                <h2 className="pq-section-subtitle sub-subtitle">
                  Types of Laryngoscopy
                </h2>
                <p>
                  <strong>Rigid Telescopy:</strong> A simple procedure done in-office under local anesthesia. A high-resolution video and images are captured for analysis.
                </p>
                <p>
                  <strong>Fiberoptic Laryngoscopy:</strong> A flexible scope is inserted through the nose to provide a detailed view of the throat. This quick procedure helps diagnose various conditions with minimal discomfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Laryngoscopy;
