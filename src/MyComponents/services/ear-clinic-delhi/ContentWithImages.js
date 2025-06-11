import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "./ExpertAdvice.css"; 
import DoctorImage from "./image/rbndr.webp";
const EarClinicDelhi = () => {
  return (
    <>
      {/* Section 1: Get Expert Advice */}
      <section className="bg-b">
      <style>
        {`
        section {
    position: relative;
    padding: 15px 0px !important;
}`}
      </style>
        <div className="container">
          <div className="content">
            <p>
            An ENT doctor, also known as an otolaryngologist, is a medical specialist who treats conditions that affect the ears, nose, and throat. The doctor can also perform head and neck surgeries, including the surgeries involving the ears, nose, throat, mouth, neck, and face.  </p>
            <p>
                An ENT doctor offers both non-surgical and surgical types of treatments and can help in the diagnosis, evaluation, and treatment of various diseases and conditions affecting the head and neck region.
            </p>
            <p>
             If you are looking for the best ENT doctor in Delhi, you can contact Dr. (Major) Rajesh Bhardwaj at MedFirst ENT Centre in Delhi. He is a renowned and award-winning ENT specialist in Delhi with more than three decades of experience and has treated several satisfied patients to date.
            </p>

          </div>
        </div>
      </section>
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
     


      <section className="why-choose">
      <div className="container">
      <h2 className="pq-section-subtitle sub-subtitle">Why Choose MedFirst For The Best Ear Treatment In Delhi</h2>
        <p>
          For any ear-related problems and conditions, you should contact MedFirst ENT Centre, the best ear clinic in Delhi. Our centre has an edge over other ear clinics in Delhi due to the following facilities we offer:
        </p>
        <ul>
          <li>Senior, well-known ear doctor</li>
          <li>Personalized guidance and management</li>
          <li>On-time appointments and scheduling</li>
          <li>E-prescriptions</li>
          <li>Latest equipment and infrastructure</li>
          <li>Skilled, dedicated, and polite staff</li>
          <li>Hygienic and sanitized environment</li>
          <li>Accessible location</li>
          <li>Insurance acceptance</li>
          <li>Affordable procedures</li>
          <li>Partnership with TPA (Third-Party Administrator) for hassle-free insurance claims</li>
        </ul>
        <p>
          You will receive an early diagnosis and successful ear treatments at MedFirst ENT Centre under the care of our experienced ENT doctor.
        </p>
      </div>
      </section>

      <section className="why-choose">
      <div className="container">
      <h2 className="pq-section-subtitle sub-subtitle">Advanced Technology & Facilities</h2>
        <p>
          MedFirst ENT Centre uses advanced technology and facilities to provide successful ear surgeries and procedures with favorable outcomes. The various facilities we offer include:
        </p>
        <ul>
          <li>A well-equipped operation theater</li>
          <li>Pure tone, impedance audiometer</li>
          <li>Syringe and suction equipment</li>
          <li>Latest microscope with a camera</li>
          <li>High-end microdrill</li>
          <li>Nerve stimulator</li>
          <li>Nasal endoscope to access areas connected to the ears during some surgeries</li>
          <li>OAE or otoacoustic emission and BERA or brainstem evoked response audiometry screening machine to detect loss of hearing in children</li>
          <li>Equipment for emergency ear procedures like removing a foreign body</li>
        </ul>

      </div>
      </section>

    </>
  );
};

export default EarClinicDelhi;