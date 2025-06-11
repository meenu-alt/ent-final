import React from 'react';

import Audio1 from '../image/audio1.jpeg';
import Audio2 from '../image/ear4.jpg';


const Otitis = () => {
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
                <h6 className="pq-section-title">Otitis Externa</h6>
                <p className="pq-section-description">
                  Otitis externa, commonly known as swimmer’s ear, is an inflammatory condition affecting the ear canal. 
                  Symptoms include ear pain, swelling, and in some cases, temporary hearing loss. A key indicator is pain when touching the outer ear.
                </p>
                <ul className="pq-section-description">
                  <li>Can be acute (lasting less than six weeks) or chronic (persisting for more than three months).</li>
                  <li>Acute cases are primarily caused by bacterial infections.</li>
                  <li>Chronic cases often result from allergies or autoimmune disorders.</li>
                  <li>Common risk factors include swimming, ear cleaning injuries, use of hearing aids or earplugs, and skin conditions like dermatitis or psoriasis.</li>
                  <li>Individuals with diabetes are at risk for a severe form called malignant otitis externa, which can lead to extensive tissue damage.</li>
                </ul>
              </div>
            </div>

            <div className="col-xl-6 pe-xl-5">
              <img
                src={Audio2}
                className="img-fluid wow fadeInLeft"
                alt="Otitis Externa"
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
                src={Audio1}
                className="img-fluid wow fadeInLeft"
                alt="Treatment"
              />
            </div>
            <div className="col-xl-6 px-xl-4 mt-2 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h6 className="pq-section-title">Diagnosis & Treatment</h6>
                <p className="pq-section-description">
                  Diagnosis is primarily based on physical examination and symptoms. In severe or persistent cases, a culture test may be conducted.
                </p>
                <p className="pq-section-description">
                  Treatment involves pain management and targeting the underlying cause.
                </p>
                <p className="pq-section-description">
                  Malignant otitis externa, which is more common in diabetic patients, requires extended antibiotic treatment and strict blood sugar control.
                </p>
              </div>

              <div className="pq-section pq-style-1 text-left mt-4">
                <h6 className="pq-section-title">Precautionary Measures</h6>
                <ul className="pq-section-description">
                  <li>Keep the ears dry to prevent infections.</li>
                  <li>Avoid inserting objects into the ears, including cotton swabs.</li>
                  <li>Manage underlying skin conditions like psoriasis and dermatitis.</li>
                  <li>Seek medical attention if experiencing severe pain, dizziness, or prolonged discomfort.</li>
                  <li>Individuals with diabetes should monitor their blood sugar levels to reduce the risk of complications.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Otitis;  