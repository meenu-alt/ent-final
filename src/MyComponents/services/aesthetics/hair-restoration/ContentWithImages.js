import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import serviceImage from "../../images/services/3.jpg";

export default function HairRestoration() {
  return (
    <div className="service pt-4">
      <style>
        {`
        section {
    position: relative;
    padding: 15px 0px !important;
}`}
      </style>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="pq-section pq-style-1 text-center">
              <span className="pq-section-sub-title">Hair Restoration</span>
              <h2 className="pq-section-title">
                Advanced Solutions for Hair Restoration
              </h2>
            </div>
          </div>
        </div>
        <div className="content p-3">
          <p>
            At <strong>ENT Delhi</strong>, we specialize in providing
            comprehensive <strong>hair restoration</strong> solutions tailored
            to individual needs. Using state-of-the-art diagnostic tools, we
            assess scalp and hair health to develop customized treatment plans.
            Our clinic ensures each patient receives a{" "}
            <strong>detailed analysis</strong> for effective hair restoration.
          </p>
        </div>
        <div className="row">
          {["PRP Therapy", "Hair Transplantation", "Mesotherapy"].map(
            (service, index) => (
              <div key={index} className="col-lg-4 col-md-4 col-xl-4 pt-4">
                <div className="pq-service-box pq-style-1">
                  <div className="pq-service-block">
                    <div className="pq-service-img">
                      <img
                        src={serviceImage}
                        className="img-fluid"
                        alt={service}
                      />
                    </div>
                    <div className="pq-service-box-info">
                      <div className="pq-info-text">
                        <span className="pq-service-sub-title">{service}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="content p-3">
          <h2>What is Hair Restoration?</h2>
          <p>
            Hair restoration refers to medical and surgical treatments designed
            to combat hair loss and promote regrowth. At our center, we use
            advanced techniques to analyze scalp health and customize treatment
            plans for optimal results.
          </p>

          <h2>Our Hair Restoration Services</h2>
          <p>
            We offer a range of cutting-edge treatments to address different
            types of hair loss. Our approach ensures that patients receive
            effective and scientifically backed solutions for healthier, fuller
            hair.
          </p>

          <h2>PRP Therapy</h2>
          <p>
            Platelet-Rich Plasma (PRP) therapy involves using the patient’s own
            plasma to stimulate hair growth. This minimally invasive procedure
            enhances follicle health and promotes natural hair regeneration.
          </p>

          <h2>Hair Transplantation</h2>
          <p>
            Our clinic specializes in advanced hair transplantation techniques,
            including Follicular Unit Extraction (FUE) and Follicular Unit
            Transplantation (FUT), to restore hair density effectively.
          </p>

          <h2>Mesotherapy</h2>
          <p>
            Mesotherapy is a non-surgical treatment that delivers essential
            nutrients directly to the scalp, improving hair strength and growth.
            This therapy enhances scalp circulation and revitalizes hair
            follicles.
          </p>
        </div>
      </div>
    </div>
  );
}
