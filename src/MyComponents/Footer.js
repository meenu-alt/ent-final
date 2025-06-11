import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "../assets/images/logo-ent.png";
import "../App.css";
import "../App.js";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/animations.min.css";
import "../assets/css/responsive.css";
import "../assets/css/ionicons.min.css";
import "../assets/css/jquery.mCustomScrollbar.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/progressbar.css";

export default function Footer() {
  const navigate=useNavigate();

  return (
    <footer id="pq-footer">
      <style>
        {`
        .pq-subscribe-details span{
        font-size:30px;
        font-weight:500;
        color:black;
        }
        @media (max-width: 768px) {
   .pq-subscribe-details span{
        font-size:15px;}
  }
        }`}
      </style>
      <div className="pq-footer-style-1">
        <div className="pq-footer-top container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="pq-subscribe-details">
                <span>
                  <b>Subscribe to Our Newsletter</b>
                </span>
                <p>
                  Stay updated with the latest ENT health tips, treatment
                  options, and clinic updates. Subscribe now to receive expert
                  insights from Dr. (Major) Rajesh Bhardwaj and the ENT Delhi
                  team.
                </p>
              </div>
            </div>
            <div className="col-lg-12 align-self-center">
              <div className="pq-subscribe-from">
                <form id="form" className="form" >
                  <div className="form-fields">
                    <input
                      className="w-100 pq-bg-transparent"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      required=""
                    />
                    <input className="" type="submit" value="Subscribe" />
                  </div>
                </form>
                <p className="pt-2">
                  We’ll never share your email with anyone else.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pq-subscribe align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="pq-subscribe-bg">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-3 col-md-2">
                        <div className="pq-footer-block">
                          <img
                            src={logo}
                            className="pq-footer-logo img-fluid"
                            alt="medicate-footer-logo"
                          />
                          <p>
                            MedFirst ENT Centre is a specialist ENT clinic
                            located in Vasant Vihar, New Delhi. At the helm is
                            the city’s leading ENT surgeon Dr (Major) Rajesh
                            Bhardwaj.{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6  col-md-6">

                      <div className="mb-4">
                      <span className="footer-title px-lg-4">
                          Quick Links
                        </span>
                      </div>
                        
                        <div className="row">
                          <div className="col-lg-1 col-xl-1"></div>
                          <div className="col-xl-4 col-md-5 col-lg-4 ">
                            <div className="spacce">
                              <ul>
                                <li>
                                  <Link to="./tonsillectomy/">
                                    Tonsillectomy
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/adenoid-surgery/">
                                    Adenoidectomy
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/myringoplasty/">
                                    Myringoplasty
                                  </Link>
                                </li>
                                <li>
                                  <Link to="./myringotomy-with-grommet/">
                                    Myringotomy
                                  </Link>
                                </li>
                                <li>
                                  <Link to="./septoplasty/">Septoplasty</Link>
                                </li>
                                <li>
                                  <Link to="./turbinectomy/">Turbinectomy</Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="col-xl-7 col-md-7">
                            <div className="spacce">
                              <ul>
                                <li>
                                  <Link to="./snoring-sleep-apnea-surgery/">
                                    Snoring & Sleep Apnea Surgery
                                  </Link>
                                </li>
                                <li>
                                  <Link to="./mastoidectomy/">
                                    Mastoidectomy
                                  </Link>
                                </li>
                                <li>
                                  <Link to="./microlaryngeal-surgery-mls//">
                                    MLS
                                  </Link>
                                </li>
                                <li>
                                  <Link to="./neck-swelling-surgery/">
                                    Removal of Neck Swelling
                                  </Link>
                                </li>
                                <li>
                                  <Link to="./functional-endoscopic-sinus-surgery/">
                                    FESS
                                  </Link>
                                </li>
                                <li>
                                  <Link to="./nasal-polyp-removal/">
                                    Nasal Polypectomy
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-3  col-md-4">
                        <div className="pq-footer-block">
                        <div className="mb-4">
                        <span className="footer-title ">
                            Contact Us
                          </span>
                        </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <ul className="pq-contact">
                                <li>
                                  {" "}
                                  <i className="fas fa-phone"></i>
                                  <a href="tel:09871150032">
                                    <span>+91 98711 50032</span>
                                  </a>
                                </li>
                                <li>
                                  {" "}
                                  <i className="fas fa-phone"></i>
                                  <a href="tel:09205585295">
                                    {" "}
                                    <span>+91 92055 85295</span>
                                  </a>{" "}
                                </li>
                                <li>
                                  {" "}
                                  <i className="fa-solid fa-clock"></i>
                                  <span style={{ color: "#000000" }}>
                                    Monday To Saturday<br></br>Sunday closed
                                  </span>
                                </li>
                                <li>
                                  <i className="fas fa-map-marker"></i>
                                  <a
                                    href="https://maps.app.goo.gl/BUhoyyzGA3gPakiN7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <span>
                                      MedFirst ENT Centre D 3/14, Ground Floor
                                      Vasant Vihar New Delhi 110057
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-md-12">
                        <div className="pq-footer-social">
                          <ul>
                            <li>
                              <a href="https://www.facebook.com/medfirstentcentre" target="blank">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            {/* <li>
                              <a href="https://g.co/kgs/KjhXPQP">
                                <i className="fab fa-google"></i>
                              </a>
                            </li> */}
                            <li>
                              <a href="https://www.instagram.com/drbhardwajent/" target="blank">
                                <i className="fab fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://x.com/entdelhi" target="blank">
                                <i className="fab fa-x"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.youtube.com/@ENTDelhi" target="blank">
                                <i className="fab fa-youtube"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="display-tab d-none d-lg-block">
                        <div className="row">
                          <div className="footer-container">
                            <p className="copyright pt-3">
                            © 1999 - 2025 Medfirst ENT Centre. All Rights Reserved.
                            </p>
                            <div className="footer-links">
                              <Link to="/privacy-policy">Privacy Policy</Link>

                              <span className="separator"></span>

                              <Link to="/terms-and-conditions">
                                Terms & Conditions
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" d-block d-lg-none">
                        <div className="row">
                          <div className="col-md-7  col-12  col-sm-12">
                            <div className="footer-container">
                              <p className="copyright">
                                © 1999 - 2025 Medfirst ENT Centre. All Rights Reserved.
                              </p>
                            </div>
                          </div>
                          <div className=" col-md-5 col-12 col-sm-12">
                            <div className="footer-links">
                              <a>Privacy Policy</a>
                              <span className="separator"></span>
                              <a>Terms & Conditions</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}