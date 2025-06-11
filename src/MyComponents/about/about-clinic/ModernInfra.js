import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import about2 from "../about-the-doctor/images/about2.jpg";
import icon1 from "../about-clinic/images/m1.webp";
import icon2 from "../about-clinic/images/medical-team.png";
import icon3 from "../about-clinic/images/m3.webp";
import icon4 from "../about-clinic/images/s2.webp";

const ModernInfra = () => {
  return (
    <section className="best-services">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 pe-xl-5">
            <img src={about2} className="img-fluid wow fadeInLeft" alt="home" />
          </div>
          <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
            <div className="pq-section pq-style-1 text-left">
              <span className="pq-section-sub-title">
                Modern Infrastructure
              </span>
              <h2 className="pq-section-title">we care for you</h2>
              <div className="Service-box">
               
                <div className="service-item">
                  <img
                    src={icon1}
                    alt="Personal Care"
                    className="service-icon"
                  />
                  <div>
                    <h6 className="pq-section-heighlight">
                      Modern prescription handling
                    </h6>
                    <p className="pq-section-description">
                      No more guesswork at the chemist or wrong medication
                      <br></br> Keep printout as record<br></br> Also shared on
                      WhatsApp<br></br> No need to bring your old prescriptions
                      to us– we have our record
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
                      Polite and experienced dedicated staff
                    </h6>
                    <p className="pq-section-description">
                      Dedicated to caring for ENT patients
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
                    <h6 className="pq-section-heighlight">
                      Sanitized Premises
                    </h6>
                    <p className="pq-section-description">
                      Premises are thoroughly sanitized regularly and repeatedly
                      <br></br>
                      Instruments are thoroughly autoclaved and safe.<br></br>{" "}
                      Masks and gloves are worn where needed<br></br> Hand
                      Sanitizers available at entrance.
                    </p>
                  </div>
                </div>
                
                <div className="service-item">
                  <img
                    src={icon4}
                    alt="State of the Art"
                    className="service-icon"
                  />
                  <div>
                    <h6 className="pq-section-heighlight">
                      Convenient location
                    </h6>
                    <p className="pq-section-description">
                      Easy to find location in Vasant Vihar- Lane Opposite
                      Vasant Vihar Club & Clinic opposite the Shri Ram School
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernInfra;
