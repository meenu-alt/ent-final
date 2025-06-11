import React from 'react';

import Nose from '../image/nose.jpg';
import Nose1 from '../image/nose1.jpg';

const RepairCsf = () => {
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
                <h6 className="pq-section-title text-danger">Endoscopy CSF</h6>
                <p className="text-danger">
                  Endoscopic Repair of CSF Rhinorrhoea
                </p>
                <h2 className="pq-section-title">CSF Rhinorrhoea Repair At ENT Delhi</h2>
                <p>
                  Endoscopic repair is the preferred treatment for cerebrospinal
                  fluid (CSF) rhinorrhoea, a condition that can arise
                  spontaneously or as a result of head trauma.
                </p>
                <h2 className="pq-section-subtitle sub-subtitle">
                  Evolution of CSF Rhinorrhoea Repair
                </h2>
                <p>
                  Over the past 30 years, the management of CSF leaks has
                  advanced significantly. Traditionally, craniotomy was the
                  primary approach, but it had varying success rates and
                  increased risks. The advent of endoscopic techniques has
                  revolutionized treatment, providing a less invasive and more
                  effective solution.
                </p>
              </div>
            </div>

            
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={Nose}
                className="img-fluid wow fadeInRight"
                alt="csf-repair-procedure"
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
                alt="csf-repair-procedure"
              />
            </div>

            
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h2 className="pq-section-subtitle sub-subtitle">
                  Symptoms of CSF Rhinorrhoea
                </h2>
                <ul className="key-points">
                  <li>
                    Clear, unilateral nasal discharge that worsens with bending
                    forward or performing a Valsalva manoeuvre.
                  </li>
                  <li>
                    Headache, which may indicate raised intracranial pressure
                    or meningitis.
                  </li>
                </ul>

                <h2 className="pq-section-subtitle sub-subtitle">
                  Diagnosis of CSF Leak
                </h2>
                <p>
                  A definitive diagnosis is made through laboratory tests
                  detecting CSF markers such as Beta-2 transferrin, which is a
                  highly sensitive and specific indicator. 
                </p>
                <p>
                  In most cases, imaging techniques such as CT scans or MR
                  Cisternography are used to pinpoint the location and extent
                  of the leak, aiding in precise treatment planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RepairCsf;
