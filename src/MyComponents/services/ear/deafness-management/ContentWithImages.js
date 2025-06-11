import React from 'react';
import Audio1 from '../image/dm.jpeg';
import Audio2 from '../image/dm1.jpeg';
import Audio3 from '../image/dm2.jpeg';

export default function DeafnessManagement() {
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
              <span className="pq-section-sub-title">Deafness Management</span>
              <h2 className="pq-section-title">Comprehensive Hearing Care Solutions</h2>
            </div>
          </div>
        </div>
        <div className='content p-3'>
          <p><strong>Hearing loss</strong> can result from various ear-related conditions. At <strong>ENT Delhi</strong>, we provide advanced treatment options for individuals experiencing deafness and other hearing-related issues.</p>
        </div>
        <div className="row">
          {[
            { title: "Conductive Deafness", image: Audio1 },
            { title: "Cochlear Deafness", image: Audio2 },
            { title: "Neural Deafness", image: Audio3 }
          ].map((service, index) => (
            <div key={index} className="col-lg-6 col-md-6 col-xl-4 pt-4">
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
          <h6 className="mt-4"><strong>Conductive Deafness</strong></h6>
          <p>Issues affecting the <strong>External Ear</strong> (e.g., wax buildup) and <strong>Middle Ear</strong> (e.g., eardrum perforation, ossicular dysfunction) can lead to Conductive Deafness. Diagnosis involves <strong>audiometry tests</strong>, and treatment options include medication, wax removal, and surgical interventions such as eardrum repair and ossicle reconstruction.</p>

          <h6 className="mt-4"><strong>Cochlear Deafness</strong></h6>
          <p>Conditions affecting the <strong>Inner Ear (Cochlea)</strong> cause Sensory Deafness. If detected early, it may be treated with medication. For long-term or severe cases, <strong>hearing aids</strong> provide an effective solution.</p>

          <h6 className="mt-4"><strong>Neural Deafness</strong></h6>
          <p>Hearing loss resulting from conditions beyond the <strong>Inner Ear</strong> falls under Neural Deafness, a subset of Sensory-Neural Deafness. Comprehensive assessments help identify underlying causes, such as <strong>brain tumors</strong>. Based on the diagnosis, rehabilitation with <strong>hearing aids</strong> is recommended.</p>

          <h6 className="mt-4"><strong>Treatment for Deafness</strong></h6>
          <p>In partnership with <strong>Amplifon</strong>, a global leader in hearing care solutions, our center offers <strong>cutting-edge hearing aids</strong> and rehabilitation services, ensuring world-class treatment for hearing impairment.</p>
        </div>
      </div>
    </div>
  );
}
