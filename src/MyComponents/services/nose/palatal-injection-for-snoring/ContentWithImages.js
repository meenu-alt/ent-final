import React from 'react';

import Nose from '../image/nose.jpg';
import Nose1 from '../image/nose1.jpg';

const PalatalInjection = () => {
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
                <h6 className="pq-section-title text-danger">Palatal Injection</h6>
                <p className="text-danger">
                  A Nonsurgical Solution for Snoring
                </p>
                <h2 className="pq-section-title">Palatal Injection for Snoring at ENT Delhi</h2>
                <p>
                  Injection snoreplasty is a minimally invasive treatment for snoring that involves injecting a hardening agent into the upper palate. This procedure, introduced by researchers at Walter Reed Army Medical Center, offers a simple and effective way to reduce snoring without surgery.
                </p>
                <h2 className="pq-section-subtitle sub-subtitle">
                  What is Injection Snoreplasty?
                </h2>
                <p>
                  Injection snoreplasty is performed on an outpatient basis under local anesthesia. A hardening agent is injected into the upper palate, creating a small blister that hardens and forms scar tissue. This tightens the soft palate, reducing the palatal flutter that causes snoring.
                </p>
              </div>
            </div>

            
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={Nose}
                className="img-fluid wow fadeInRight"
                alt="palatal-injection-procedure"
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
                alt="palatal-injection-procedure"
              />
            </div>

            
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h2 className="pq-section-subtitle sub-subtitle">
                  Who is a Candidate for Injection Snoreplasty?
                </h2>
                <ul className="key-points">
                  <li>
                    Individuals seeking a nonsurgical solution for snoring.
                  </li>
                  <li>
                    Patients must first be screened for obstructive sleep apnea (OSA) through a sleep test. If OSA is diagnosed, alternative treatments may be recommended.
                  </li>
                </ul>

                <h2 className="pq-section-subtitle sub-subtitle">
                  How is the Procedure Performed?
                </h2>
                <p>
                  The procedure begins with the application of a topical anesthetic to numb the upper palate. A hardening agent is then injected just under the skin of the upper palate, in front of the uvula. This creates a small blister that hardens within a few days, forming scar tissue and tightening the soft palate.
                </p>
                <p>
                  In some cases, the treatment may need to be repeated for optimal results. Various agents and methods, such as coblation or laser, can also be used to achieve similar outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PalatalInjection;