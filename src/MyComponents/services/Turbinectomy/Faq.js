import React, { useState } from 'react';
import './style.css'; 

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section className="faq">
        <div className="container py-4">
          <div className="row">
            
            <div className="pq-section pq-style-1 text-center">
              <span className="pq-section-sub-title">COMMON QUERIES</span>
              <h2 className="pq-section-title">Frequently Asked Question</h2>
            </div>

            
            <div className="col-xl-12 mt-xl-0 mt-5 ps-xl-3">
              <div className="pq-accordion-block mt-4">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div className={`pq-accordion-box ${activeIndex === index ? 'active' : ''}`} key={index}>
                    <div className="pq-ad-title" onClick={() => toggleAccordion(index)}>
                      <h4 className="ad-title-text">
                        {index === 1 && "Which type of hospital or clinic will perform the Turbinoplasty Surgery, and what are their accreditations and certifications?"}
                        {index === 2 && "Will I need to take time off work or make any lifestyle adjustments during the recovery period?"}
                        {index === 3 && "Are there any post-operative care instructions or restrictions I should follow to ensure a smooth recovery?"}
                        {index === 4 && "What kind of pain or discomfort can I expect during the recovery, and how is it managed?"}
                        {index === 5 && "When should I schedule the first follow-up appointment after Turbinoplasty Surgery, and what will it involve?"}
                        <i className={`fa ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                      </h4>
                    </div>
                    <div className={`pq-accordion-details ${activeIndex === index ? 'open' : ''}`}>
                      <p className="pq-detail-text">
                        {index === 1 && "The Turbinoplasty Surgery is typically performed at specialized ENT hospitals or clinics with experienced medical teams. Our hospital/clinic has the necessary accreditations and certifications to carry out Turbinoplasty Surgery with expertise and precision."}
                        {index === 2 && "Depending on the nature of your work and the extent of the surgery, you may need to take a few days off work during the initial recovery phase. Your surgeon will provide personalized guidance on lifestyle adjustments during the recovery period."}
                        {index === 3 && "We will provide you with detailed post-operative care instructions and restrictions to follow, ensuring a smooth recovery. This may include instructions on wound care, medication usage, avoiding strenuous activities, and nasal hygiene. We have our own YouTube channel with demonstrative videos carrying all relevant information."}
                        {index === 4 && "Pain and discomfort after Turbinoplasty Surgery are typically manageable with prescribed pain medications. You may experience mild to moderate discomfort, which should subside gradually during the recovery period."}
                        {index === 5 && "The first follow-up appointment after Turbinoplasty Surgery is usually scheduled within the next 3-5 days. During the follow-up, your surgeon will assess the healing progress, remove any nasal packing if used, and answer any questions or concerns you may have."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
            <div className="col-xl-12 mt-xl-0 mt-5 ps-xl-3">
              <div className="pq-accordion-block mt-4">
                {[6, 7, 8, 9, 10, 11].map((index) => (
                  <div className={`pq-accordion-box ${activeIndex === index ? 'active' : ''}`} key={index}>
                    <div className="pq-ad-title" onClick={() => toggleAccordion(index)}>
                      <h4 className="ad-title-text">
                        {index === 6 && "How will the medical team support me during the recovery phase if I have any questions or concerns?"}
                        {index === 7 && "Is the cost of Turbinoplasty Surgery covered by health insurance, and if not, what payment methods do you accept?"}
                        {index === 8 && "Can you assist in coordinating with my TPA to process insurance claims for Turbinoplasty Surgery?"}
                        {index === 9 && "Does the hospital or clinic work with third-party administrators (TPAs) for insurance claims?"}
                        {index === 10 && "How long does it typically take for the TPA to process the insurance claim for Turbinoplasty Surgery?"}
                        {index === 11 && "Will the hospital or clinic communicate directly with the TPA regarding the insurance coverage and claims?"}
                        <i className={`fa ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                      </h4>
                    </div>
                    <div className={`pq-accordion-details ${activeIndex === index ? 'open' : ''}`}>
                      <p className="pq-detail-text">
                        {index === 6 && "Our dedicated medical team is available throughout your recovery phase to support you and address any questions or concerns you may have. You can reach out to us through scheduled follow-up appointments or our contact channels."}
                        {index === 7 && "The coverage of Turbinoplasty Surgery by health insurance may vary depending on your specific insurance plan. Our hospital/clinic accepts various payment methods, and our patient care team can guide you on available options."}
                        {index === 8 && "Yes, we can assist in coordinating with your Third Party Administrator (TPA) to process insurance claims for Turbinoplasty Surgery. Please provide us with the necessary information, and we will work with your TPA to ensure a smooth claim process."}
                        {index === 9 && "Our hospital/clinic collaborates with third-party administrators (TPAs) for insurance claims. We have experience in handling insurance procedures to ease the process for our patients."}
                        {index === 10 && "The typical duration for the TPA to process the insurance claim for Turbinoplasty Surgery may vary depending on the TPA’s policies and workload. We will ensure that all necessary documents are provided promptly to expedite the process."}
                        {index === 11 && "Yes, we communicate directly with the TPA regarding the insurance coverage and claims for Turbinoplasty Surgery to ensure a seamless process for our patients. We strive to make the insurance claim process as hassle-free as possible for you."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}