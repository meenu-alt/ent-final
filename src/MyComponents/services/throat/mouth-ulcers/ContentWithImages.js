import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import MouthUlcer from "../image/throat4.jpg";

const MouthUlcers = () => {
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
            <div className="col-xl-6 pe-xl-5">
              <img
                src={MouthUlcer}
                className="img-fluid wow fadeInLeft"
                alt="mouth-ulcers"
              />
            </div>
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h6 className="pq-section-title">All About Mouth Ulcers</h6>
                <p className="pq-section-description">
                  Mouth ulcers, also known as canker sores or aphthous ulcers, are painful lesions that appear in the oral cavity. These sores can develop on the inside of the mouth or at its base, causing discomfort, especially while eating or speaking.
                </p>
                <p>
                  These ulcers are more common in women and adolescents, particularly those between the ages of 10 and 24. While they are usually harmless and not cancerous, they can be bothersome. In most cases, mouth ulcers heal on their own within one to two weeks without requiring medical intervention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="left-right-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h2 className="pq-section-title">Symptoms & Diagnosis</h2>
                <p className="pq-section-description">
                  Mouth ulcers can present with various symptoms, making it easier to identify them early. Recognizing these signs can help in managing the discomfort effectively.
                </p>
                <p>
                  <strong>Common Symptoms:</strong>
                  <ul>
                    <li>Painful sores inside the mouth.</li>
                    <li>A tingling or burning sensation before the sores appear.</li>
                    <li>Ulcers that are round, white, or grey with a red inflamed border.</li>
                    <li>In severe cases, fever and swollen lymph nodes may also occur.</li>
                  </ul>
                </p>
                <p>
                  <strong>Diagnosis:</strong>
                  <br />
                  Mouth ulcers are typically diagnosed through a simple visual examination by a healthcare professional. They are usually distinguishable by their white or grey appearance, surrounded by red, inflamed tissue.
                </p>
              </div>
            </div>
            <div className="col-xl-6 pe-xl-5">
              <img
                src={MouthUlcer}
                className="img-fluid wow fadeInLeft"
                alt="mouth-ulcer-diagnosis"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MouthUlcers;
