import React from 'react';

import SleepApnoeaImage1 from './image/snoring.jpeg';
import SleepApnoeaImage2 from './image/snoring2.jpeg';

export default function SnoringSleepApneaSurgery() {
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
              <span className="pq-section-sub-title">Clinic & Surgeons for Obstructive Sleep Apnoea Syndrome</span>
              <h2 className="pq-section-title">Get Quality Treatment for Sleep Apnoea</h2>
            </div>
          </div>
        </div>
        <div className='content p-3'>
          <p><strong>Snoring and Sleep Surgery Cost:</strong> Rs. 70,000/-</p>
          <p><strong>Obstructive Sleep Apnoea Syndrome (OSAS)</strong> is a serious condition where patients stop breathing at night due to airway blockage, often caused by snoring. This cessation of breathing (apnoea) leads to a drop in blood oxygen levels, which can reach dangerous levels.</p>
        </div>
        <div className="row">
          {[ 
            { title: "Sleep Apnoea Treatment", image: SleepApnoeaImage1 },
            { title: "Snoring Surgery", image: SleepApnoeaImage2 },
          ].map((service, index) => (
            <div key={index} className="col-lg-6 col-md-6 col-xl-4 pt-4">
              <div className="pq-service-box pq-style-1">
                <div className="pq-service-block">
                  <div className="pq-service-img">
                    <img src={SleepApnoeaImage1} className="img-fluid" alt={service.title} />
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
          <p>Beyond lifestyle changes such as <strong>weight loss, regular exercise, avoiding alcohol and smoking</strong>, there are various surgical options available to prevent snoring and treat OSAS effectively.</p>
          <p>Some of the most common surgical procedures for snoring and sleep apnoea include:</p>
          <ul>
            <li><strong>Uvulopalatopharyngoplasty (UPPP)</strong> – also known as the ‘3P’ procedure.</li>
            <li><strong>Septoplasty</strong> – correction of nasal septal deviation.</li>
            <li><strong>FESS</strong> – removal of nasal polyps to improve airflow.</li>
            <li><strong>Simple Tonsillectomy</strong> – removing enlarged tonsils that block breathing.</li>
            <li><strong>Lingual Tonsil Reduction</strong> – reducing a bulky base of the tongue.</li>
            <li><strong>Hyoid Suspension</strong> – repositioning the hyoid bone to maintain an open airway.</li>
            <li><strong>Mandibular Advancement</strong> – adjusting the lower jaw to enhance airflow.</li>
          </ul>
          <p>Our clinic provides <strong>personalized treatment plans</strong> using the latest medical advancements. Book an appointment today to receive expert guidance and the best care for snoring and sleep disorders.</p>
        </div>
      </div>
    </div>
  );
}
