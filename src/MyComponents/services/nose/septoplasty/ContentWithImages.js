import React from 'react';

import Nose from '../image/nose.jpg';
import Nose1 from '../image/nose1.jpg';
import Nose2 from '../image/nose1.jpg';
import DoctorImage from '../image/doctor.webp';

const NasalPolypRemoval = () => {
  return (
    <>
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
                <h6 className="pq-section-title text-danger">Septoplasty</h6>
                <p className="text-danger">
                  Endoscopic Septoplasty (LA) Cost - Rs. 60,000/-
                </p>
                <h2 className="pq-section-title">Septoplasty At ENT Delhi</h2>
                <p>
                  Septoplasty is the surgical procedure to correct a deviated
                  nasal septum (DNS).
                </p>
                <h2 className="pq-section-subtitle sub-subtitle">
                  Nasal Septum and DNS — Deviated Nasal Septum
                </h2>
                <p>
                  The Nasal Septum divides the nose into the right and left
                  nostrils. It is made of Cartilage (malleable tissue –
                  anteriorly), and Bone (Posteriorly).
                </p>
                <p>
                  Though ideally the Septum should be straight, there is some
                  deviation to either side in some individuals.
                </p>
                <h2 className="pq-section-subtitle sub-subtitle">
                  Causes of Deviated Nasal Septum
                </h2>
                <ul className="key-points">
                  <li>
                    The child may be born with a deviated Septum due to
                    pressures in the womb.
                  </li>
                  <li>
                    Injury while growing up, or as a child while playing games,
                    or sometimes after an accident.
                  </li>
                  <li>
                    Pressure of swelling like large growth/polyp on one side of
                    the nose can push the septum to the other side.
                  </li>
                </ul>
              </div>
            </div>

            
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={Nose}
                className="img-fluid wow fadeInRight"
                alt="septoplasty-procedure"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="left-right-section">
        <div className="container">
          <div className="row">
            
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={Nose1}
                className="img-fluid wow fadeInRight"
                alt="septoplasty-procedure"
              />
            </div>

            
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h2 className="pq-section-subtitle sub-subtitle">
                  Indications Of Septoplasty
                </h2>
                <ul className="key-points">
                  <li>Nasal Blockage</li>
                  <li>Recurrent Nasal bleeding</li>
                  <li>Snoring and sleep Apnoea</li>
                  <li>
                    As an approach or access to Nasal Surgery like FESS or skull
                    base surgery
                  </li>
                  <li>To repair a nasal septal deviation</li>
                </ul>

                <h2 className="pq-section-subtitle sub-subtitle">
                  Anaesthesia for Septoplasty
                </h2>
                <ol className="key-points">
                  <li>
                    <strong>Local Anaesthesia</strong> – after discussing with
                    the patient — only Local Anaesthetic is used along with some
                    sedation.
                  </li>
                  <li>
                    <strong>MAC- Monitored Anaesthesia Care</strong> - the
                    anaesthetist gives pain-relieving drugs intravenously, along
                    with sedation.
                  </li>
                  <li>
                    <strong>General Anaesthesia</strong> – Full General
                    Anaesthesia where the patient is completely unconscious.
                  </li>
                </ol>
                <p>
                  The decision regarding the type of anaesthesia to be used is
                  taken following a discussion between the ENT surgeon and the
                  patient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="info-section bg-success text-white text-center py-3">
        <h2 className="fw-bold">Want To Know More?</h2>
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

      <section className="septoplasty-section">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-7">
              <div className="text-content">
                <h2 className="pq-section-subtitle sub-subtitle">
                  Method Of Septoplasty
                </h2>
                <p>
                  Septoplasty is a very commonly performed surgical procedure.
                </p>
                <p>
                  In the Operation Theatre, after cleaning and draping the
                  patient, 2% Xylocaine with adrenaline is injected into the
                  septum so as to lift a submucosal flap. Cotton patties with 4%
                  Xylocaine and adrenaline are sometimes placed in the nasal
                  passage as well to help shrink the mucosal swellings.
                </p>
                <p>
                  Depending upon the nature of the deviation, an incision is
                  made on the Septum and mucosal flaps are lifted and joined
                  together – the septum is now standing freely and unattached.
                </p>
                <p>
                  The Septum is then brought to the midline using various
                  techniques, including thinning out duplicated parts,
                  straightening, and morselization as well as using a hammer and
                  gouge to remove bony spurs.
                </p>
                <p>
                  Once the septum is brought to the midline, parts may be
                  sutured – either at the caudal (lower) end or sutures to
                  approximate septal flaps together so as to prevent hematoma
                  formation.
                </p>
                <p>
                  Nasal packs are placed in the nose which are kept in situ for
                  a day or sometimes longer.
                </p>
              </div>
            </div>

            
            <div className="col-md-5 text-center">
              <div className="image-container">
                <img
                  src={Nose2}
                  className="img-fluid"
                  alt="Septoplasty Procedure"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="post-operative-section">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-5 text-center">
              <div className="image-container">
                <img
                  src={Nose2}
                  className="img-fluid"
                  alt="Post Operative Care"
                />
              </div>
            </div>

            
            <div className="col-md-7">
              <div className="text-content">
                <h2 className="section-title main-title">
                  Post Operative Period
                </h2>
                <ol className="key-points">
                  <li>
                    The post operative period is usually uneventful – the
                    patient takes rest for a day or two. We recommend to work
                    from home for about 5-7 days or till the wound has healed.
                  </li>
                  <li>
                    Normal diet is recommended - simple regular home food.
                  </li>
                  <li>Lying propped up in bed is usually helpful.</li>
                  <li>
                    There may be some pink/blood-soaked discharge from the nose
                    for a few days.
                  </li>
                  <li>Do not blow nose.</li>
                  <li>
                    No steam inhalation in the immediate post operative period.
                  </li>
                  <li>Must come for regular follow up visits as asked for.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section bg-success text-white text-center py-3">
        <h2 className="fw-bold">Want To Know More?</h2>
      </section>

      <section className="post-operative-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="text-content">
                <h2 className="section-title main-title">Complications</h2>

                <p>
                  Though a safe and well tolerated surgical procedure,
                  Septoplasty can lead to some complications.
                </p>
                <ol className="key-points">
                  <li>
                    Bleeding – in the immediate post operative period, or
                    sometimes after a week to 10 days - a well known
                    complication called Secondary haemorrhage. Treatment is
                    usually simple.
                  </li>
                  <li>
                    Infection – every surgical procedure can be followed by a
                    local infection in the affected area - a good antibiotic is
                    usually enough to treat this.
                  </li>
                  <li>
                    Nasal Septal Perforation - in spite of all precautions
                    sometimes there can be a septal perforation due to flap
                    necrosis.
                  </li>
                  <li>
                    External nasal deformity - sometimes, if excessive
                    supportive tissue is sacrificed the nasal pyramid may be
                    affected – usually in the form of a supra tip depression.
                  </li>
                  <li>
                    Recurrence - though airway improvement is predictable
                    sometimes the septal deviation may spring back either as a
                    result of fresh trauma or due to strong tissue memory.
                  </li>
                </ol>
              </div>
            </div>

            <div className="col-md-5 text-center">
              <div className="image-container">
                <img
                  src={Nose1}
                  className="img-fluid"
                  alt="Post Operative Care"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fess-section">
        <div className="container pq-section pq-style-1 text-left">
          <h2 className="section-title main-title">
            MedFirst ENT Centre Advantage - Septoplasty with Health Insurance
            and TPA Support
          </h2>
          <div className="content">
            <p>
              MedFirst ENT Centre specializes in septoplasty and is committed to
              providing a seamless experience for patients seeking this medical
              care. They facilitate the financial aspects of septoplasty
              treatment through affiliations with leading insurance companies,
              with a dedicated Third Party Administrator (TPA) team well-versed
              in handling septoplasty claims. Whether patients require care
              under a group health insurance plan or individual/family health
              insurance for their septoplasty, MedFirst ENT Centre’s extensive
              network and TPA team ensure smooth processing of septoplasty
              health insurance claims, relieving patients of administrative
              burdens.
            </p>

            <p>
              Understanding how health insurance policies and TPAs can assist in
              covering septoplasty costs is essential. Septoplasty, a procedure
              aimed at correcting a deviated nasal septum, is often a medical
              necessity to improve breathing and overall health. To ensure a
              smooth and cost-effective septoplasty experience, proactive
              measures include thoroughly reviewing insurance policies,
              selecting specialized ENT clinics within the insurance network,
              and collaborating with TPAs for efficient claims processing. This
              proactive approach ensures that patients can undergo septoplasty
              with confidence, knowing their insurance covers the procedure,
              providing peace of mind during the septoplasty journey.
            </p>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default NasalPolypRemoval;
