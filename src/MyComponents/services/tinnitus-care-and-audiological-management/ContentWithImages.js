import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import TinnitusImage from "./images/myringoplasty.jpeg";

const TinnitusManagement = () => {
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
                <span className="pq-section-sub-title">Tinnitus & Audiological Management</span>
                <h2 className="pq-section-title">Understanding Tinnitus</h2>
                <p className="pq-section-description">
                  Tinnitus is the sensation of hearing sounds in the absence of external stimuli. 
                  It arises due to activity within the cochlea and auditory pathways. Our expert 
                  audiologists and otolaryngologists provide comprehensive assessments and 
                  personalized treatments for effective tinnitus management.
                </p>
              </div>
            </div>
            <div className="col-xl-6 pe-xl-5">
              <img src={TinnitusImage} className="img-fluid wow fadeInLeft" alt="Tinnitus Management" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="left-right-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pe-xl-5">
              <img src={TinnitusImage} className="img-fluid wow fadeInLeft" alt="Evaluation & Management" />
            </div>
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <span className="pq-section-sub-title">Tinnitus - Evaluation & Management</span>
                <h2 className="pq-section-title">Comprehensive Diagnostic Approaches</h2>
                <ul className="pq-section-description">
                  <li><strong>Audiological Evaluation:</strong> Examining hearing function and tinnitus characteristics.</li>
                  <li><strong>Psychoacoustical Evaluation:</strong> Pitch and loudness matching techniques.</li>
                  <li><strong>Medical Assessment:</strong> Identifying underlying causes and treatment strategies.</li>
                </ul>
                <h2 className="pq-section-title">Management Strategies</h2>
                <ul>
                  <li>Tinnitus Retraining Therapy (TRT)</li>
                  <li>Masking and Sound Therapy</li>
                  <li>Medication & Psychological Treatments</li>
                  <li>Biofeedback Training & Electrical Stimulation</li>
                  <li>Surgical Interventions (Microvascular Decompression, Cranial Nerve Surgery)</li>
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
                <span className="pq-section-sub-title">Tinnitus Retraining Therapy (TRT)</span>
                <h2 className="pq-section-title">Neurophysiological Approach</h2>
                <p className="pq-section-description">
                  TRT is based on the neurophysiological model, where exposure to controlled sounds
                  helps rewire auditory pathways, reducing tinnitus perception over time.
                </p>
                <h6>Key Components of TRT</h6>
                <ul>
                  <li>Understanding tinnitus and its neural mechanisms.</li>
                  <li>Sound therapy to facilitate habituation.</li>
                  <li>Counseling to reduce emotional impact and stress.</li>
                  <li>Use of sound generators or hearing aids when needed.</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 pe-xl-5">
              <img src={TinnitusImage} className="img-fluid wow fadeInLeft" alt="TRT Therapy" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="left-right-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pe-xl-5">
              <img src={TinnitusImage} className="img-fluid wow fadeInLeft" alt="Classifying Tinnitus" />
            </div>
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <span className="pq-section-sub-title">Classifying Tinnitus</span>
                <h2 className="pq-section-title">Understanding Different Types</h2>
                <ul className="pq-section-description">
                  <li><strong>Category 0:</strong> Mild tinnitus, requiring minimal intervention.</li>
                  <li><strong>Category 1:</strong> Severe tinnitus without hyperacusis, requiring detailed counseling.</li>
                  <li><strong>Category 2:</strong> Severe tinnitus with hearing loss, managed with hearing aids and sound therapy.</li>
                  <li><strong>Category 3:</strong> High-severity tinnitus with hyperacusis, needing extensive sound desensitization.</li>
                  <li><strong>Category 4:</strong> Severe hyperacusis with tinnitus as a secondary symptom, requiring specialized therapy.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TinnitusManagement;
