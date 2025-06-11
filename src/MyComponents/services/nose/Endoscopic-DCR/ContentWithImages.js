import React from 'react';

import endoscopicdcr from './endoscopicdcr.jpg';
import endoscopicdcr1 from './endoscopicdcr1.jpeg';
import endoscopicdcr2 from './endoscopicdcr2.jpeg';

export default function EndoscopicDCR() {
  return (
    <div className="service pt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="pq-section pq-style-1 text-center">
              <span className="pq-section-sub-title">Endoscopic Dacryocystorhinostomy (DCR)</span>
              <h2 className="pq-section-title">Advanced Tear Duct Surgery in Delhi</h2>
              <p>Say Goodbye to Constant Tearing – Safe & Effective Tear Duct Surgery with Endoscopic DCR</p>
            </div>
          </div>
        </div>

        <div className="content p-3">
          <h2>What is Endoscopic DCR?</h2>
          <p>Endoscopic Dacryocystorhinostomy (DCR) is a surgical procedure performed to create a new tear drainage pathway between the lacrimal sac and the nasal cavity. This is typically done to treat tear duct obstruction causing excessive tearing (epiphora) or recurrent infections (dacryocystitis). The procedure involves opening the drainage passage for the tear between the eye and the nose. This will be done endoscopically using straight and angled endoscopes. Powered instruments like Microdebrider or Drill may be used for tissue removal or to make openings. A stent may be left inside for a variable period of time to ensure patency of the passage. Subsequent to the procedure repeat visits plus examination and syringing by the eye specialist may be required. </p>
          <p>The nose may be packed for a day or two days following the surgery. </p>
         
          <p>
          Post op visits as informed from time to time will be required as informed to the patient from time to time.
          </p>

        </div>
        <div className="row">
          {[endoscopicdcr, endoscopicdcr1, endoscopicdcr2].map((image, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-xl-4 pt-4">
              <div className="pq-service-box pq-style-1">
                <div className="pq-service-block">
                  <div className="pq-service-img">
                    <img src={image} className="img-fluid" alt="Endoscopy" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="content p-3">
          <h2>Procedure Overview</h2>
          <ul>
            <li>A tiny opening is created between the lacrimal sac and the nasal cavity</li>
            <li>Surgery is done using straight and angled endoscopes</li>
            <li>Powered tools such as a microdebrider or drill may be used</li>
            <li>A temporary stent is placed to keep the passage open</li>
            <li>Done under general anaesthesia for a pain-free experience</li>
            <li>Nasal packing may be required for a day or two</li>
          </ul>
        </div>

        <div className="content p-3">
          <h2>Why You Might Need DCR</h2>
          <ul>
            <li>Chronic watery eyes</li>
            <li>Recurrent eye or sinus infections</li>
            <li>Pain or swelling near the inner corner of the eye</li>
          </ul>
        </div>

        <div className="content p-3">
          <h2>Benefits of Endoscopic DCR</h2>
          <ul>
            <li>Minimally invasive (no external scars)</li>
            <li> Faster healing and recovery</li>
            <li> Lower risk of infection compared to external methods</li>
            <li> High success rate when performed by skilled surgeons</li>
            <li> Effective relief from constant tearing and infection</li>
          </ul>
        </div>

        <div className="content p-3">
          <h2>Potential Risks and Complications</h2>
          <ul>
            <li>Infection at the surgical site</li>
            <li>Bleeding</li>
            <li>Scarring</li>
            <li>Nasal obstruction or difficulty breathing</li>
            <li>Persistent tearing or incomplete resolution of symptoms, recurrence</li>
            <li>Damage to nearby structures, such as the eye or nasal tissues</li>
            <li>Reaction to anaesthesia</li>
            <li>Rarely, vision loss or double vision</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
