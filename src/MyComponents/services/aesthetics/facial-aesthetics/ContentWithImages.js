import React from 'react';
import serviceImage from '../../images/services/3.jpg';

export default function FacialAesthetics() {
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
              <span className="pq-section-sub-title">Facial Aesthetics</span>
              <h2 className="pq-section-title">Enhancing Facial Aesthetics with Precision</h2>
            </div>
          </div>
        </div>
        <div className='content p-3'>
          <p>At <strong>ENT Delhi</strong>, we provide specialized <strong>facial aesthetics</strong> treatments tailored to each patient’s unique needs. Using cutting-edge imaging technology, we assess facial structures in detail, allowing us to create precise and customized treatment plans. Patients receive <strong>comprehensive reports</strong> instantly, ensuring transparency and informed decision-making.</p>
        </div>
        <div className="row">
          {["Dermal Filler Injections", "Botox Treatments", "Skin Rejuvenation Therapies"].map((service, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-xl-4 pt-4">
              <div className="pq-service-box pq-style-1">
                <div className="pq-service-block">
                  <div className="pq-service-img">
                    <img src={serviceImage} className="img-fluid" alt={service} />
                  </div>
                  <div className="pq-service-box-info">
                    <div className="pq-info-text">
                      <span className="pq-service-sub-title">{service}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='content p-3'>
          <h2>What is Facial Aesthetics?</h2>
          <p>Facial aesthetics involves non-surgical treatments designed to enhance facial harmony, reduce signs of aging, and improve skin quality. Our clinic offers advanced solutions for facial rejuvenation, ensuring natural and youthful results.</p>
          
          <h2>Our Facial Aesthetic Services</h2>
          <p>We provide a range of aesthetic treatments, incorporating state-of-the-art technology to deliver personalized care for every patient.</p>
          
          <h2>Dermal Filler Injections</h2>
          <p>Dermal fillers restore lost volume, smooth out wrinkles, and enhance facial contours. These treatments provide immediate results with minimal downtime.</p>
          
          <h2>Botox Treatments</h2>
          <p>Botox injections help reduce fine lines and wrinkles by relaxing facial muscles. This procedure effectively softens expression lines, resulting in a refreshed appearance.</p>
          
          <h2>Skin Rejuvenation Therapies</h2>
          <p>Our skin rejuvenation therapies promote collagen production and improve skin texture. These treatments enhance skin elasticity and overall complexion, giving a youthful glow.</p>
        </div>
      </div>
    </div>
  );
}
