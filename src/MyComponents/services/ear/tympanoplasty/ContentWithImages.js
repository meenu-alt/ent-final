import React from 'react';
import tympanoplasty1 from './tympanoplasty1.jpeg'; // Add your image paths
import tympanoplasty2 from './tympanoplasty2.jpeg';
import tympanoplasty3 from './tympanoplasty3.jpeg';

export default function Tympanoplasty() {
  return (
    <div className="service pt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="pq-section pq-style-1 text-center">
              <span className="pq-section-sub-title">Tympanoplasty Surgery</span>
              <h2 className="pq-section-title">Eardrum Hole Repair by Expert ENT Surgeons in Delhi</h2>
              <p>Restore Your Hearing with Safe & Effective Eardrum Repair Surgery</p>
            </div>
          </div>
        </div>

        <div className="content p-3">
          <h2>What is Tympanoplasty?</h2>
          <p>Tympanoplasty is the surgical repair of the hole in the eardrum (Tympanic Membrane) with or without the repair of the chain of bones (ossicles - which help in sound transmission to the inner ear) in the middle ear, depending on the condition. Repair of the ossicular chain is called Ossiculoplasty.</p>
          <p>This procedure can be done through the ear or an incision behind the ear using an Endoscope or Microscope. Myringoplasty refers specifically to the repair of the eardrum.</p>
          <p>For repair, a piece of tissue known as a graft is taken from the ear or behind it. Sometimes, fat from the ear lobule or cartilage from the ear is used, requiring an additional incision. With the graft's support, the eardrum heals and the hole closes. To fix defects in the ossicles, cartilage, an ossicle, or a prosthesis (metallic/plastic) may be used. Also, the aeration pathway to the middle ear is opened if blocked.</p>
        </div>

        <div className="row">
          {[tympanoplasty1, tympanoplasty2, tympanoplasty3].map((image, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-xl-4 pt-4">
              <div className="pq-service-box pq-style-1">
                <div className="pq-service-block">
                  <div className="pq-service-img">
                    <img src={image} className="img-fluid" alt="Tympanoplasty" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="content p-3">
          <h2>Why Do You Need Tympanoplasty?</h2>
          <ul>
            <li>Recurrent ear discharge</li>
            <li>Difficulty hearing</li>
            <li>A diagnosed hole (perforation) in the eardrum</li>
            <li>Chronic ear infections (chronic otitis media)</li>
          </ul>
          <p>This procedure closes the hole, helps prevent future infections, and may improve hearing function. Small perforations may heal by themselves, but persistent ones need surgery.</p>
        </div>

        <div className="content p-3">
          <h2>How is Tympanoplasty Performed?</h2>
          <ul>
            <li>Under general or local anaesthesia</li>
            <li>Incision inside or behind the ear</li>
            <li>Graft placement on or under the eardrum</li>
            <li>Use of natural tissue or prosthesis if ossicles are reconstructed</li>
            <li>Ear packed and healing monitored over a few weeks</li>
          </ul>
        </div>

        <div className="content p-3">
          <h2>Potential Benefits of Tympanoplasty</h2>
          <ul>
            <li> Removal of chronic infection</li>
            <li> Repair of the perforation on the Tympanic Membrane</li>
            <li> Prevention of water from entering the ear and causing infection</li>
            <li> Possible improvement in hearing, depending on the type of hearing loss</li>
            <li> Mastoid bone opening if required, based on intraoperative findings</li>
          </ul>
        </div>

        <div className="content p-3">
          <h2>Risks and Complications</h2>
          <ul>
            <li>Temporary loss of sensation in the operated ear</li>
            <li>Bleeding or clot behind the ear</li>
            <li>Rare infection that could cause failure of the repair</li>
            <li>Possible failure of the graft leading to persistent perforation</li>
            <li>Ringing in the ear and dizziness (temporary or permanent)</li>
            <li>Partial or complete hearing loss (rare)</li>
            <li>No improvement in hearing despite repair (especially in tympanosclerosis)</li>
            <li>Altered taste sensation or metallic taste</li>
            <li>Facial nerve injury causing temporary or permanent weakness or paralysis</li>
            <li>Abnormal scar formation requiring further surgery</li>
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