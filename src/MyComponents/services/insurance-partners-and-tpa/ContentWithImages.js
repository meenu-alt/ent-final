import React from 'react';

import Image from './images/myringoplasty.jpeg'

export default function InsuranceAndTpa() {
  return (
    <div>
      <section>
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
              <span className="pq-section-sub-title">ENT Clinic</span>
              <h2 className="pq-section-title">Streamlined Cashless ENT Surgery with TPA Insurance Support - MedFirst ENT Centre</h2>
            </div>
          </div>
        </div>
        <div className='content p-3'>
          <p>At MedFirst ENT Centre, we prioritize our patients’ well-being and strive to make their healthcare journey as smooth as possible. We understand that managing medical expenses and insurance can be a concern for many individuals. That’s why we have partnered with a trusted Third-Party Administrator (TPA) to offer you a hassle-free and efficient way to handle your insurance claims.</p>
          <p>MedFirst ENT Centre is committed to delivering world-class care to every patient, with the support of an exceptional Third-Party Administrator (TPA) partnership. The centre aims to provide streamlined insurance processes, cashless facilities, and personalized care, ensuring an unmatched experience</p>
        </div>
        
        
         </div>
        </div>
        <div className='container'>
        <div className='row'>
          <div className='col-md-7 col-sm-12'>
            <p>The alliance with a reputable TPA is designed to make dealing with insurance hassle-free. The TPA team takes charge of insurance-related tasks, eliminating paperwork and lengthy claim processing, allowing patients to focus on their treatment and recovery. The centre offers cashless treatment facilities, ensuring patients don’t have to make upfront payments and face hassles. By providing insurance details, patients can expect a smooth and stress-free experience.</p>
            <p>The dedicated team at MedFirst works to maximize insurance coverage, reducing out-of-pocket expenses and financial burdens. The imbursement service ensures faster insurance reimbursements, helping patients manage finances effectively.</p>
            <p>
            To enhance convenience, the Cardless facility eliminates the need for physical insurance documents or cards during visits. Patients only need to provide insurance details, and the centre handles registration and billing seamlessly.
            </p>
            <p>MedFirst ENT Centre encourages patients to experience exceptional ENT healthcare supported by their esteemed TPA partnership. Prioritizing patients’ well-being and satisfaction, they welcome individuals to join them for a hassle-free and world-class healthcare journey.</p>
          </div>
          <div className='col-md-5 col-sm-12'>
          <img src={Image} className="img-fluid" />
          </div>

        </div>

        </div>
      </section>
      <section className='insure'>
      <div className='container'>
       
      <h2 className="pq-section-title text-center pb-4">Insurance Partners and TPAs</h2>
       <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
        <h6 className=" text-center"><b>INSURANCE COMPANY IN OUR PANEL</b></h6>
       <ul>
        <li>ICICI Prudential Insurance Company</li>
        <li>Future General Insurance Company</li>
        <li>Tata AIG Insurance Company</li>
        <li>SBI General Insurance Company</li>
        <li>HDFC Ergo Insurance Company</li>
        <li>IFFCO Tokio General Insurance Company</li>
        <li>Niva Bupa General Insurance Company</li>
        <li>Raheja QBE General Insurance co. Ltd.</li>
        <li>Navi General Insurance Company</li>
        <li>Kotak Mahindra General Insurance Company</li>
        <li>National General Insurance Company</li>
        <li>New India Assurance Company Ltd.</li>
        <li>The Oriental Insurance Company Ltd.</li>
        <li>United India Insurance Company Ltd.</li>
        <li>Acko General Insurance Company Ltd.</li>
       </ul>
        </div>
      
        <div className='col-lg-6 col-md-6 col-sm-12'>
        <h6  className=" text-center">TPAS IN OUR PANEL</h6>
       <ul>
       <li>Raksha TPA</li>
        <li>East West TPA</li>
        <li>Vidal & Vipul TPA</li>
        <li>Paramount TPA</li>
        <li>FHPL TPA</li>
        <li>Safeway TPA</li>
        <li>DHS TPA, DEDICATED HEALTHCARE</li>
        <li>Good Health Plan TPA</li>
        <li>Md India TPA</li>
        <li>Hiipa (Health Insurance TPA)</li>
        <li>Alinea Health Care Pvt (Formally Known As United Healthcare India Pvt Ltd)</li>
        <li>Medlassist TPA</li>
        <li>Medsave Healthcare (TPA) LTD.</li>
        <li>Park Mediclaim TPA PVT. LTD.</li>
        <li>Heritage Health TPA PVT. LTD.</li>
        <li>Ericson Health Insurance TPA</li>
        </ul>
        </div>
       </div>


      </div>
      </section>

    </div>
  );
}
