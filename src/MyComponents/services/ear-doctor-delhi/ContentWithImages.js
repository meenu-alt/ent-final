import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "./EarSpecialist.css"; // Import CSS for styling
import DoctorImage from "./images/rbndr.webp";

const EarDoctorDelhi = () => {
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
              An ENT doctor, also known as an otolaryngologist, is a medical
              specialist who treats conditions that affect the ears, nose, and
              throat. The doctor can also perform head and neck surgeries,
              including the surgeries involving the ears, nose, throat, mouth,
              neck, and face.{" "}
            </p>
            <p>
              An ENT doctor offers both non-surgical and surgical types of
              treatments and can help in the diagnosis, evaluation, and
              treatment of various diseases and conditions affecting the head
              and neck region.
            </p>
            <p>
              If you are looking for the best ENT doctor in Delhi, you can
              contact Dr. (Major) Rajesh Bhardwaj at MedFirst ENT Centre in
              Delhi. He is a renowned and award-winning ENT specialist in Delhi
              with more than three decades of experience and has treated several
              satisfied patients to date.
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


      {/* Section 1: Get Expert Advice */}
      <section className="expert-advice-section bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <h3 className="card-title text-success">
                  Choosing the Right Ear Doctor in Delhi
                </h3>
                <p className="card-text">
                  A few key factors can help you in choosing the right ear doctor
                  in Delhi to manage your ear conditions successfully. The factors
                  you need to consider include the following:
                </p>
                <ul className="key-points">
                  <li>Credentials and expertise of the ear doctor</li>
                  <li>Doctor’s reputation</li>
                  <li>Treatment center’s reputation</li>
                  <li>Facilities and services offered</li>
                  <li>Patient reviews and ratings</li>
                  <li>Success rates of the ear doctor</li>
                  <li>Accessible and approachable</li>
                  <li>Comfort level during the consultation appointment</li>
                </ul>
                <p className="card-text">
                  Dr. (Major) Rajesh Bhardwaj working at MedFirst ENT Centre uses
                  the latest technology and equipment to offer individualized care
                  to his patients with successful treatment results. His expertise
                  and experience along with a pleasant patient-doctor relationship
                  have earned him the reputation of being the best ear specialist
                  in Delhi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Experienced Ear Doctor in Delhi */}
      <section className="experienced-doctor-section py-5">
        <div className="container">
          <h2 className="text-center mb-3 pq-section-title">
            Our Experienced Ear Doctor in Delhi
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <h3 className="card-title text-success">
                  Dr. (Major) Rajesh Bhardwaj
                </h3>
                <p className="card-text">
                  The foundation of MedFirst ENT Centre in Delhi was laid by Dr.
                  (Major) Rajesh Bhardwaj. Dr. Bhardwaj graduated from the
                  well-known AFMC (Armed Forces Medical College) in Pune in the
                  year 1982. After graduation, he worked in the Indian Army for 15
                  years as an ENT specialist.
                </p>
                <p className="card-text">
                  Dr. Bhardwaj then began his private clinic, MedFirst ENT Centre
                  in Delhi, in 1997 after working for some of the biggest and
                  busiest armed forces hospitals. He has also worked as a
                  consultant in some of Delhi’s top hospitals.
                </p>
                <p className="card-text">
                  Dr. Bhardwaj is reputed for his honest, patient-centered,
                  empathetic, and ethical approach to his patients. He has won
                  many awards and accolades to date, including the following:
                </p>
                <ul className="key-points">
                  <li>
                    Top Three Rated ENT Specialist of Delhi for many years (an
                    independent global rating agency)
                  </li>
                  <li>Distinguished Doctor’s Award (2017)</li>
                  <li>
                    Best ENT Specialist Delhi at Asia Healthcare Summit Awards
                    (2020)
                  </li>
                  <li>
                    Healthcare Ambassador award for disseminating information to
                    the public during Covid times (2022)
                  </li>
                </ul>
                <p className="card-text">
                  MedFirst ENT Centre is the best ear specialist hospital in Delhi
                  offering top-notch care for your ear problems under the expert
                  guidance of Dr. (Major) Rajesh Bhardwaj.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Conditions Treated by Our Ear Specialist */}
      <section className="conditions-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-3 pq-section-title">
            Conditions Treated by Our Ear Specialist
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <p className="card-text">
                  The various ear conditions treated by our ear specialist doctor
                  in Delhi are:
                </p>
                <ul className="key-points">
                  <li>Ear infections</li>
                  <li>Vertigo</li>
                  <li>Eardrum rupture</li>
                  <li>Tympanic membrane hole</li>
                  <li>Tinnitus or ringing sound in the ears</li>
                  <li>Dizziness and loss of balance due to disorders of the inner ear</li>
                  <li>Loss of hearing</li>
                  <li>Ear bones damage</li>
                  <li>Ear tumors</li>
                  <li>Spinal fluid leakage from the ear</li>
                  <li>Otosclerosis or abnormal growth of bone in the middle ear</li>
                  <li>Cholesteatoma or abnormal skin cell collection deep inside the ear</li>
                  <li>Meniere’s disease, which is an inner ear disorder that affects hearing and balance</li>
                  <li>Eustachian tube dysfunction, in which there is a blockage of the tubes joining the middle ear to the upper throat</li>
                  <li>Cholesterol granuloma, which is a non-cancerous and expanding cyst in the ear</li>
                  <li>Superior canal dehiscence, which is a rare disorder that occurs due to abnormal thinness or incomplete closure of the inner ear bony canals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: When to See an Ear Specialist? */}
      <section className="when-to-see-section py-5">
        <div className="container">
          <h2 className="text-center mb-3 pq-section-title">
            When to See an Ear Specialist?
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <p className="card-text">
                  You need to visit an ear specialist if you notice any of the
                  following symptoms:
                </p>
                <ul className="key-points">
                  <li>Tinnitus</li>
                  <li>Loss of hearing</li>
                  <li>Congenital deformities of the outer and middle ear</li>
                  <li>Severe, chronic ear pain</li>
                  <li>Recurrent ear infections</li>
                  <li>Vertigo or dizziness</li>
                  <li>Loss of balance</li>
                  <li>A visible lump near the ear region</li>
                  <li>Trauma or injury to the ear</li>
                  <li>A foreign body stuck in the ear</li>
                  <li>Suspected ear bone fracture and pain</li>
                </ul>
                <p className="card-text mt-4">
                  Dr. (Major) Rajesh Bhardwaj at MedFirst ENT Centre is the best
                  ear specialist doctor in Delhi. He will evaluate your symptoms
                  thoroughly and offer a quick and accurate diagnosis and
                  treatment plan based on the type and severity of your condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Common Procedures Performed by Our Ear Doctor */}
      <section className="procedures-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-3 pq-section-title">
            Common Procedures Performed by Our Ear Doctor
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <p className="card-text">
                  Our ear doctor at MedFirst ENT Centre offers many types of ear
                  procedures and surgeries. The commonly performed ear procedures
                  include:
                </p>
                <ul className="key-points">
                  <li>
                    <strong>Tympanoplasty:</strong> It involves the surgical repair
                    of the eardrum to stop infections in the middle ear.
                  </li>
                  <li>
                    <strong>Myringoplasty:</strong> In this procedure, the doctor
                    will repair a small hole or tear in the eardrum.
                  </li>
                  <li>
                    <strong>Myringotomy and tube placement:</strong> This
                    procedure is done in cases of frequent or chronic ear
                    infections and helps prevent fluid buildup in the ears.
                  </li>
                  <li>
                    <strong>Stapedectomy:</strong> Stapes is one of the three
                    small bones in the middle ear. Stapedectomy involves stapes
                    bone replacement with a prosthetic to improve hearing.
                  </li>
                  <li>
                    <strong>Cochlear implants:</strong> Tiny electrical devices
                    are surgically placed in the ear to decrease loss of hearing
                    and improve a person’s ability to be able to hear more sounds
                    and understand speech better.
                  </li>
                  <li>
                    <strong>Tympanomastoidectomy:</strong> This procedure
                    involves the reconstruction of the eardrum and repair of the
                    mastoid bone to stop chronic ear infections.
                  </li>
                  <li>
                    <strong>Ossicular chain reconstruction:</strong> This
                    procedure involves the reconstruction of the eardrum and
                    hearing bones in the middle ear. The doctor will also open
                    the mastoid bone to prevent further infections.
                  </li>
                  <li>
                    <strong>Tumor excision:</strong> This procedure involves the
                    excision of the cancerous and non-cancerous ear tumors.
                  </li>
                </ul>
                <p className="card-text mt-4">
                  You will be assessed thoroughly and offered an appropriate ear
                  procedure based on your condition by the best doctor for ear in
                  Delhi at MedFirst ENT Centre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
};

export default EarDoctorDelhi;