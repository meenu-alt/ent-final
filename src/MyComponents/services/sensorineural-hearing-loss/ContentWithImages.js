import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import SensorineuralImage from "./images/myringoplasty.jpeg";

const SensorineuralDeafness = () => {
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
                <span className="pq-section-sub-title">Sensorineural Deafness</span>
                <h2 className="pq-section-title">Understanding Sensorineural Hearing Loss</h2>
                <p className="pq-section-description">
                  Sensorineural hearing loss (SNHL) is one of the most common types of hearing loss, affecting the inner ear (cochlea) or auditory nerve. Unlike conductive hearing loss, which affects sound transmission through the outer or middle ear, SNHL results from damage to sensory cells or neural pathways, often leading to permanent hearing impairment.
                </p>
              </div>
            </div>
            <div className="col-xl-6 pe-xl-5">
              <img src={SensorineuralImage} className="img-fluid wow fadeInLeft" alt="Sensorineural Deafness" />
            </div>
          </div>
        </div>
      </section>

      <section className="left-right-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pe-xl-5">
              <img src={SensorineuralImage} className="img-fluid wow fadeInLeft" alt="Causes of SNHL" />
            </div>
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <span className="pq-section-sub-title">Causes of SNHL</span>
                <h2 className="pq-section-title">Common Causes of Sensorineural Hearing Loss</h2>
                <ul className="pq-section-description">
                  <li><strong>Congenital:</strong> Some infants are born with hearing loss due to genetic factors, maternal infections, or complications during pregnancy.</li>
                  <li><strong>Trauma:</strong> Head injuries and ear trauma can lead to sensorineural hearing loss, often accompanied by inner ear damage.</li>
                  <li><strong>Infections:</strong> Viral and bacterial infections, such as meningitis or chronic ear infections, can damage the inner ear and auditory nerve.</li>
                  <li><strong>Sudden SNHL:</strong> Unexplained, sudden hearing loss in one ear can occur due to vascular issues or viral infections.</li>
                  <li><strong>Noise Exposure:</strong> Prolonged exposure to loud sounds, such as music concerts or industrial noise, can cause irreversible hearing loss.</li>
                  <li><strong>Medications:</strong> Certain drugs, including antibiotics, chemotherapy agents, and diuretics, can have ototoxic effects leading to hearing damage.</li>
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
                <span className="pq-section-sub-title">Diagnosis & Evaluation</span>
                <h2 className="pq-section-title">How is SNHL Diagnosed?</h2>
                <p className="pq-section-description">
                  A comprehensive evaluation by an ENT specialist is essential for diagnosing sensorineural hearing loss. The process includes:
                </p>
                <ul>
                  <li><strong>ENT Examination:</strong> A detailed history and physical exam to assess hearing loss severity.</li>
                  <li><strong>Audiometric Tests:</strong> Pure tone audiometry, speech recognition tests, and tympanometry to determine hearing levels.</li>
                  <li><strong>Imaging Studies:</strong> MRI or CT scans may be required in cases of sudden or unexplained hearing loss.</li>
                  <li><strong>Additional Investigations:</strong> Blood tests and cardiac evaluations may be conducted when needed.</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 pe-xl-5">
              <img src={SensorineuralImage} className="img-fluid wow fadeInLeft" alt="Diagnosis of SNHL" />
            </div>
          </div>
        </div>
      </section>

      <section className="left-right-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pe-xl-5">
              <img src={SensorineuralImage} className="img-fluid wow fadeInLeft" alt="Hearing Rehabilitation" />
            </div>
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <span className="pq-section-sub-title">Hearing Rehabilitation</span>
                <h2 className="pq-section-title">Managing Sensorineural Hearing Loss</h2>
                <p className="pq-section-description">
                  Currently, the most effective treatment for SNHL is the use of advanced hearing aids or cochlear implants. Options include:
                </p>
                <ul>
                  <li><strong>Hearing Aids:</strong> Various types of digital hearing aids tailored for different levels of hearing loss.</li>
                  <li><strong>Cochlear Implants:</strong> Suitable for severe or profound hearing loss, bypassing damaged cochlear cells to stimulate the auditory nerve.</li>
                  <li><strong>Assistive Listening Devices:</strong> FM systems, amplified phones, and other devices that enhance hearing in specific environments.</li>
                  <li><strong>Speech & Auditory Therapy:</strong> Rehabilitation programs to improve speech recognition and communication skills.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SensorineuralDeafness;
