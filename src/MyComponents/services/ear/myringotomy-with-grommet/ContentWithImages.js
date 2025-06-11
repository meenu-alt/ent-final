import React from 'react';
import myringotomy1 from '../image/audio1.jpeg';
import myringotomy2 from '../image/ear4.jpg';
import myringotomy3 from '../image/ear5.jpg';

export default function Myringotomy() {
  return (
    <div className="service pt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="pq-section pq-style-1 text-center">
              <span className="pq-section-sub-title">Myringotomy with Grommet Insertion in Delhi</span>
              <h2 className="pq-section-title">Fluid in Ear Treatment</h2>
              <p>Relief from Chronic Ear Fluid and Infections with Myringotomy Surgery</p>
            </div>
          </div>
        </div>

        <div className="content p-3">
          <p><strong>If you are suffering from persistent ear infections or fluid buildup in the ear, Myringotomy with grommet insertion could be the solution. Safe, effective, and performed under expert care at MedFirst ENT Centre, Delhi.</strong></p>
          
          <h2>What is Myringotomy?</h2>
          <p>Myringotomy is usually performed as an outpatient procedure. General anaesthesia is preferred in children, while local anaesthesia suffices for adults. The ear is cleaned and a small incision made in the eardrum. Any fluid that is present is then aspirated, the tube of choice inserted, and the ear packed with cotton to control any slight bleeding that might occur. This is known as conventional (or cold knife) myringotomy and usually heals in one to two days.</p>
          <ul>
            <li>Done under general anaesthesia for children and local anaesthesia for adults</li>
            <li>Usually performed as a daycare procedure</li>
            <li>Recovery is quick with minimal discomfort</li>
          </ul>
        </div>

        <div className="row">
          {[myringotomy1, myringotomy2, myringotomy3].map((image, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-xl-4 pt-4">
              <div className="pq-service-box pq-style-1">
                <div className="pq-service-block">
                  <div className="pq-service-img">
                    <img src={image} className="img-fluid" alt="Myringotomy procedure" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="content p-3">
          <h2>Why is Myringotomy Needed? (Indications)</h2>
          <ul>
            <li>Fluid in the ears for more than three or four months following an ear infection</li>
            <li>Fluid in the ears and more than three months with or without hearing loss</li>
            <li>Repeated ear infections that do not improve with antibiotics over several months</li>
            <li>Accumulation of blood in the ear following an infection or trauma</li>
            <li>Persistent pain in the ear due to pus build up</li>
            <li>For injecting intra tympanic medication</li>
            <li>For any other reason as specified from time to time</li>
          </ul>

          <h2>Benefits of Myringotomy</h2>
          <ul>
            <li> Reduction in pain</li>
            <li> Improved hearing</li>
            <li> Safe ear</li>
            <li> Reduced risk of intracranial infections</li>
            <li> Preventing collapse/retraction of the eardrum</li>
          </ul>

          <h2>Risks of Not Having the Surgery</h2>
          <ul>
            <li>Retraction of the eardrum</li>
            <li>Perforation of the eardrum</li>
            <li>Spread of infection and complications like labyrinthitis</li>
            <li>Increasing hearing loss</li>
            <li>In children, prolonged hearing loss leads to impairment in learning and cognitive functioning</li>
          </ul>

          <h2>Before the Surgery</h2>
          <ul>
            <li>Admit in the hospital minimum 3-4 hours prior to surgery</li>
            <li>Come empty stomach (no food/water for 6 hours prior)</li>
            <li>Morning medications can be taken with sips of water</li>
            <li>Do not take diabetes medications (OHA/insulin) before surgery</li>
            <li>Blood thinners need to be stopped 1 week prior or as advised</li>
          </ul>

          <h2>After the Surgery</h2>
          <ul>
            <li>Drowsiness/sleepiness for a few hours post-anaesthesia</li>
            <li>Liquids started after 4 hours, diet built up gradually</li>
            <li>Blood-soaked fluid may come from the operated ear for a few days</li>
            <li>Follow-up visits to OPD as advised</li>
          </ul>

          <h2>Possible Risks and Complications</h2>
          <p>While majority of patients have an uneventful surgery and recovery, few cases may be associated with complication. These are seen infrequently and not all the ones listed below are applicable to one individual. However it is important that you are aware of the complications/risks that may arise out of this procedure which are as below:
            
</p>       <p> <b>Note: The listed risks and complications are not all inclusive.</b></p>
          <ul>
            <li>Vomiting, dizziness, vertigo</li>
            <li>Difficulty passing urine, may need catheterization</li>
            <li>Persistent perforation if grommet doesn't heal well</li>
            <li>Grommet may stay in longer or migrate</li>
            <li>Recurrence of infection/blockage after extrusion</li>
            <li>Allergic reactions to medications</li>
            <li>Need for revision surgery in select cases</li>
            <li>Residual perforation after extrusion</li>
            <li>Retention of grommet</li>
            <li>Migration of grommet into the middle ear</li>
            <li>Blockage of grommet by blood clot or thick secretions</li>
            <li>Re-surgery due to any complications</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .pq-fancy-box.pq-style-3 {
          padding: 10px 45px !important;
          transition: all 0.5s ease;
          background: var(--white-color);
          overflow: hidden;
          position: relative;
          border-radius: 3px;
        }
        .pq-applyform .form-select:hover {
          box-shadow: none !important;
        }
        .pq-applyform .form-select {
          box-shadow: none !important;
        }
        
        .service {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f9f9f9;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        
        .pq-section {
          margin-bottom: 40px;
        }
        
        .pq-section-sub-title {
          display: block;
          font-size: 18px;
          color: #0F995F;
          margin-bottom: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .pq-section-title {
          font-size: 36px;
          font-weight: 700;
          color: #222;
          margin-bottom: 15px;
        }
        
        .pq-section p {
          font-size: 18px;
          color: #666;
          margin-bottom: 0;
        }
        
        .content {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
          padding: 25px;
        }
        
        .content h2 {
          color: #505050;
          font-size: 28px;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f0f0f0;
        }
        
        .content p {
          font-size: 16px;
          color: #555;
          margin-bottom: 20px;
        }
        
        .content p strong {
          color: #333;
        }
        
        .content ul {
          padding-left: 20px;
          margin-bottom: 20px;
        }
        
        .content ul li {
          margin-bottom: 10px;
          font-size: 16px;
          color: #555;
          position: relative;
          padding-left: 25px;
        }
        
        .content ul li:before {
          content: "•";
          color: #0F995F;
          font-size: 20px;
          position: absolute;
          left: 0;
          top: -2px;
        }
        
        /* Benefits list specific styling */
        .content ul li:has() {
          color: #2a7f2a;
        }
        
        /* Image styling */
        .pq-service-img img {
          border-radius: 8px;
          width: 100%;
          height: auto;
          object-fit: cover;
          transition: transform 0.3s ease;
          max-height: 250px;
        }
        
        .pq-service-img img:hover {
          transform: scale(1.02);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .pq-section-title {
            font-size: 28px;
          }
          
          .pq-section-sub-title {
            font-size: 16px;
          }
          
          .content {
            padding: 20px;
          }
          
          .content h2 {
            font-size: 24px;
          }
        }
        
        @media (max-width: 576px) {
          .pq-section-title {
            font-size: 24px;
          }
          
          .pq-section p {
            font-size: 16px;
          }
          
          .content {
            padding: 15px;
          }
          
          .row {
            flex-direction: column;
          }
          
          .col-lg-4 {
            width: 100%;
            padding-bottom: 15px;
          }
        }
      `}</style>
    </div>
  );
}