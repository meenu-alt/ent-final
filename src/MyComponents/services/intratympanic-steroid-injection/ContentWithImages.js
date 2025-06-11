import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "./IntratympanicInjection.css"; // Import CSS for styling
import DoctorImage from "./images/rbndr.webp";

const IntratympanicInjection = () => {
  return (
    <>
     <section className="overview-section bg-light py-5">
     <style>
        {`
        section {
    position: relative;
    padding: 15px 0px !important;
}`}
      </style>
        <div className="container">
          <h2 className="pq-section-subtitle sub-subtitle text-center">
            Intratympanic Steroid Injection
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <p className="card-text">
                  An intratympanic steroid injection is a procedure in which a
                  small amount of steroid is injected directly into the middle
                  ear. It is performed under local anesthesia in a separate
                  procedure room.
                </p>
                <p className="card-text">
                  This treatment is used for patients suffering from sudden onset
                  hearing loss or severe vertigo, such as that caused by
                  Meniere’s disease or sudden vestibular failure, which has not
                  responded to vestibular sedative medications or rehabilitation
                  exercises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Patient Assessment */}
      <section className="assessment-section py-5">
        <div className="container">
          <h2 className="pq-section-subtitle sub-subtitle text-center">Patient Assessment</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <p className="card-text">
                  Your specialist will have taken a detailed history and carried
                  out a thorough examination to determine if you are likely to
                  benefit from an intratympanic steroid injection. The assessment
                  will include a full hearing test, which is important as it
                  helps identify the affected ear and the amount of useful
                  hearing remaining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Procedure */}
      <section className="procedure-section bg-light py-5">
        <div className="container">
          <h2 className="pq-section-subtitle sub-subtitle text-center">The Procedure</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <p className="card-text">
                  The procedure itself is straightforward and can be carried out
                  either under local or general anesthesia. The ear is numbed
                  with a combination of local anesthetic creams placed into the
                  ear canal and local anesthetic injections.
                </p>
                <p className="card-text">
                  The steroid medication is then gently injected into the middle
                  ear through a fine needle. This can cause a feeling of fullness
                  within the ear and a temporary reduction in hearing while the
                  ear fills with the steroid medication. However, these effects
                  are usually short-lived.
                </p>
                <p className="card-text">
                  Once the procedure is over, the operating table is usually
                  tilted in a head-down position to allow better absorption of
                  the drug.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Benefits of Intratympanic Steroid Injection */}
      <section className="benefits-section py-5">
        <div className="container">
          <h2 className="pq-section-subtitle sub-subtitle text-center">
            Benefits of Intratympanic Steroid Injection
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <ul className="key-points">
                  <li>Non-invasive procedure with minimal discomfort.</li>
                  <li>Effective for sudden onset hearing loss and severe vertigo.</li>
                  <li>Quick recovery with minimal downtime.</li>
                  <li>Can be performed under local anesthesia.</li>
                  <li>Helps in cases where other treatments have failed.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section bg-success text-white text-center ">
        <h2 className="fw-bold text-center text-white">Want To Know More</h2>
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


      <section className="why-choose-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-3 pq-section-title">
            Why Choose MedFirst for the Best Intratympanic Steroid Injections in Delhi?
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <p className="card-text">
                  MedFirst ENT Centre located at Vasant Vihar, New Delhi, led by
                  Dr. (Major) Rajesh Bhardwaj, a top ENT specialist, offers
                  modern equipment and a comfortable, clean environment.
                </p>
                <p className="card-text">
                  The same experienced doctor can be seen at every visit. Unlike
                  large hospitals, MedFirst ENT center ensures that patients have
                  minimal waiting time. Printed records are maintained to avoid
                  the fuss of carrying prescriptions every visit while being
                  shared even through WhatsApp.
                </p>
                <p className="card-text">
                  The staff is friendly, the location is easy to find, and the
                  clinic is kept spotless with thorough sanitization. MedFirst
                  ensures you get the best care with convenience.
                </p>
                <p className="card-text">
                  With convenient timings from Monday to Saturday and flexible
                  morning and evening sessions, including extended hours on
                  Thursdays, our clinic is committed to providing excellent care
                  to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What is an Intratympanic Steroid Injection? */}
      <section className="what-is-section py-5">
        <div className="container">
          <h2 className="text-center mb-3 pq-section-title">
            What is an Intratympanic Steroid Injection?
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <p className="card-text">
                  The round window, a sealed membrane situated behind the eardrum
                  in the middle ear space, plays a crucial role in hearing and
                  balance. Behind the round window, the fluids of the inner ear
                  are present.
                </p>
                <p className="card-text">
                  An Intratympanic steroid injection is given by the surgeon
                  through the eardrum to fill the middle ear, allowing the
                  medication to diffuse across the round window and into the
                  cochlea.
                </p>
                <p className="card-text">
                  Dexamethasone and methylprednisolone are the most commonly used
                  components of the Intratympanic Steroid Injection. It is
                  delivered into the middle ear through the tympanic membrane.
                  They reach the inner ear by absorption, mainly through the round
                  window membrane. Although the exact mechanism of action remains
                  unclear, the immune-mediating properties are thought to play a
                  role.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="info-section bg-success text-white text-center ">
        <h2 className="fw-bold text-center text-white">Want To Consult Our Doctors?</h2>
      </section>
      {/* Section 3: When to Get an Intratympanic Steroid Injection? */}
      <section className="when-to-get-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-3 pq-section-title">
            When to Get an Intratympanic Steroid Injection?
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <p className="card-text">
                  People who might be suffering from the below-mentioned
                  conditions can opt for getting an Intratympanic steroid
                  injection:
                </p>
                <ul className="key-points">
                  <li>
                    <strong>Noise-induced hearing loss:</strong> When there is
                    mechanical or metabolic damage to certain regions such as the
                    reticular lamina or organ of Corti, the person may face this
                    condition. Although not conclusive, the treatment is said to
                    promote recovery.
                  </li>
                  <li>
                    <strong>Meniere’s disease:</strong> The symptoms associated
                    with the disorder, such as vertigo, can be treated using the
                    mentioned injection.
                  </li>
                  <li>
                    <strong>Idiopathic Sudden Sensorineural Hearing Loss (ISSHL):</strong> This condition, characterized by sudden hearing loss, can be
                    treated by using an Intratympanic steroid injection.
                  </li>
                  <li>
                    <strong>Autoimmune inner ear disease:</strong> Hearing loss
                    may occur when immune regulation is compromised, leading to
                    an autoimmune disorder.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How to Get an Intratympanic Steroid Injection? */}
      <section className="how-to-get-section py-5">
        <div className="container">
          <h2 className="text-center mb-3 pq-section-title">
            How to Get an Intratympanic Steroid Injection?
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <p className="card-text">
                  This simple and straightforward procedure requires less than an
                  hour and is performed in the outpatient department, making it a
                  day procedure.
                </p>
                <ol className="key-points">
                  <li>
                    The patient is given a topical local anesthesia to ensure
                    comfort.
                  </li>
                  <li>
                    Once the eardrum (tympanic membrane) gets numb, the injection
                    is injected into the middle ear using a needle.
                  </li>
                  <li>
                    The patient is asked to lay down still for 20-30 minutes to
                    avoid the leaking of the injection out of the ear.
                  </li>
                  <li>Once this is done, the patient is free to go.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="info-section bg-success text-white text-center ">
        <h2 className="fw-bold text-center text-white">Questions on Success rate?</h2>
      </section>
      {/* Section 5: Pre- and Post-Care Essentials */}
      <section className="care-essentials-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-3 pq-section-title">
            Pre- and Post-Care Essentials of an Intratympanic Steroid Injection
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <h2 className="card-subtitle text-success mb-3">Before Treatment</h2>
                <ul className="key-points">
                  <li>
                    The person is given local anesthesia and might feel a little
                    dizzy post the administration of the injection, hence is
                    asked to be accompanied by someone.
                  </li>
                  <li>
                    Wax and debris need to be cleared or cleaned to have better
                    visualization by the doctor to determine the cause or need of
                    the injection.
                  </li>
                </ul>

                <h2 className="card-subtitle text-success mb-3 mt-4">After Treatment</h2>
                <ul className="key-points">
                  <li>
                    The patient is asked to stay still or lay down for 20-30
                    minutes after the administration of the injection to avoid
                    leakage.
                  </li>
                  <li>
                    The person is advised not to yawn for 20-30 minutes.
                  </li>
                  <li>Speaking is to be avoided for 20-30 minutes post the administration.</li>
                  <li>
                    The person is strictly advised not to swallow during these 30
                    minutes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Benefits of Getting an Intratympanic Steroid Injection */}
      <section className="benefits-section py-5">
        <div className="container">
          <h2 className="text-center mb-3 pq-section-title">
            Benefits of Getting an Intratympanic Steroid Injection
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <ul className="key-points">
                  <li>Since the procedure is non-invasive, there is no possible tissue damage.</li>
                  <li>The procedure is simple and targeted.</li>
                  <li>The cost is relatively low.</li>
                  <li>An overall improvement is seen in the mental, physical, and emotional well-being of the person.</li>
                  <li>Reduced symptoms of vertigo or imbalance.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Cost of an Intratympanic Steroid Injection in Delhi */}
      <section className="cost-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-3 pq-section-title">
            Cost of an Intratympanic Steroid Injection in Delhi
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow-sm p-4">
                <p className="card-text">
                  The cost of getting an intratympanic steroid injection may
                  depend on these factors:
                </p>
                <ul className="key-points">
                  <li>The choice of treatment city and hospitals.</li>
                  <li>Hospitalization fees depend on the facility.</li>
                  <li>The severity of the condition influences the treatment cost.</li>
                  <li>The age and health condition of the patient determine how complex the treatment should be.</li>
                  <li>Post-surgical care and hospital visits add up to expenses.</li>
                  <li>Based on the expertise and experience of the surgeon, the fees change.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
};

export default IntratympanicInjection;