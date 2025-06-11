import React from 'react';

import Nose from '../image/nose.jpg';
import Nose1 from '../image/nose1.jpg';
import Nose3 from '../image/nose3.jpg';


const FunctionEndoscopic = () => {
  return (
    <>
      <section className="fess-section">
      <style>
        {`
        section {
    position: relative;
    padding: 15px 0px !important;
}`}
      </style>
        <div className="container">
        <div className="pq-section pq-style-1 text-center">
              
              <h2 className="pq-section-title">Functional Endoscopic Sinus Surgery (FESS)</h2>
            </div>
          
          <p className="cost">
            Cost: <span className="highlight">Rs. 60,000/-</span>
          </p>

          <div className="content">
            <p>
              Functional Endoscopic Sinus Surgery (FESS) is a minimally invasive procedure used to treat chronic sinus infections and nasal blockages.
            </p>
            <p>
              This procedure uses a thin, flexible tube called an endoscope, which is inserted through the nostrils to provide a clear view of the sinus passages.
            </p>
            <p>
              The goal of FESS is to remove obstructions, restore natural drainage, and improve airflow without external incisions.
            </p>
            <p>
              It is recommended for patients suffering from chronic sinusitis, nasal polyps, or sinus blockages that do not respond to medication.
            </p>
            <p>
              FESS is performed under either local or general anesthesia and typically offers a faster recovery with minimal discomfort compared to traditional sinus surgeries.
            </p>
          </div>
        </div>
      </section>
      
      <section className="left-right-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h6 className="pq-section-title">FESS Procedure</h6>
                <p className="pq-section-description">
                  The key steps involved in Functional Endoscopic Sinus Surgery include:
                </p>
                <ul className="pq-section-description">
                  <li>Insertion of the endoscope to visualize sinus passages</li>
                  <li>Removal of polyps, blockages, or infected tissue</li>
                  <li>Enlarging the sinus openings to improve drainage</li>
                  <li>Cleaning out mucus buildup and inflamed tissues</li>
                  <li>Application of a nasal dressing if required</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 pe-xl-5">
              <img
                src={Nose}
                className="img-fluid wow fadeInLeft"
                alt="fess-procedure"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="left-right-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pe-xl-5">
              <img
                src={Nose1}
                className="img-fluid wow fadeInLeft"
                alt="post-op-care"
              />
            </div>
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h6 className="pq-section-title">Post-Operative Care</h6>
                <p className="pq-section-description">
                  Recovery after FESS is relatively quick, but proper post-operative care is essential:
                </p>
                <ul className="pq-section-description">
                  <li>Avoid strenuous activities for at least a week</li>
                  <li>Use saline nasal sprays as recommended</li>
                  <li>Keep the nasal passages moist</li>
                  <li>Follow up with your ENT specialist for check-ups</li>
                  <li>Watch for any signs of infection or excessive bleeding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="left-right-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h6 className="pq-section-title">Anesthesia for FESS</h6>
                <ul className="pq-section-description">
                  <li><strong>Local Anesthesia:</strong> Numbing of nasal area with medication</li>
                  <li><strong>Monitored Anesthesia Care (MAC):</strong> Sedation with IV medications</li>
                  <li><strong>General Anesthesia:</strong> Full anesthesia for patient comfort</li>
                </ul>
                <p className="pq-section-description">
                  The choice of anesthesia depends on the patient's condition and surgeon's recommendation.
                </p>
              </div>
              <div className="pq-section pq-style-1 text-left mt-4 pb-0 mb-0">
                <h6 className="pq-section-title">Possible Complications</h6>
                <p className="pq-section-description">
                  Although FESS is generally safe, some potential complications include:
                </p>
                <ul className="pq-section-description">
                  <li>Bleeding</li>
                  <li>Infection</li>
                  <li>Scar tissue formation</li>
                  <li>Changes in smell sensation</li>
                  <li>Rare risks like eye or brain complications</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 pe-xl-5">
              <img
                src={Nose3}
                className="img-fluid wow fadeInLeft"
                alt="complications"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="fess-section">
        <div className="container">
          <h2 className="section-title">FESS with Insurance & Health Policy - MedFirst</h2>
          <div className="content">
            <p>
              MedFirst ENT Centre ensures a smooth experience for patients undergoing FESS, offering support with insurance claims and third-party administrators (TPA).
            </p>
            <p>
              Patients can check their health insurance policies for coverage options and choose an ENT clinic that is part of their insurance network.
            </p>
            <p>
              MedFirst streamlines the claims process, making it easier for patients to receive high-quality care without financial stress.
            </p>
            <p>
              For chronic sinus conditions that require surgical intervention, FESS is a highly effective treatment option that can significantly improve breathing and quality of life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FunctionEndoscopic;
