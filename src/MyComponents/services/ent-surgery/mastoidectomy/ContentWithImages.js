import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import about1 from "./images/myringoplasty.jpeg";

const Mastoidectomy = () => {
  return (
    <>
      <section className="surgery-section">
      <style>
        {`
        section {
    position: relative;
    padding: 15px 0px !important;
}`}
      </style>
        <div className="container">
          <div className="pq-section pq-style-1 text-center">
            <h2 className="pq-section-title">Mastoidectomy Surgery</h2>
          </div>
          
          <p className="cost">
            Cost: <span className="highlight">Rs. 50,000/-</span>
          </p>

          <div className="content">
            <p>
              Mastoidectomy is a surgical procedure performed to remove infected or damaged tissue from the mastoid bone, which is located behind the ear.
            </p>
            <p>
              This procedure is essential for treating chronic ear infections, cholesteatoma, and other complications arising from middle ear conditions.
            </p>
            <p>
              It may also be necessary for removing tumors or addressing cerebrospinal fluid (CSF) leaks from the ear.
            </p>
          </div>
        </div>
      </section>

      <section className="left-right-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h6 className="pq-section-title">Types of Mastoidectomy</h6>
                <ul className="pq-section-description">
                  <li><strong>Simple Mastoidectomy:</strong> Removal of infected tissue while preserving ear structures.</li>
                  <li><strong>Modified Radical Mastoidectomy:</strong> Extensive removal of infected tissue, including some middle ear structures.</li>
                  <li><strong>Radical Mastoidectomy:</strong> Complete removal of the mastoid air cells, middle ear structures, and eardrum, often for severe infections or cancers.</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 pe-xl-5">
              <img
                src={about1}
                className="img-fluid wow fadeInLeft"
                alt="mastoidectomy-types"
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
                src={about1}
                className="img-fluid wow fadeInLeft"
                alt="surgical-procedure"
              />
            </div>
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h6 className="pq-section-title">Surgical Procedure</h6>
                <p className="pq-section-description">
                  The surgery involves making an incision behind the ear (post-aural) or above the ear (endaural) to access the mastoid bone.
                </p>
                <ul className="pq-section-description">
                  <li>Removal of infected or damaged tissue</li>
                  <li>Cleaning and possible reconstruction of ear structures</li>
                  <li>Closure of the incision with sutures</li>
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
                <h6 className="pq-section-title">Post-Operative Care</h6>
                <ul className="pq-section-description">
                  <li>Avoid water exposure to the surgical area</li>
                  <li>Use prescribed medications and ear drops</li>
                  <li>Attend follow-up appointments to monitor healing</li>
                  <li>Watch for any signs of infection or complications</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 pe-xl-5">
              <img
                src={about1}
                className="img-fluid wow fadeInLeft"
                alt="post-op-care"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="surgery-section">
        <div className="container">
          <h2 className="section-title">Mastoidectomy with Insurance & Health Policy - MedFirst</h2>
          <div className="content">
            <p>
              MedFirst ENT Centre provides assistance with insurance claims and third-party administrators (TPA) for mastoidectomy surgery.
            </p>
            <p>
              Patients can check their health insurance policies for coverage and choose a clinic within their network.
            </p>
            <p>
              MedFirst ensures a smooth claims process, reducing financial stress for patients needing surgical intervention.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mastoidectomy;
