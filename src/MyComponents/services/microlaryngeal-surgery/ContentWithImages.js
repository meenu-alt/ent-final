import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import image1 from "./images/septoplasty.jpeg";
import DoctorImage from './images/doctor.webp';

const MicrolaryngealSurgery = () => {
  return (
    <>
      {/* Section 1: Introduction to Microlaryngeal Surgery */}
      <section className="left-right-section">
      <style>
        {`
        section {
    position: relative;
    padding: 15px 0px !important;
}`}
      </style>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h6 className="pq-section-title text-danger">
                  Microlaryngeal Surgery
                </h6>
                <p className="text-danger">
                  {/* Microlaryngeal Surgery Cost - Rs. 80,000/- */}
                </p>
                <h2 className="pq-section-title">
                  Microlaryngeal Surgery at ENT Delhi
                </h2>
                <p>
                  Microlaryngeal Surgery is a specialized procedure for treating
                  diseases in the pharynx and larynx. It is commonly used for
                  removing lesions, taking biopsies, and correcting vocal cord
                  issues.
                </p>
                <h2 className="pq-section-subtitle sub-subtitle">
                  What is Microlaryngeal Surgery?
                </h2>
                <p>
                  Microlaryngeal Surgery, also known as micro laryngoscopy, is a
                  minimally invasive procedure that allows surgeons to visualize
                  and operate on the vocal folds or voice box using specialized
                  instruments.
                </p>
                <h2 className="pq-section-subtitle sub-subtitle">
                  Indications for Microlaryngeal Surgery
                </h2>
                <ul className="key-points">
                  <li>Removal of cysts, polyps, or nodules in the vocal cords</li>
                  <li>Treatment of vocal fold paralysis</li>
                  <li>Biopsy of suspicious lesions</li>
                  <li>Correction of subglottic stenosis</li>
                  <li>Management of Reinke’s edema</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={image1}
                className="img-fluid wow fadeInRight"
                alt="microlaryngeal-surgery"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Anaesthesia and Instrumentation */}
      <section className="left-right-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={image1}
                className="img-fluid wow fadeInRight"
                alt="microlaryngeal-equipment"
              />
            </div>
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h2 className="pq-section-subtitle sub-subtitle">
                  Anaesthesia for Microlaryngeal Surgery
                </h2>
                <p>
                  General Anaesthesia is typically used, with specially designed
                  endotracheal tubes to avoid obstructing the vocal cords.
                </p>
                <h2 className="pq-section-subtitle sub-subtitle">
                  Instrumentation and Equipment
                </h2>
                <ul className="key-points">
                  <li>Rigid Laryngoscope</li>
                  <li>Operating Microscope with 400mm lens</li>
                  <li>Suspension system</li>
                  <li>Injection needles, Forceps, Scissors, Dissectors</li>
                  <li>Laser and Bipolar cautery</li>
                  <li>Coblation and Microdebrider</li>
                  <li>0, 30, and 70-degree rigid scopes with camera console</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Meet Our Specialist */}
       <section className="specialist-section py-4 bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h6 className="section-subtitle text-danger text-center">OUR TEAM</h6>
            <h2 className="pq-section-subtitle sub-subtitle text-center">Meet Our Best ENT Specialist</h2>
           
          </div>
          
          <div className="row g-4 align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="specialist-image-container position-relative">
                <img
                  src={DoctorImage}
                  className="img-fluid rounded-3 shadow-lg"
                  alt="Dr. (Major) Rajesh Bhardwaj"
                />
                
              </div>
            </div>
      
            <div className="col-lg-7 col-md-6">
              <div className="ps-md-4">
                {/* <h3 className="text-primary mb-3" style={{color: "rgba(var(--bs-success-rgb),var(--bs-text-opacity))!important"}}>ENT Consultation, Surgeries & Treatment</h3> */}
                <h2 className="display-6 fw-bold text-dark mb-2 ">Dr. (Major) Rajesh Bhardwaj</h2>
                <p className="text-muted mb-4">
                  <i className="fas fa-graduation-cap me-2"></i>
                  MBBS (AFMC), MS, DNB, DLO, DHA
                </p>
      
                <div className="specialist-details">
                  <div className="mb-4">
                    <h4 className="d-flex align-items-center text-success mb-3">
                      <i className="fas fa-stethoscope me-2"></i> Specialities
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Comprehensive ENT care
                      </li>
                    </ul>
                  </div>
      
                  <div className="mb-4">
                    <h4 className="d-flex align-items-center text-success mb-3">
                      <i className="fas fa-tools me-2"></i> Expert Skills
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Advanced ENT surgeries
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Skilled in handling complex cases
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Expertise in cochlear implants
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Renowned for ethical practice and honest opinions
                      </li>
                    </ul>
                  </div>
      
                  <div className="mb-4">
                    <h4 className="d-flex align-items-center text-success mb-3">
                      <i className="fas fa-award me-2"></i> Experience
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        30+ years in ENT care
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Served 15 years in the Indian Army
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Extensive clinical experience in major hospitals
                      </li>
                    </ul>
                  </div>
                </div>
                
                  {/* <button className="btn btn-primary btn-lg mt-3">
                    Book an Appointment <i className="fas fa-arrow-right ms-2"></i>
                  </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Technique and Procedure */}
      <section className="septoplasty-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="text-content">
                <h2 className="pq-section-subtitle sub-subtitle">
                  Technique of Microlaryngeal Surgery
                </h2>
                <p>
                  A rigid laryngoscope is introduced into the patient’s mouth,
                  and the vocal cords are visualized using a suspension system.
                  The operating microscope is adjusted, and the lesion is
                  carefully removed using microdissection techniques.
                </p>
                <p>
                  Haemostasis (control of bleeding) is achieved using a laser
                  or bipolar diathermy. The removed sample is sent for
                  histopathology.
                </p>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <div className="image-container">
                <img
                  src={image1}
                  className="img-fluid"
                  alt="Microlaryngeal Surgery Procedure"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Post-Operative Care */}
      <section className="post-operative-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 text-center">
              <div className="image-container">
                <img
                  src={image1}
                  className="img-fluid"
                  alt="Post Operative Care"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="text-content">
                 <h2 className="pq-section-subtitle sub-subtitle">
                  Post Operative Care
                </h2>
                <ol className="key-points">
                  <li>Voice rest for 3-5 days</li>
                  <li>Avoid spicy or hot food for a few days</li>
                  <li>Complete vocal rest for 2-6 weeks</li>
                  <li>Avoid smoking and alcohol during recovery</li>
                  <li>Regular follow-up visits as advised</li>
                </ol>
                <div className="text-content">
                 <h2 className="pq-section-subtitle sub-subtitle">Complications</h2>
                <ol className="key-points">
                  <li>Bleeding during or after surgery</li>
                  <li>Change in voice quality</li>
                  <li>Damage to lips or teeth</li>
                  <li>Incomplete removal of the lesion</li>
                </ol>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section 7: Why Choose MedFirst? */}
      <section className="fess-section">
        <div className="container pq-section pq-style-1 text-left">
           <h2 className="pq-section-subtitle sub-subtitle">
            Why Choose MedFirst for Microlaryngeal Surgery?
          </h2>
          <div className="content">
            <p>
              MedFirst ENT Centre, led by Dr. (Major) Rajesh Bhardwaj, offers
              state-of-the-art facilities for Microlaryngeal Surgery. Our clinic
              provides personalized care, minimal waiting times, and a
              patient-friendly environment.
            </p>
            <p>
              With flexible timings and a dedicated team, we ensure a seamless
              experience for our patients. Our expertise in advanced ENT
              surgeries and commitment to ethical practice make us the preferred
              choice for Microlaryngeal Surgery in Delhi.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Pre- and Post-Surgery Essentials */}
      <section className="fess-section">
        <div className="container pq-section pq-style-1 text-left">
           <h2 className="pq-section-subtitle sub-subtitle">
            Pre- and Post-Surgery Essentials
          </h2>
        <div className="row">
          <div className="col-7">
          <div className="content">
            <h2>Before the Surgery</h2>
            <ul className="key-points">
              <li>Avoid ibuprofen and aspirin for at least two weeks</li>
              <li>Refrain from smoking</li>
              <li>Do not eat or drink 8 hours before surgery</li>
              <li>Inform your doctor about any medications</li>
            </ul>
            <h2>After the Surgery</h2>
            <ul className="key-points">
              <li>Maintain complete vocal rest for 2-6 weeks</li>
              <li>Avoid spicy or hot food for a few days</li>
              <li>Do not smoke or consume alcohol during recovery</li>
              <li>Attend all follow-up appointments</li>
            </ul>
             <h2 className="pq-section-subtitle sub-subtitle">
            Benefits of Microlaryngeal Surgery
          </h2>
          <div className="content">
            <ul className="key-points">
              <li>Preservation of vocal function</li>
              <li>Effective treatment for cancerous and non-cancerous lesions</li>
              <li>Minimal trauma to surrounding tissues</li>
              <li>Quick recovery and minimal downtime</li>
            </ul>
          </div>
          </div>
          
          </div>
          <div className="col-5">
          <div className="image-container">
                <img
                  src={image1}
                  className="img-fluid"
                  alt="Complications of Microlaryngeal Surgery"
                />
              </div>
          </div>

        </div>
        </div>
      </section>


      {/* Section 10: Cost of Microlaryngeal Surgery */}
      <section className="fess-section">
        <div className="container pq-section pq-style-1 text-left">
           <h2 className="pq-section-subtitle sub-subtitle">
            Cost of Microlaryngeal Surgery in Delhi
          </h2>
          <div className="content">
            <p>
              The cost of Microlaryngeal Surgery depends on various factors,
              including the severity of the condition, the surgeon’s expertise,
              and the hospital facilities. At MedFirst ENT Centre, we offer
              transparent pricing and insurance support to make the procedure
              affordable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicrolaryngealSurgery;