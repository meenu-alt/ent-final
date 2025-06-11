import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import Images1 from "./image/mls.jpeg";
import Images2 from "./image/mls1.jpeg";
import Images3 from "./image/mls2.jpeg";

const MLS = () => {
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
                <span className="pq-section-sub-title">Adenoid Surgery with Tube Insertion</span>
                <h2 className="pq-section-title">MLS Surgery Cost - Rs. 55,000/ (Without Laser)</h2>
                <p className="pq-section-description">
                  Microlaryngeal Surgery is performed for diseases in the pharynx and larynx.
                </p>
                <p className="pq-section-description">
                  It is commonly done to remove swellings, take biopsies, perform procedures on the vocal cords, and
                  correct subglottic stenosis. The surgery is done under general anesthesia with specialized endotracheal
                  tubes to ensure clear access to the vocal cords.
                </p>
              </div>
            </div>
            <div className="col-xl-6 pe-xl-5">
              <img src={Images1} className="img-fluid wow fadeInLeft" alt="MLS Surgery" />
            </div>
          </div>
        </div>
      </section>

      <section className="left-right-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pe-xl-5">
              <img src={Images2} className="img-fluid wow fadeInLeft" alt="Instrumentation" />
            </div>
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <span className="pq-section-sub-title">Instrumentation & Equipment</span>
                <h2 className="pq-section-title">Required Tools for MLS</h2>
                <p className="pq-section-description">
                  The surgery requires specialized equipment such as a rigid laryngoscope, operating microscope,
                  suspension system, and microdissection tools like forceps, scissors, and a knife.
                </p>
                <p className="pq-section-description">
                  In advanced cases, laser technology, bipolar cautery, coblation, and microdebrider systems may also be
                  used for precision and effective results.
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
                <span className="pq-section-sub-title">Complications & Post-Operative Care</span>
                <h2 className="pq-section-title">What to Expect After MLS Surgery?</h2>
                <p className="pq-section-description">
                  While MLS is generally safe, potential complications include bleeding, voice changes, damage to lips or
                  teeth, and incomplete removal of lesions due to anatomical challenges.
                </p>
                <p className="pq-section-description">
                  Post-operative care involves voice rest for 3-5 days, pain relief medications, steroids (if required),
                  and antacid/anti-reflux medication to reduce inflammation.
                </p>
              </div>
            </div>
            <div className="col-xl-6 pe-xl-5">
              <img src={Images3} className="img-fluid wow fadeInLeft" alt="Post-Operative Care" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MLS;
