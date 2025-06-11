import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import image1 from "./images/New-Project-1.webp";

const Microlaryngoscopy = () => {
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
                <h6 className="pq-section-title text-danger">Microlaryngoscopy</h6>
                <p className="text-danger">
                  A Precision Procedure for Vocal Cord Treatment
                </p>
                <h2 className="pq-section-title">Microlaryngoscopy at ENT Delhi</h2>
                <p>
                  Microlaryngoscopy is a specialized surgical procedure used to examine and treat vocal fold abnormalities. A laryngoscope is inserted through the mouth to access the vocal cords, allowing for precise treatment without external incisions.
                </p>
                <h2 className="pq-section-subtitle sub-subtitle">
                  How is the Procedure Performed?
                </h2>
                <p>
                  A microscope is used to obtain a detailed view of the vocal folds. This technique is commonly used to remove lesions such as cysts, polyps, nodules, papillomas, or even early-stage cancerous growths with high precision.
                </p>
              </div>
            </div>

            
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={image1}
                className="img-fluid wow fadeInRight"
                alt="microlaryngoscopy-procedure"
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
                alt="microlaryngoscopy-procedure"
              />
            </div>

            
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h2 className="pq-section-subtitle sub-subtitle">
                  Why is Microlaryngoscopy Needed?
                </h2>
                <ul className="key-points">
                  <li>
                    Urgent intervention is necessary for cases of laryngeal trauma, fractures, airway obstruction, or vocal cord dysfunction.
                  </li>
                  <li>
                    Persistent hoarseness lasting more than two weeks may indicate a risk of laryngeal malignancy and should be examined immediately.
                  </li>
                </ul>

                <h2 className="pq-section-subtitle sub-subtitle">
                  Benefits and Conditions Treated
                </h2>
                <p>
                  <strong>Vocal Cord Disorders:</strong> Helps in diagnosing and treating conditions affecting the vocal folds.
                </p>
                <p>
                  <strong>Polyp and Nodule Removal:</strong> Eliminates growths on the vocal cords that may affect voice quality.
                </p>
                <p>
                  <strong>Voice Restoration:</strong> If possible, additional corrective procedures are performed to enhance voice clarity and function.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Microlaryngoscopy;
