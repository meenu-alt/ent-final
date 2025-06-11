import React from 'react';

import ThroatImage1 from '../image/throat1.jpg';
import ThroatImage2 from '../image/throat2.jpg';
import ThroatImage3 from '../image/throat3.jpg';

export default function SpeechTherapy() {
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
              <span className="pq-section-sub-title">Speech Therapy</span>
              <h2 className="pq-section-title">Comprehensive Speech Therapy Solutions</h2>
            </div>
          </div>
        </div>
        <div className='content p-3'>
          <p>At <strong>ENT Delhi</strong>, we provide expert <strong>speech therapy</strong> services for individuals facing communication challenges. Our experienced speech therapists assess and tailor treatment plans to help patients improve their speech and language abilities.</p>
        </div>
        <div className="row">
          {[ThroatImage1, ThroatImage2, ThroatImage3].map((image, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-xl-4 pt-4">
              <div className="pq-service-box pq-style-1">
                <div className="pq-service-block">
                  <div className="pq-service-img">
                    <img src={image} className="img-fluid" alt="Speech Therapy" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='content p-3'>
          <h2>What is Speech Therapy?</h2>
          <p>Speech therapy focuses on diagnosing and treating speech and language disorders. Our team provides specialized care for individuals of all ages, ensuring effective communication skills.</p>
          
          <h2>Speech Therapy Services</h2>
          <p>We offer tailored speech therapy solutions for children, professionals, and elderly individuals to address various speech-related challenges.</p>
          
          <h2>Childhood Speech Disorders</h2>
          <p>Common issues such as delayed speech development, stammering, and articulation disorders are assessed and treated with customized therapy sessions.</p>
          
          <h2>Voice Therapy for Professionals</h2>
          <p>Professionals like teachers and lecturers often experience hoarseness due to vocal strain. Our therapy includes relaxation techniques and vocal strengthening exercises to prevent long-term damage.</p>
          
          <h2>Speech Rehabilitation for Elderly</h2>
          <p>Speech difficulties in older adults, such as vocal cord weakness or paralysis, are treated with targeted speech therapy and vocal exercises to restore communication abilities.</p>
        </div>
      </div>
    </div>
  );
}
