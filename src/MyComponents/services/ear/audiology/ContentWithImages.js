import React from 'react';
import Audio1 from '../image/dm.jpeg';
import Audio2 from '../image/dm1.jpeg';
import Audio3 from '../image/dm2.jpeg';

export default function Audiology() {
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
              <span className="pq-section-sub-title">Audiology & Hearing Tests</span>
              <h2 className="pq-section-title">Comprehensive Hearing Assessments</h2>
            </div>
          </div>
        </div>
        <div className='content p-3'>
          <p>Our <strong>Audiology Clinic</strong> specializes in evaluating and diagnosing <strong>hearing and balance disorders</strong>. We offer a range of advanced diagnostic tests to assess hearing capabilities and detect any abnormalities. Each patient undergoes a thorough evaluation, followed by a <strong>detailed diagnostic report</strong> to ensure precise diagnosis and effective management.</p>
        </div>
        <div className="row">
          {[ 
            { title: "", image: Audio3 },
            { title: "", image: Audio2 },
            { title: "", image: Audio1 }
            
          ].map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 pt-4">
              <div className="pq-service-box pq-style-1">
                <div className="pq-service-block">
                  <div className="pq-service-img">
                    <img src={service.image} className="img-fluid" alt={service.title} />
                  </div>
                  {/* <div className="pq-service-box-info">
                    <div className="pq-info-text">
                      <span className="pq-service-sub-title">{service.title}</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='content p-3 pt-3'>
          <h2>What Is Audiology?</h2>
          <p>Audiology, derived from the Latin word ‘audīre’ meaning “to hear,” is the branch of science focused on hearing, balance, and related disorders such as tinnitus.</p>
          <p>Audiology assessments help determine if a person’s hearing is within the normal range. If not, these tests identify which frequencies (high, middle, or low) are affected and to what extent. Audiologists specialize in diagnosing and managing auditory and balance-related issues.</p>
          <p>Several diagnostic tests, including <strong>PTA, Impedance, OAE, BERA, and ASSR</strong>, are available to evaluate hearing loss. Once diagnosed, the patient is referred to an ENT specialist for further treatment.</p>
          <p><strong>These tests are completely non-invasive and painless!</strong></p>
          
          <h2>Pure Tone Audiometry (PTA)</h2>
          <p>PTA is a fundamental hearing test used to detect hearing loss and assess its type and severity. The test involves wearing earphones and responding by pressing a button or raising a hand upon hearing a sound.</p>
          
          <h2>Speech Audiometry</h2>
          <p>Speech audiometry evaluates how softly words can be heard and how clearly they are understood. The patient listens to words at varying intensities and repeats them back to the audiologist. Understanding ability is measured as a percentage score, helping assess speech recognition capability.</p>
          
          <h2>Tympanometry</h2>
          <p>This test helps identify middle ear issues such as fluid buildup, eardrum perforation, or mobility impairments. By introducing air pressure into the ear canal, tympanometry assesses eardrum movement and generates tympanograms—graphs that reveal potential ear conditions like stiffness, excessive mobility, or perforations.</p>
        </div>
      </div>
    </div>
  );
}
