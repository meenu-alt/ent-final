import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "./Pediatric.css"; 
import DoctorImage from "./images/rbndr.webp";

const PediatricENT = () => {
  return (
    <>
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
                 Pediatric ENT, also known as pediatric otolaryngology, is a medical specialty that deals with the diagnosis and treatment of various illnesses that affect the ear, nose, and throat (ENT) in children.
                 </p>
                 <p>Pediatric ENT specialists or pediatric otolaryngologists are qualified medical doctors who help in the diagnosis and management of a wide range of head and neck conditions that affect young patients, from newborns to teenagers.

                 </p>
                 <p>Dr. (Major) Rajesh Bhardwaj from MedFirst ENT Centre is the best pediatric ENT in Delhi. He has over thirty years of experience in treating ENT problems in children using a personalized and compassionate treatment approach.
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
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <h3 className="card-title text-success">
                  Choosing the Right Pediatric ENT in Delhi
                </h3>
                <p className="card-text">
                  If you are looking for the right ENT doctor for your child, you
                  need to consider a few important factors, which include the
                  following:
                </p>
                <ul className="key-points">
                  <li>Qualifications and experience of the pediatric ENT</li>
                  <li>Reputation of the ENT doctor</li>
                  <li>Reputation and credibility of the treatment center</li>
                  <li>Facilities and technology available</li>
                  <li>Success rates of the ENT doctor</li>
                  <li>Online ratings and reviews</li>
                  <li>
                    Accessibility and availability of the doctor in case of an
                    emergency
                  </li>
                  <li>The comfort level of the child with the doctor</li>
                </ul>
                <p className="card-text">
                  Dr. (Major) Rajesh Bhardwaj is the best pediatric ENT
                  specialist in Delhi. He uses child-friendly, individualized
                  methods and techniques to provide an early diagnosis and
                  successful treatments for various head and neck disorders
                  affecting the child.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Experienced Pediatric ENT in Delhi */}
      <section className="experienced-doctor-section py-5">
        <div className="container">
          <h2 className="pq-section-subtitle sub-subtitle text-center">
            Our Experienced Pediatric ENT in Delhi
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <h3 className="card-title text-success">
                  Dr. (Major) Rajesh Bhardwaj
                </h3>
                <p className="card-text">
                  MedFirst ENT Centre in Delhi is spearheaded by Dr. (Major)
                  Rajesh Bhardwaj. He graduated from the reputed AFMC / Armed
                  Forces Medical College in Pune. After passing out in 1982, he
                  served in the Indian Army as an ENT specialist for
                  approximately 15 years.
                </p>
                <p className="card-text">
                  After working as an ENT specialist in some of the biggest and
                  busiest hospitals of the armed forces, Dr. Bhardwaj decided to
                  work as a private practitioner and opened his own clinic called
                  MedFirst ENT Centre in 1997. He has also served as a consultant
                  ENT specialist in many reputed hospitals in Delhi.
                </p>
                <p className="card-text">
                  Dr. Bhardwaj is well-known for his honest, transparent,
                  patient-centric, empathetic, and ethical treatment approaches.
                  He is especially very friendly and approachable when treating
                  children and is also the recipient of several prestigious
                  awards to date, which include the following:
                </p>
                <ul className="key-points">
                  <li>Distinguished Doctor’s Award – 2017</li>
                  <li>
                    Best ENT Specialist Delhi (Asia Healthcare Summit Awards) –
                    2020
                  </li>
                  <li>
                    Healthcare Ambassador award for providing important
                    information to the public during Covid – 2022
                  </li>
                  <li>
                    Top Three Rated ENT Specialist of Delhi (independent global
                    rating agency) – many years
                  </li>
                </ul>
                <p className="card-text">
                  Dr. (Major) Rajesh Bhardwaj is the best pediatric ENT in Delhi
                  offering successful treatments to children with ENT problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Conditions Treated by Pediatric ENT Specialist */}
      <section className="conditions-section bg-light py-5">
        <div className="container">
          <h2 className="pq-section-subtitle sub-subtitle text-center">
            Conditions Treated by Pediatric ENT Specialist
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <p className="card-text">
                  The different conditions treated by our pediatric ENT
                  specialist at MedFirst ENT Centre in Delhi are:
                </p>
                <h2 className="card-subtitle text-success mb-3">Ear Conditions</h2>
                <ul className="key-points">
                  <li>Ear infections</li>
                  <li>Tinnitus or ringing sound in the ears</li>
                  <li>Vertigo</li>
                  <li>Dizziness</li>
                  <li>Imbalance due to disorders of the inner ear</li>
                  <li>Ruptured eardrum</li>
                  <li>Tympanic membrane hole</li>
                  <li>Loss of hearing</li>
                  <li>Otosclerosis (abnormal growth of bone in the middle ear)</li>
                  <li>
                    Eustachian tube dysfunction (blockage of the tubes connecting
                    the middle ear to the upper throat)
                  </li>
                  <li>
                    Meniere’s disease (an inner ear disorder that impacts balance
                    and hearing)
                  </li>
                </ul>

                <h2 className="card-subtitle text-success mb-3 mt-4">Nose Conditions</h2>
                <ul className="key-points">
                  <li>Sinusitis (sinus inflammation)</li>
                  <li>Environmental irritants causing allergies</li>
                  <li>Nosebleeds</li>
                  <li>
                    Rhinitis (inflammation of the mucus membranes that line the
                    nose)
                  </li>
                  <li>Nasal polyps (non-cancerous growths)</li>
                  <li>
                    Postnasal drip (excess mucus dripping from the back of the
                    throat)
                  </li>
                  <li>Nasal and paranasal tumors</li>
                  <li>
                    A deviated septum (off-centered cartilage separating the
                    nasal cavity)
                  </li>
                </ul>

                <h2 className="card-subtitle text-success mb-3 mt-4">Throat Conditions</h2>
                <ul className="key-points">
                  <li>Sore throat</li>
                  <li>Vocal cord dysfunction</li>
                  <li>Vocal cord paralysis</li>
                  <li>Vocal nodules</li>
                  <li>Laryngitis (swelling of the voice box)</li>
                  <li>Tonsillitis (infection of the tonsils)</li>
                  <li>Dysphagia or other swallowing problems</li>
                </ul>

                <h2 className="card-subtitle text-success mb-3 mt-4">Head and Neck Tumors</h2>
                <ul className="key-points">
                  <li>Oral cancer</li>
                  <li>Oropharyngeal cancer</li>
                  <li>Nasopharyngeal cancer</li>
                  <li>Thyroid cancer</li>
                  <li>Laryngeal cancer</li>
                  <li>Salivary gland tumors</li>
                  <li>
                    Hemangiomas (non-cancerous growths with extra blood vessels)
                  </li>
                </ul>

                <h2 className="card-subtitle text-success mb-3 mt-4">Sleep-Related Problems</h2>
                <ul className="key-points">
                  <li>Snoring</li>
                  <li>
                    Obstructive sleep apnea (the child stops breathing
                    temporarily due to closed or narrow airways)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: When to See a Pediatric ENT Specialist? */}
      <section className="when-to-see-section py-5">
        <div className="container">
          <h2 className="pq-section-subtitle sub-subtitle text-center">
            When to See a Pediatric ENT Specialist?
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <p className="card-text">
                  You need to get your child to a pediatric ENT specialist if
                  your child shows any of the following symptoms:
                </p>
                <ul className="key-points">
                  <li>Chronic cough</li>
                  <li>Runny nose that refuses to go away</li>
                  <li>Chronic nasal congestion</li>
                  <li>Persistent sore throat</li>
                  <li>Vertigo</li>
                  <li>Dizziness</li>
                  <li>Chronic pressure in the sinus area</li>
                  <li>Hearing loss</li>
                  <li>Severe allergies</li>
                  <li>Persistent hoarseness or wheezing</li>
                  <li>Severe snoring</li>
                  <li>Sleep apnea</li>
                  <li>Dysphagia (difficulty swallowing)</li>
                  <li>Frequent ear infections</li>
                  <li>Chronic tonsillitis</li>
                  <li>A lump on the neck or the face</li>
                </ul>
                <p className="card-text mt-4">
                  If your child shows any of the following symptoms, you should
                  get emergency medical help before the condition becomes
                  complicated or even life-threatening:
                </p>
                <ul className="key-points">
                  <li>Foreign bodies stuck in the ear, nose, or throat</li>
                  <li>Epistaxis (nosebleed)</li>
                  <li>Trauma to the head or neck region</li>
                  <li>Stridor (high-pitched, abnormal respiratory sound)</li>
                  <li>
                    Suspected bone fractures in the facial region
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Common Diagnostic Tests */}
      <section className="diagnostic-tests-section bg-light py-5">
        <div className="container">
          <h2 className="pq-section-subtitle sub-subtitle text-center">
            Common Diagnostic Tests Recommended by the Pediatric ENT Specialist
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <p className="card-text">
                  The pediatric ENT specialist will recommend a few diagnostic
                  tests for an early and accurate diagnosis of the child’s
                  condition. Based on the assessment of the child’s symptoms and
                  the results of the diagnostic tests, the ENT specialist will
                  make a personalized treatment plan for the child.
                </p>
                <p className="card-text">
                  The commonly recommended diagnostic tests may include:
                </p>
                <ul className="key-points">
                  <li>Otoscopy</li>
                  <li>Audiometry</li>
                  <li>Speech audiometry</li>
                  <li>Tympanometry</li>
                  <li>CT-scan</li>
                  <li>MRI scan</li>
                  <li>Allergy testing</li>
                  <li>Flexible nasopharyngoscopy</li>
                  <li>Sleep studies</li>
                  <li>Nasal endoscopy</li>
                  <li>Swallowing studies</li>
                  <li>Vestibular testing</li>
                  <li>Fine needle aspiration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Common Treatments Offered by Our Pediatric ENT Specialist */}
      <section className="treatments-section py-5">
        <div className="container">
          <h2 className="pq-section-subtitle sub-subtitle text-center">
            Common Treatments Offered by Our Pediatric ENT Specialist
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <p className="card-text">
                  Dr. (Major) Rajesh Bhardwaj from MedFirst ENT Centre offers
                  the following common treatments to children facing ENT
                  problems:
                </p>
                <h2 className="card-subtitle text-success mb-3">Medical Interventions</h2>
                <p className="card-text">
                  We offer medical interventions for various types of ENT
                  problems. These interventions may include medicines, allergy
                  shots, nasal sprays, desensitization, and other conservative
                  treatment methods. The goal of medical interventions is to
                  reduce symptoms and encourage overall general health.
                </p>

                <h2 className="card-subtitle text-success mb-3 mt-4">Surgical Interventions</h2>
                <p className="card-text">
                  When conservative treatment methods cannot treat the condition,
                  our ENT specialist may recommend undergoing surgical procedures
                  like ear tube implantation or myringotomy, sinus surgery,
                  tonsillectomy, adenoidectomy, airway reconstruction, surgical
                  correction of certain congenital defects, etc.
                </p>

                <h2 className="card-subtitle text-success mb-3 mt-4">Treatment for Hearing Problems</h2>
                <p className="card-text">
                  Our pediatric ENT doctor will first assess the hearing loss or
                  auditory problems in a child. Based on the child’s assessment,
                  the doctor will offer treatments like hearing aids or cochlear
                  implants to solve the child’s hearing problems.
                </p>

                <h2 className="card-subtitle text-success mb-3 mt-4">Voice and Speech Treatment</h2>
                <p className="card-text">
                  Children having speech and voice disorders will be treated by
                  our pediatric ENT in close association with the speech
                  therapist to improve the child’s speech and vocal function.
                </p>

                <h2 className="card-subtitle text-success mb-3 mt-4">Allergy Management</h2>
                <p className="card-text">
                  Your child will undergo allergy testing and recommended things
                  to avoid, as well as environmental adjustments that need to be
                  made to avoid allergies and reduce the impact of allergies on
                  ENT disorders.
                </p>
                <p className="card-text mt-4">
                  Book an appointment with the top pediatric ENT specialist in
                  Delhi at MedFirst ENT Centre for a painless and successful ENT
                  evaluation and treatment for your child.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default PediatricENT;