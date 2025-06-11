import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css"; // Import the CSS file for styling

const faqs = [
  {
    question: "How do I clean my ears?",
    answer:
      "You can put anything into your ears to clean them as long it is bigger than your elbow!” Yes, it’s true – your ears do not require cleaning, wax dose not need to be removed – it is a protective secretion of the ear canal.",
  },
  {
    question:
      "I tend to sneeze whenever I wake up in the morning or on leaving an air-conditioned room. What can I do for that?",
    answer:
      "This is related to sudden change in temperature, which may lead to sneezing or watery discharge from the nose. As a precaution avoid sudden changes in temperature e.g. switch off the car AC a minute before you are to get off, similarly with the room AC.",
  },
  {
    question:
      "Doctor, I get a constant irritation in my throat. What can I do for that?",
    answer:
      "For constant irritation/ general dryness in the throat kindly gargle with warm saline once after brushing your teeth in the morning and once just before going to sleep at night.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="pq-section pq-style-1 text-center">
              <span className="pq-section-sub-title">FAQ</span>
              <h2 className="pq-section-title">Frequently Asked Question</h2>
            </div>

            <div className="col-xl-12 mt-xl-0 mt-5 ps-xl-3">
              <div className="pq-accordion-block mt-4">
                {faqs.map((faq, index) => (
                  <div
                    className={`pq-accordion-box ${
                      activeIndex === index ? "active" : ""
                    }`}
                    key={index}
                  >
                    <div
                      className="pq-ad-title"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h4 className="ad-title-text">
                        {faq.question}
                        <i
                          className={`fa ${
                            activeIndex === index
                              ? "fa-chevron-up"
                              : "fa-chevron-down"
                          }`}
                        ></i>
                      </h4>
                    </div>
                    <div
                      className={`pq-accordion-details ${
                        activeIndex === index ? "open" : ""
                      }`}
                    >
                      <p className="pq-detail-text">{faq.answer}</p>
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
};

export default FAQ;