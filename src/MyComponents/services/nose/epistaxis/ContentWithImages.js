import React from 'react';

import Nose from '../image/nose.jpg';
import Nose1 from '../image/nose1.jpg';
import Nose3 from '../image/nose3.jpg';

export default function Epistaxis() {
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
              <span className="pq-section-sub-title">Epistaxis & Nosebleeds</span>
              <h2 className="pq-section-title">Understanding and Managing Nosebleeds</h2>
            </div>
          </div>
        </div>
        <div className='content p-3'>
          <p>Our <strong>ENT Clinic</strong> specializes in diagnosing and treating <strong>epistaxis (nosebleeds)</strong>, a common condition that can affect individuals of all ages. We provide comprehensive evaluations to identify the underlying causes of nosebleeds and offer effective management strategies. Each patient receives a <strong>detailed diagnostic report</strong> to ensure accurate diagnosis and tailored treatment.</p>
        </div>
        <div className="row">
          {[Nose, Nose1, Nose3].map((image, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-xl-4 pt-4">
              <div className="pq-service-box pq-style-1">
                <div className="pq-service-block">
                  <div className="pq-service-img">
                    <img src={image} className="img-fluid" alt={`Epistaxis Image ${index + 1}`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='content p-3'>
          <h2>What Is Epistaxis?</h2>
          <p>Epistaxis, commonly known as a nosebleed, refers to bleeding from the blood vessels of the nose. It is a frequent complaint, particularly in emergency medicine and ENT (ear, nose, and throat) care. Nosebleeds are more common in children (ages 2–10) and older adults (ages 50–80).</p>
          
          <h2>What Causes Epistaxis?</h2>
          <p>Nosebleeds can be caused by a variety of factors, including local trauma, systemic conditions, and certain medications. Understanding the root cause is essential for effective treatment and prevention.</p>
          
          <h2>Local Causes</h2>
          <p>Local causes of epistaxis include trauma from nose-picking, foreign bodies in the nose, anatomical irregularities like a deviated septum, facial injuries, excessive use of nasal sprays, inflammatory conditions, and, in rare cases, intranasal tumors.</p>
          
          <h2>Systemic Causes</h2>
          <p>Systemic conditions that may increase the risk of nosebleeds include high blood pressure (hypertension), vascular malformations, cardiovascular diseases, and bleeding disorders such as von Willebrand disease and hemophilia A and B.</p>
          
          <h2>Medications</h2>
          <p>Certain medications, particularly blood thinners, can predispose individuals to epistaxis by interfering with the blood's ability to clot. If you experience frequent nosebleeds, it is important to discuss your medications with your healthcare provider.</p>
        </div>
      </div>
    </div>
  );
}
