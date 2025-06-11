import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import Image1 from '../image/throat1.jpg';
import Image2 from '../image/throat2.jpg';
import Image3 from '../image/throat3.jpg';
import Image4 from '../image/throat7.jpg';

const VocalCordSurgery = () => {
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
                <h6 className="pq-section-title text-danger">Vocal Cord Surgery</h6>
                <p className="text-danger">Understanding the Need for Vocal Cord Surgery</p>
                <h2 className="pq-section-title">What is Vocal Cord Surgery?</h2>
                <p>
                  Vocal cord surgery is a medical procedure performed to address issues such as growths, polyps, tumors, or other masses on the vocal cords. These growths may need to be removed for biopsy or to restore normal vocal cord function. Children and adults experiencing a hoarse or raspy voice may require this surgery.
                </p>
                <h2 className="pq-section-subtitle sub-subtitle">When is Vocal Cord Surgery Necessary?</h2>
                <p>
                  Surgery is also recommended when the vocal cords are scarred, paralyzed, or otherwise abnormal, interfering with their ability to open or close properly. This can affect normal speech, breathing, and overall vocal function.
                </p>
              </div>
            </div>

            
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={Image1}
                className="img-fluid wow fadeInRight"
                alt="vocal-cord-surgery"
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
                src={Image2}
                className="img-fluid wow fadeInRight"
                alt="vocal-cord-surgery"
              />
            </div>

            
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h2 className="pq-section-subtitle sub-subtitle">Types of Vocal Cord Surgery</h2>
                <ul className="key-points">
                  <li><strong>Open Surgical Approach:</strong> Involves making an incision in the neck to access the vocal cords directly.</li>
                  <li><strong>Endoscopic Approach:</strong> A minimally invasive procedure where a tube is inserted through the mouth and throat to reach the vocal cords.</li>
                </ul>
                <h2 className="pq-section-subtitle sub-subtitle">What to Expect During Surgery</h2>
                <p>
                  Both procedures are performed under general anesthesia, ensuring the patient is fully asleep throughout the surgery. The choice of approach depends on the patient's condition and the surgeon's recommendation.
                </p>
                <p>
                  Recovery focuses on minimizing damage to the larynx during surgery and reducing post-operative inflammation. Your surgeon will guide you on the best approach to ensure a smooth recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fess-section">
        <div className="container pq-section pq-style-1 text-left">
          <h2 className="section-title main-title">
            The Importance of Proper Diagnosis and Treatment
          </h2>
          <div className="content">
            <p>
              Consulting an ENT specialist is crucial for an accurate diagnosis and tailored treatment plan. While some conditions may resolve with medication, others may require surgical intervention to restore vocal cord function.
            </p>
            <p>
              Early diagnosis and treatment can prevent complications and improve outcomes. Patients are advised not to self-diagnose, as symptoms like hoarseness may stem from various causes, including allergies or inflammation.
            </p>
            <p>
              <strong>Click Here For An Appointment</strong> to discuss your symptoms and explore the best treatment options for your condition.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default VocalCordSurgery;