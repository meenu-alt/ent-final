import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import "./servicesmain.css";
import Image1 from "./images/bottom.webp";
import Throat from "./images/throat.png";
import Adenoidectomy from "./images/Adenoidectomy.png";
import Ear from "./images/ear.png";
import Myringotomy from "./images/Myringotomy.png";
import Nose from "./images/nose.png";
import Neck from "./images/neck.png";

const ServicesMain = () => {
  return (
    <div className="services-container">
      {/* What We Do Section */}
      <section className="what-we-do">
        <div className="text-content">
          <h2>What We Do</h2>
          <h3>ENT Consultation, Surgeries & Treatment</h3>
          <p>
            MedFirst ENT Centre was established in 1997. Since then, it has
            undergone regular improvements to become a Centre of Excellence for
            ENT diagnosis and management in NCR.
          </p>
          <p>
            We offer ENT consultation, surgeries, audiology, speech therapy,
            deafness management, and vertigo/giddiness management.
          </p>
          <ul>
            <li>Treatment for tonsillitis, sinusitis, ear discharge</li>
            <li>Hearing problems, speech disorders, headaches</li>
            <li>Snoring, sleep apnea, thyroid issues</li>
            <li>Hearing check-up, giddiness evaluation, speech therapy</li>
          </ul>
        </div>
        <div className="image-content">
        <img src={Image1} alt="Doctor" />
        </div>
      </section>

      {/* Our Services Section */}
      <section className="our-services">
        <h2>All ENT Surgeries</h2>
        <p>
          The Centre has the facility to perform all ENT surgeries, including
          mastoidectomy, tympanoplasty, FESS, septoplasty, tonsillectomy, and
          microlaryngeal surgery.
        </p>
        <style>
          {` 
            .pq-fancy-box-icon i img {
    max-width: 20%;
    transition: transform 0.3s ease; /* Add a smooth hover effect */
  }

  .pq-fancy-box {
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .pq-fancy-box:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px); /* Lift the box on hover */
  }

  .pq-fancy-box-title {
    font-size: 1.5rem;
    color: #333;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .pq-fancybox-description {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }
    .pq-fancy-box.pq-style-1 {
    padding: 12px 12px;
    transition: all 0.5s ease;
     height: 84%;
}
.pq-fancy-box.pq-style-1 .pq-fancy-box-title {
    text-transform: capitalize;
    margin-top: 15px;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 18px;
}


          `}
        </style>
        <div className="service" style={{ paddingTop: "20px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-6 col-lg-4 col-xl-3">
                <Link to="/tonsillectomy">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img
                          src={Throat}
                          className="img-fluid"
                          alt="Tonsillectomy"
                        />
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">Tonsillectomy</h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="/adenoid-surgery">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Adenoidectomy}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">Adenoidectomy</h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="/snoring-sleep-apnea-surgery">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Nose}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">
                        Snoring & Sleep Apnea Surgery
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="/myringotomy-with-grommet">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Myringotomy}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">Myringotomy</h2>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="/septoplasty">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Nose}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">Septoplasty</h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="/turbinectomy">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Nose}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">Turbinectomy</h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="/functional-endoscopic-sinus-surgery">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Nose}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">FESS</h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="/neck-swelling-surgery">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Neck}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">
                        Removal of Neck Swelling
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="/nasal-polyp-removal">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Nose}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">Nasal Polypectomy</h2>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="/myringoplasty">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Ear}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">Myringoplasty</h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="/mastoidectomy">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Ear}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">Mastoidectomy</h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6 col-6 col-lg-4 col-xl-3 ">
                <Link to="/microlaryngeal-surgery-mls/">
                  <div className="pq-fancy-box pq-style-1 text-center">
                    <div className="pq-fancy-box-icon">
                      <i>
                        <img src={Throat}></img>
                      </i>
                    </div>
                    <div className="pq-fancy-box-info">
                      <h2 className="pq-fancy-box-title">MLS</h2>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialist Doctor */}
      <section className="our-specialist">
        <div className="doctor-info">
          <h2>Our Specialist Doctor</h2>
          <h3>Dr. (Major) Rajesh Bhardwaj</h3>
          <p>
            MBBS (AFMC), MS, DNB, DLO, DHA <br />
            Served in the Indian Army for 15 years and has extensive experience
            in ENT surgeries.
          </p>
        </div>
        <div className="doctor-image">
        <img src={Image1} alt="Doctor" />
        </div>
      </section>
    </div>
  );
};

export default ServicesMain;
