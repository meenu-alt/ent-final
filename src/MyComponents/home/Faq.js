import React, { useState } from 'react';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <style>
        {`
        
.pq-section.pq-style-1.text-center {
  text-align: center;
  margin-bottom: 40px;
}

.pq-section-sub-title {
  font-size: 18px;
  color: #666;
  display: block;
  margin-bottom: 10px;
}

.pq-section-title {
  font-size: 28px;
  color: #333;
  font-weight: 600;
}


.pq-accordion-block {
  width: 100%;
}

.pq-accordion-box {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.pq-accordion-box.active {
  border-color: #239857;
}

.pq-ad-title {
  padding: 15px;
  background-color: #f9f9f9;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ad-title-text {
  font-size: 16px;
  color: #333;
  margin: 0;
  flex: 1;
}

.pq-accordion-details {
  padding: 0 15px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.pq-accordion-details.open {
  padding: 15px;
  max-height: 500px; 
}

.pq-detail-text {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.fa {
  font-size: 14px;
  color: #239857;
  transition: transform 0.3s ease;
}

.fa-chevron-down {
  transform: rotate(0deg);
}

.fa-chevron-up {
  transform: rotate(180deg);
}
.pq-accordion-block .pq-accordion-box .pq-accordion-details {
  padding: 0 20px  !important;
  border: 1px solid var(--grey-color);
  border-top: 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
`}
      </style>
      <section className="faq">
        <div className="container py-4">
          <div className="row">
            <div className="pq-section pq-style-1 text-center">
              <span className="pq-section-sub-title">COMMON QUERIES</span>
              <h2 className="pq-section-title">Frequently Asked Question</h2>
            </div>
            
            <div className="col-xl-12 mt-xl-0 ps-xl-3">
              <div className="pq-accordion-block mt-4">
                {[ 
                  { question: "What services does ENT Delhi offer?", answer: "ENT Delhi offers a range of services, including ENT surgeries (like tonsil removal, FESS, septoplasty), audiology, hearing aids, speech therapy, allergy management, vertigo treatment, and endoscopic evaluations for nose, throat, and ear conditions." },
                  { question: "Who is Dr. (Major) Rajesh Bhardwaj?", answer: "Dr. (Major) Rajesh Bhardwaj is an experienced ENT specialist with over 35 years of medical practice. He served in the Indian Army for 15 years and has worked in prominent military hospitals before founding ENT Delhi." },
                  { question: "What types of ENT surgeries are performed at ENT Delhi?", answer: "ENT Delhi specializes in surgeries such as mastoidectomy, tympanoplasty, functional endoscopic sinus surgery (FESS), septoplasty, turbinate reduction, and sleep apnea surgery, among others." },
                  { question: "Do you provide hearing aid services?", answer: "Yes, we provide comprehensive audiology services, including hearing tests and the fitting of hearing aids, to help individuals with hearing impairments." },
                  { question: "What is Functional Endoscopic Sinus Surgery (FESS)?", answer: "FESS is a minimally invasive surgery used to treat chronic sinusitis and other sinus-related problems. It uses an endoscope to remove blockages and improve airflow in the sinuses." },
                ].map((item, index) => (
                  <div className={`pq-accordion-box ${activeIndex === index ? 'active' : ''}`} key={index}>
                    <div className="pq-ad-title" onClick={() => toggleAccordion(index)}>
                      <h4 className="ad-title-text">
                        {item.question}
                        <i className={`fa ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                      </h4>
                    </div>
                    <div className={`pq-accordion-details ${activeIndex === index ? 'open' : ''}`}>
                      <p className="pq-detail-text">{item.answer}</p>
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
