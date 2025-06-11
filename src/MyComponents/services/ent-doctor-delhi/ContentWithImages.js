import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "./ExpertAdvice.css"; 
import DoctorImage from "./images/rbndr.webp";
const ExpertAdvice = () => {
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
      <section className="expert-advice-section bg-light py-5">
        <div className="container">
          <h2 className="section-title text-center mb-3">Get Expert Advice</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <h3 className="card-title text-success">
                  Choosing The Right ENT Doctor in Delhi
                </h3>
                <p className="card-text">
                  You need to consider a few important factors while choosing the
                  right ENT doctor for your healthcare needs. These factors
                  include:
                </p>
                <ul className="key-points">
                  <li>ENT doctor’s qualifications, experience, and credentials</li>
                  <li>Reputation of the doctor</li>
                  <li>Facilities provided</li>
                  <li>Reputation of the ENT clinic or treatment center</li>
                  <li>Patient testimonials and reviews</li>
                  <li>Success rates</li>
                  <li>Accessibility, availability, and convenience of location</li>
                  <li>Controls level into the doctor</li>
                </ul>
                <p className="card-text">
                  Dr. (Major) Rajesh Bhardwaj at MedFirst ENT Centre is an
                  experienced ENT surgeon and provides all types of ENT procedures
                  with high patient satisfaction rates. His personalized care and
                  positive patient-doctor relationship approach, coupled with
                  several years of experience, have earned him a good reputation
                  and made him the topmost ENT doctor in Delhi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="experienced-doctors-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-3">
            Our Experienced ENT Doctors in Delhi
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <h3 className="card-title text-success">
                  Dr. (Major) Rajesh Bhardwaj
                </h3>
                <p className="card-text">
                  Dr. (Major) Rajesh Bhardwaj is the founder of MedFirst ENT
                  Centre in Delhi. He graduated from AFMC (Armed Forces Medical
                  College) in Pune in 1982 and worked in the Indian Army for
                  about 15 years, where he gained immense clinical experience
                  working as an ENT specialist.
                </p>
                <p className="card-text">
                  After serving in some of the busiest and largest hospitals in
                  the armed forces, Dr. Bhardwaj entered the private medical
                  sector and started his own clinic, MedFirst ENT Centre, in the
                  year 1997. He has also been associated with some of the most
                  reputed hospitals in Delhi.
                </p>
                <p className="card-text">
                  Known for his honest, compassionate, patient-centric, and
                  ethical treatment approach, Dr. Bhardwaj has many notable
                  awards and achievements to his credit, including:
                </p>
                <ul className="key-points">
                  <li>
                    Best ENT Specialist Delhi at Asia Healthcare Summit Awards,
                    2020
                  </li>
                  <li>Distinguished Doctor’s Award, 2017</li>
                  <li>
                    Top Three Rated ENT Specialist of Delhi for several years –
                    an independent global rating agency
                  </li>
                  <li>
                    Healthcare Ambassador award for disseminating information to
                    the public during Covid times, 2022
                  </li>
                </ul>
                <p className="card-text">
                  You can be assured of receiving the best ENT treatments in
                  Delhi under the expert care of Dr. (Major) Rajesh Bhardwaj at
                  MedFirst ENT Centre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="conditions-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-3">
            Conditions That ENT Specialists Treat At Our Center
          </h2>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="card shadow-sm p-4">
                <h3 className="card-subtitle text-success mb-3">Ear Diseases</h3>
                <ul className="key-points">
                  <li>Ear infections</li>
                  <li>Diseases and infections due to inner ear disorders</li>
                  <li>Vertigo</li>
                  <li>Ruptured eardrum</li>
                  <li>Dysfunction of the Eustachian tube</li>
                  <li>Hearing loss</li>
                  <li>Meniere’s disease (inner ear disorder)</li>
                  <li>Otosclerosis (abnormal bone growth in the middle ear)</li>
                </ul>

                <h3 className="card-subtitle text-success mb-3 ">
                  Nose Conditions
                </h3>
                <ul className="key-points">
                  <li>Sinusitis (inflammation or infection of the sinuses)</li>
                  <li>Allergies due to environmental irritation</li>
                  <li>Rhinitis (inflammation of the mucus membranes lining the nose)</li>
                  <li>Nasal polyps causing blockage</li>
                  <li>Deviated nasal septum</li>
                  <li>Nasal and paranasal tumors</li>
                </ul>

                <h3 className="card-subtitle text-success mb-3 ">
                  Throat Disorders
                </h3>
                <ul className="key-points">
                  <li>Sore throat</li>
                  <li>Tonsillitis (infection of the tonsils)</li>
                  <li>Laryngitis (swelling of the voice box)</li>
                  <li>Swallowing problems like dysphagia</li>
                  <li>Vocal cord growth</li>
                  <li>Vocal cord dysfunction</li>
                  <li>Vocal nodules</li>
                </ul>

                <h3 className="card-subtitle text-success mb-3 ">
                  Sleep-Related Conditions
                </h3>
                <ul className="key-points">
                  <li>Snoring</li>
                  <li>
                    Obstructive sleep apnea (temporary breathing pauses during
                    sleep)
                  </li>
                </ul>

                <h3 className="card-subtitle text-success mb-3 ">
                  Tumors of the Head and Neck
                </h3>
                <ul className="key-points">
                  <li>Hemangiomas (non-cancerous growths containing blood vessels)</li>
                  <li>Oral cancer</li>
                  <li>Salivary gland tumors</li>
                  <li>Laryngeal cancer</li>
                  <li>Oropharyngeal cancer</li>
                  <li>Thyroid cancer</li>
                  <li>Nasopharyngeal cancer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ExpertAdvice;