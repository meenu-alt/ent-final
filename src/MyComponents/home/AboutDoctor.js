import React from 'react';
import aboutimg from "./images/Dr-Rajesh-Bhardwaj..ba39b548b45da76b6b4f.png";

export default function AboutDoctor() {
  return (
      <section className="pq-home2-about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mt-4 mt-lg-0 contentr-button">
              <div className="pq-section pq-style-1 text-left">
                <span className="pq-section-sub-title">About the Doctor</span>
                <h1
                  className="pq-section-title"
                  style={{     color: '#131313bd'
                    , fontSize: '45px' }}
                >
                  ENT Consultation, Surgeries & Treatment
                  {/* Dr. (Major) Rajesh Bhardwaj MBBS (AFMC), MS, DNB, DLO, DHA */}
                </h1> <br/>
                <p className="pq-section-description">
                MedFirst ENT Centre was established in 1997. Since then it has undergone regular improvements and upgradation to become a centre of excellence for the diagnosis and management of ENT disorders in the NCR. We get  patients from all over India and overseas as well.
We offer the latest technology and equipment and expertise in the management of ENT diseases.


                </p>
                <p><b>Dr. (Major) Rajesh Bhardwaj
                MBBS (AFMC), MS, DNB, DLO, DHA</b></p>
              </div>

              <a className="pq-button pq-button-flat" href="about-us.html">
                <div className="pq-button-block">
                  <span className="pq-button-text">Read More</span>{' '}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </a>
            </div>

            <div className="col-lg-5">
              <div className="about-us-img">
                <img
                  src={aboutimg}
                  className="img-fluid pq-image1 wow fadeInRight"
                  alt="home"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

