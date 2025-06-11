import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import about from "../about-the-doctor/images/about.jpeg";
import icon1 from "../about-clinic/images/s1.webp";
import icon2 from "../about-clinic/images/s2.webp";
import icon3 from "../about-clinic/images/s3.webp";

const BestServices = () => {
  return (
    <section className="best-services">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
            <div className="pq-section pq-style-1 text-left">
              <span className="pq-section-sub-title">Best Services</span>
              <h2 className="pq-section-title">ENT Hospital in Delhi</h2>
              <div className="Service-box">
           
                <div className="service-item">
                  <img
                    src={icon1}
                    alt="Personal Care"
                    className="service-icon"
                  />
                  <div>
                    <h6 className="pq-section-heighlight">
                      Personal care by senior experienced doctor
                    </h6>
                    <p className="pq-section-description">
                      Same doctor will see you on every visit. No juggling with
                      OPD Timings as happens in large hospitals.
                    </p>
                  </div>
                </div>

              
                <div className="service-item">
                  <img
                    src={icon2}
                    alt="On-time Appointment"
                    className="service-icon"
                  />
                  <div>
                    <h6 className="pq-section-heighlight">
                      On-time appointment and scheduling
                    </h6>
                    <p className="pq-section-description">
                      Minimum waiting time for patients with an appointment.
                    </p>
                  </div>
                </div>

                
                <div className="service-item">
                  <img
                    src={icon3}
                    alt="State of the Art"
                    className="service-icon"
                  />
                  <div>
                    <h6 className="pq-section-heighlight">State of the Art</h6>
                    <p className="pq-section-description">
                      Endoscopic cameras, microscope, accompanied by suction and
                      syringing equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 pe-xl-5">
            <img src={about} className="img-fluid wow fadeInLeft" alt="home" />
          </div>
        </div>
      </div>
    </section>
  );
};


export default BestServices;
