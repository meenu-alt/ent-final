import React, { useState } from 'react';
import './Faq.css'; // Import CSS for styling

export default function MainFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section className="faq">
        <div className="container py-4">
          <div className="row">
            {/* Section Heading */}
            <div className="pq-section pq-style-1 text-center">
              <span className="pq-section-sub-title">COMMON QUERIES</span>
              <h2 className="pq-section-title">Frequently Asked Question</h2>
            </div>

            {/* EARS Section */}
            <div className="col-xl-12 mt-xl-0 mt-5 ps-xl-3 pb-4">
              <h2 className=" faq-heading pq-section-title">EARS</h2>
              <div className="pq-accordion-block mt-4">
                {[1, 2, 3].map((index) => (
                  <div className={`pq-accordion-box ${activeIndex === index ? 'active' : ''}`} key={index}>
                    <div className="pq-ad-title" onClick={() => toggleAccordion(index)}>
                      <h4 className="ad-title-text">
                        {index === 1 && "How do I clean my ears?"}
                        {index === 2 && "Is it OK to put oil etc in my ears?"}
                        {index === 3 && "Is it OK to listen to MP3 player with headphones?"}
                        <i className={`fa ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                      </h4>
                    </div>
                    <div className={`pq-accordion-details ${activeIndex === index ? 'open' : ''}`}>
                      <p className="pq-detail-text">
                        {index === 1 && "You can put anything into your ears to clean them as long it is bigger than your elbow! Yes, it’s true – your ears do not require cleaning, wax does not need to be removed – it is a protective secretion of the ear canal."}
                        {index === 2 && "Your ear is not a cooking range - kindly avoid putting oil, and other exotic substances like garlic extract, badaam rogan etc into it! In a tropical country like India, this is likely to lead to a serious fungal infection."}
                        {index === 3 && "Avoid listening to MP3 players etc (with headphones) at very high volumes for prolonged intervals – these are likely to damage your hearing. If you cannot hear conversation around you while you are listening to the music, it may be too loud, kindly reduce volume."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NOSE Section */}
            <div className="col-xl-12 mt-xl-0 mt-5 ps-xl-3 pb-4">
              <h2 className=" faq-heading pq-section-title">NOSE</h2>
              <div className="pq-accordion-block mt-4">
                {[4, 5].map((index) => (
                  <div className={`pq-accordion-box ${activeIndex === index ? 'active' : ''}`} key={index}>
                    <div className="pq-ad-title" onClick={() => toggleAccordion(index)}>
                      <h4 className="ad-title-text">
                        {index === 4 && "I tend to sneeze whenever I wake up in the morning or on leaving an air-conditioned room. What can I do for that?"}
                        {index === 5 && "I have a constant desire to clean my nostrils. What is the best way of doing this?"}
                        <i className={`fa ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                      </h4>
                    </div>
                    <div className={`pq-accordion-details ${activeIndex === index ? 'open' : ''}`}>
                      <p className="pq-detail-text">
                        {index === 4 && "This is related to sudden change in temperature, which may lead to sneezing or watery discharge from the nose. As a precaution, avoid sudden changes in temperature e.g., switch off the car AC a minute before you are to get off, similarly with the room AC."}
                        {index === 5 && "I find the best way to clean the nasal passages is by filling the palm of your hand with skin-warm water and inhaling through each nostril and then blowing it out."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* THROAT Section */}
            <div className="col-xl-12 mt-xl-0 mt-5 ps-xl-3 pb-4">
              <h2 className=" faq-heading pq-section-title">THROAT</h2>
              <div className="pq-accordion-block mt-4">
                {[6, 7].map((index) => (
                  <div className={`pq-accordion-box ${activeIndex === index ? 'active' : ''}`} key={index}>
                    <div className="pq-ad-title" onClick={() => toggleAccordion(index)}>
                      <h4 className="ad-title-text">
                        {index === 6 && "Doctor, I get a constant irritation in my throat. What can I do for that?"}
                        {index === 7 && "I have been told that I snore at night. This is very embarrassing when I travel – the person next to me gets disturbed. Can something be done about this?"}
                        <i className={`fa ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                      </h4>
                    </div>
                    <div className={`pq-accordion-details ${activeIndex === index ? 'open' : ''}`}>
                      <p className="pq-detail-text">
                        {index === 6 && "For constant irritation/general dryness in the throat, kindly gargle with warm saline once after brushing your teeth in the morning and once just before going to sleep at night."}
                        {index === 7 && "Snoring is a common problem. Unfortunately, it is multifactorial in causation. You will need to undergo a detailed snoring workup, which will include a sleep study to find out the extent and the causes of the problem. However, certain lifestyle modifications always help – regular physical activity, weight reduction, giving up smoking, alcohol, if at all, only in moderation."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-xl-12 mt-xl-0 mt-5 ps-xl-3">
              <div className="contact-info">
                <p>
                  In case of any further requirements, kindly call at{" "}
                  <strong>9871150032 / 9205585295 / 9810014747</strong> and fix an
                  appointment with Dr. Bhardwaj.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}