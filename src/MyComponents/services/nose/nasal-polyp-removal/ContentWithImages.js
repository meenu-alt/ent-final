import React from 'react';

import Nose from '../image/nose.jpg';
import Nose1 from '../image/nose1.jpg';

const NasalPolypRemoval = () => {
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
                src={Nose}
                className="img-fluid wow fadeInLeft"
                alt="post-op-care"
              />
            </div>
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h2 className="pq-section-title">Nasal Polyp Removal</h2>
                <p className="pq-section-description">
                Persons who have chronic allergies of the nose associated with frequent colds or infections are prone to developing nasal polyps. Nasal Polyps are like grape like clusters which accumulate inside the nasal passage and gradually grow with time. 


                </p>
              <p>
              On presentation to the ENT Specialist you will be evaluated, including a nasal endoscopic evaluation.. Once a diagnosis is reached the Specialist will ask for some tests one of which will be a CT Scan
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
                <h2 className="pq-section-title">Nasal Polyp Removal​​ At ENT Delhi</h2>
                <p className="pq-section-description">
                Before considering surgery for nasal polyps, we try to shrink or eliminate them with other treatments. Along with saline rinses to improve mucus flow and remove irritants, you may use steroid nasal sprays, steroid pills, and/or injections of biologic drugs. The goal of these treatments is to shrink the polyps so you can breathe easier.

                </p>
               <p>
                
               Surgery can prevent rare but serious problems that can result from nasal polyps. These include complex sinusitis, which can lead to bone loss and pockets of infection. These abscesses can grow around your eye socket and brain. Mucin balls of Allergic Fungal Sinusitis also need to be removed surgically
               </p>
              </div>
            </div>
            <div className="col-xl-6 pe-xl-5">
              <img
                src={Nose1}
                className="img-fluid wow fadeInLeft"
                alt="nasal-polypectomy"
              />
            </div>
          </div>
        </div>
      </section>



      <section className="fess-section pt-0 pb-0">
        <div className="container pq-section pq-style-1 text-left">
          <h2 className="pq-section-title">Navigating Nasal Polypectomy: The MedFirst Advantage</h2>
          <div className="content">
            <p>
              
                Choosing the right ENT clinic and surgeon for nasal polypectomy is a pivotal decision, and MedFirst ENT Centre emerges as an exemplary choice for multiple reasons. With TPA support and affiliation with top health insurance companies, the clinic ensures a streamlined and hassle-free financial process for patients, alleviating concerns about healthcare costs. Moreover, MedFirst’s commitment to comprehensive care is evident through its advanced setup, encompassing thorough diagnosis and the utilization of the latest techniques in nasal polypectomy. This dedication to staying at the forefront of medical advancements underscores the clinic’s commitment to providing state-of-the-art treatments for optimal patient outcomes.</p>

                 <p>What distinguishes MedFirst ENT Centre is its holistic approach to patient well-being. Beyond surgical intervention, the clinic prioritizes individualized treatment plans, ensuring that patients receive personalized care throughout the entire process of nasal polypectomy. From preoperative assessments to postoperative care and regular follow-ups, MedFirst’s team of experienced ENT specialists offers compassionate and attentive support, reinforcing the clinic’s reputation as a reliable and patient-centric choice for those seeking effective treatment and lasting relief from nasal polyps.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NasalPolypRemoval;
