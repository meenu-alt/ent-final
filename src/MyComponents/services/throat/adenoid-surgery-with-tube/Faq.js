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
                        {index === 1 && "Is adenoidectomy performed on adults, or is it primarily for children?"}
                        {index === 2 && "What problems can adenoidectomy solve?"}
                        {index === 3 && "What is the cost of adenoidectomy surgery, and does insurance cover it?"}
                        {index === 4 && "How many days before will you have to be admitted for adenoidectomy?"}
                        {index === 5 && "After how many hours can you go home after Adenoidectomy surgery and when will you have to see the doctor?"}
                        <i className={`fa ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                      </h4>
                    </div>
                    <div className={`pq-accordion-details ${activeIndex === index ? 'open' : ''}`}>
                      <p className="pq-detail-text">
                        {index === 1 && "Adenoidectomy is typically associated with paediatric patients, as adenoids tend to be more prominent in children and are often a source of various health issues in this age group. However, it is not exclusive to children. In some cases, adults may also require adenoidectomy to alleviate symptoms such as chronic nasal congestion or sleep apnoea caused by enlarged adenoids. The decision to perform adenoidectomy in adults is based on individual health assessments."}
                        {index === 2 && "Typically, Nasal blockage, mouth breathing, snoring and sleep disturbed breathing are cured by the surgery. Frequent ear infections also settle down. Some form of Myofunctional therapy will have to be given to improve the nasal breathing post operatively."}
                        {index === 3 && "The cost of adenoidectomy surgery can vary significantly depending on factors like location, the complexity of the procedure, and whether it’s performed in an outpatient or hospital setting. Use of Coblation device significantly increases the cost since the wands used are single use disposable wands. In many cases, health insurance plans do cover adenoidectomy if it’s deemed medically necessary. Patients should check with their insurance provider to understand coverage specifics, including deductibles and co-pays, to determine their out-of-pocket expenses for the surgery."}
                        {index === 4 && "Ideally Adenoidectomy is a day care procedure – the patient is admitted early in the morning and usually discharged the same day."}
                        {index === 5 && "You are ready to be discharged as soon as the patient has recovered from the full effects of anaesthesia. Follow up visit usually happens on day 5 after the surgery. Precautions after the surgery include avoiding very spicy or chilly food, vigorous nose blowing, taking medication as prescribed, and avoiding going outdoors or playing in dusty areas for a few days until the tissue heals. Inform the doctor immediately in case of bleeding from the nose or mouth."}
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