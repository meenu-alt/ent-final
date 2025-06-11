import React from 'react';

import Audio1 from '../image/audio1.1.jpeg';
import Audio2 from '../image/audio2.jpeg';
import Audio3 from '../image/audio3.jpeg';

export default function AdvancedVertigoClinic() {
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
              <span className="pq-section-sub-title">Advanced Vertigo Clinic</span>
              <h2 className="pq-section-title">Specialized Testing & Rehabilitation</h2>
            </div>
          </div>
        </div>
        <div className='content p-3'>
          <p>At our <strong>Advanced Vertigo Clinic</strong>, we are committed to diagnosing and managing <strong>giddiness, vertigo, dizziness, and balance disorders</strong> with advanced medical expertise. Our clinic provides <strong>comprehensive diagnostic tests</strong> to determine the underlying cause of these conditions. Every patient undergoes a series of evaluations, and a <strong>detailed assessment report</strong> is provided to ensure an accurate diagnosis and effective treatment plan.</p>
        </div>
        <div className="row">
          {[ 
            { title: "", image: Audio1 },
            { title: "", image: Audio2 },
            { title: "", image: Audio3 },
          ].map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-xl-4 pt-4">
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
          <p>Our clinic uses <strong>state-of-the-art diagnostic tools</strong> to analyze and address vertigo symptoms effectively. Patients receive a <strong>thorough medical evaluation</strong>, which includes balance assessments, neurological tests, and inner ear examinations. The results are compiled into a <strong>detailed report</strong>, guiding the specialists in crafting a <strong>personalized treatment plan</strong> for each patient.</p>
          <p>To ensure optimal recovery, we offer <strong>one-on-one support</strong> from <strong>leading neurologists and vertigo specialists</strong>, providing expert insights into managing and overcoming dizziness-related disorders. Our <strong>rehabilitation program</strong> includes targeted exercises designed to restore balance, improve coordination, and prevent recurrent episodes.</p>
          <p>Additionally, our <strong>mobile application</strong> enables patients to <strong>track their progress, access customized exercise plans, and receive real-time guidance</strong> from specialists. This digital tool enhances patient engagement and ensures consistent monitoring of their recovery journey.</p>
          <p>At <strong>Advanced Vertigo Clinic</strong>, we combine <strong>medical expertise with modern technology</strong> to offer <strong>effective and lasting solutions</strong> for vertigo and dizziness.</p>
        </div>
      </div>
    </div>
  );
}
