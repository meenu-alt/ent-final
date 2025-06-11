import React from 'react';

import Audio1 from '../image/audio1.1.jpeg';
import Audio2 from '../image/audio2.jpeg';
import Audio3 from '../image/audio3.jpeg';

export default function ModernHearingAids() {
  const services = [
    { title: "Advanced Hearing Aids", image: Audio1 },
    { title: "Personalized Fittings", image: Audio2 },
    { title: "Expert Audiology Support", image: Audio3 }
  ];

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
              <span className="pq-section-sub-title">Modern Hearing Aids</span>
              <h2 className="pq-section-title">Futuristic Hearing Solutions</h2>
            </div>
          </div>
        </div>
        <div className='content p-3'>
          <p>At <strong>MedFirst ENT Centre</strong>, we partner with <strong>Amplifon</strong>, the world’s leading hearing care provider, to deliver cutting-edge hearing aid solutions. Our advanced hearing aids are equipped with the latest technology to provide exceptional benefits to individuals with hearing impairments.</p>
          <p>Hearing aid selection and fitting require professional expertise. Our approach combines the knowledge of experienced <strong>ENT specialists</strong>, who diagnose hearing loss, with skilled <strong>Audiologists</strong>, who specialize in device selection and fitting for optimal benefit.</p>
          <p>It is essential to <strong>never purchase a hearing aid from a regular shop</strong>. These are high-end medical devices that demand expert guidance for proper selection and configuration.</p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-xl-4 pt-4">
              <div className="pq-service-box pq-style-1">
                <div className="pq-service-block">
                  <div className="pq-service-img">
                    <img src={service.image} className="img-fluid" alt={service.title} />
                  </div>
                  <div className="pq-service-box-info">
                    <div className="pq-info-text">
                      <span className="pq-service-sub-title">{service.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='content p-3'>
          <h2>Why Choose Our Hearing Aids?</h2>
          <p>We offer the most <strong>advanced and sophisticated hearing aids</strong> available globally. Our dedicated team of Audiologists ensures that every patient receives the best possible solution for their hearing needs.</p>
          <p>Our hearing aids are designed with cutting-edge features to enhance sound clarity, reduce background noise, and improve speech recognition, providing a seamless listening experience.</p>
          <p>We take pride in our long list of <strong>satisfied hearing aid users</strong>, who have regained confidence in their ability to hear and communicate effectively.</p>
          
          <h2>Personalized Hearing Aid Fitting</h2>
          <p>Each hearing aid is custom-fitted based on an individual’s hearing profile. Our Audiologists perform comprehensive assessments to ensure the perfect fit and maximum comfort.</p>
          
          <h2>Comprehensive Audiology Services</h2>
          <p>Our services include detailed hearing evaluations, professional fitting, and continuous support to ensure that every patient receives the best possible hearing care.</p>
        </div>
      </div>
    </div>
  );
}
