import React from 'react';

import Nose from '../image/nose.jpg';
import Nose1 from '../image/nose1.jpg';
import Nose3 from '../image/nose3.jpg';

export default function Endoscopic() {
  return (
    <div className="service pt-4">
      <style>
        {`
        section {
    position: relative;
    padding: 15px 0px !important;
}`}
      </style>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="pq-section pq-style-1 text-center">
              <span className="pq-section-sub-title">ENT Endoscopy Clinic</span>
              <h2 className="pq-section-title">Comprehensive Endoscopic Evaluation & Diagnosis</h2>
            </div>
          </div>
        </div>
        <div className='content p-3'>
          <p>At our <strong>ENT Endoscopy Clinic</strong>, we provide thorough <strong>endoscopic assessments</strong> for the nose, throat, and ears. Utilizing cutting-edge technology, we ensure precise diagnostics with dedicated software that enables real-time imaging and instant report generation.</p>
          <p>Our clinic specializes in <strong>nasal endoscopy</strong>, <strong>laryngoscopy</strong>, and <strong>ear examination under a microscope (EUM)</strong>. These advanced techniques allow for detailed visualization, aiding in accurate diagnosis and effective treatment planning.</p>
        </div>
        <div className="row">
          {[Nose, Nose1, Nose3].map((image, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-xl-4 pt-4">
              <div className="pq-service-box pq-style-1">
                <div className="pq-service-block">
                  <div className="pq-service-img">
                    <img src={image} className="img-fluid" alt="Endoscopy" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='content p-3'>
          <h2>Instant Endoscopy Reports</h2>
          <p>Our clinic ensures that <strong>endoscopic images and reports</strong> are provided to patients immediately after the procedure, facilitating seamless diagnosis and follow-up care.</p>
          <p><strong>Nasal Endoscopy:</strong> Enables detailed visualization of the nasal passages and sinuses, aiding in diagnosing conditions like polyps or chronic sinusitis.</p>
          <p><strong>Laryngoscopy:</strong> Helps assess the vocal cords and throat, essential for evaluating hoarseness, throat discomfort, or suspected growths.</p>
          <p><strong>Microscopic Ear Examination:</strong> Allows in-depth analysis of the ear canal and eardrum, improving accuracy in diagnosing infections and structural abnormalities.</p>
        </div>
      </div>
    </div>
  );
}
