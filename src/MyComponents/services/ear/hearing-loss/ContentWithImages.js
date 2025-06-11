import React from 'react';

import Audio1 from '../image/audio1.jpeg';
import Audio2 from '../image/ear4.jpg';
import Audio3 from '../image/ear5.jpg';

const services = [
  { title: "Sound Exposure", image: Audio1 },
  { title: "Avoid Loud Traffic", image: Audio2 },
  { title: "Loud Music", image: Audio3 }
];

export default function HearingLossClinic() {
  return (
    <div className="service pt-4"
    >
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
              <span className="pq-section-sub-title">Hearing Loss Clinic</span>
              <h2 className="pq-section-title">Comprehensive Hearing Care & Protection</h2>
            </div>
          </div>
        </div>
        <div className='content p-3'>
          <p>At our <strong>Hearing Loss Clinic</strong>, we specialize in diagnosing and treating various forms of <strong>hearing impairment</strong> across all age groups. Whether due to frequent upper respiratory infections in children, <strong>eardrum perforations</strong>, or prolonged exposure to environmental noise, we provide expert care and tailored treatment plans to address each condition.</p>
          <p>Age-related hearing decline is common and occurs due to gradual damage to the hair cells in the <strong>cochlea</strong>. Our clinic is equipped with a state-of-the-art, <strong>double-chamber soundproof audiometry testing facility</strong>, managed by highly experienced audiologists, ensuring accurate diagnosis and effective management of hearing issues.</p>
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
          <h2>Preventing Hearing Loss</h2>
          <p>Protecting your hearing is crucial in preventing long-term damage. Simple precautions such as <strong>avoiding prolonged exposure to loud environments</strong> can significantly reduce the risk of hearing impairment.</p>
          <p><strong>Sound Exposure:</strong> Limit exposure to loud machinery and industrial noise by using protective gear like earplugs or noise-canceling headphones.</p>
          <p><strong>Avoid Loud Traffic:</strong> When in high-traffic areas, minimize exposure to excessive honking and sirens by keeping car windows closed.</p>
          <p><strong>Loud Music:</strong> Keep the volume of personal music devices low and reduce the use of in-ear headphones for prolonged periods to prevent hearing strain.</p>
        </div>
      </div>
    </div>
  );
}
