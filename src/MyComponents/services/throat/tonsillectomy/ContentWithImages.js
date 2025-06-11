import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import ThroatImage1 from '../image/throat1.jpg';
import ThroatImage2 from '../image/throat2.jpg';
import ThroatImage3 from '../image/throat3.jpg';

const TonsillectomyInfo = () => {
  return (
    <>
      <Helmet>
        <title>Tonsillectomy: Professional Tonsil Removal Surgery in Delhi</title>
        <meta name="description" content="Information about tonsillectomy procedure, benefits, risks, and recovery at our ENT center in Delhi." />
      </Helmet>

      <section className="left-right-section">
        <style>
          {`
            section {
              position: relative;
              padding: 15px 0px !important;
            }
            .pq-section-title {
              color: #0F995F;
              font-weight: 600;
              margin-bottom: 15px;
            }
            .highlight-box {
              background-color: #f8f9fa;
              border-left: 4px solid #0F995F;
              padding: 20px;
              margin: 20px 0;
            }
            .warning-note {
               background-color: #f8f9fa;
              border-left: 4px solid #0F995F;
              padding: 15px;
              margin: 20px 0;
            }
            .contact-info {
              background-color: #0f995f0f;
              padding: 20px;
              border-radius: 5px;
              margin-top: 30px;
            }
          `}
        </style>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h6 className="pq-section-title text-danger">Tonsillectomy: Professional Tonsil Removal Surgery in Delhi</h6>
                <p className="text-muted">This information sheet provides general information to a person having a Tonsillectomy. It does not provide advice to the individual. It is important that the content is discussed between you and your doctor who understands your level of fitness and your medical condition.</p>
                
                <h2 className="pq-section-title">What is Tonsillectomy?</h2>
                <p>A tonsillectomy is the surgical removal of the tonsils. The tonsils are two small almond-shaped mounds of lymphatic tissue in the back of the throat. They are part of your body's immune system to fight infection and are only important during the first few years of life.</p>
                <p>This surgery is normally performed under General anaesthesia and usually requires one day of stay in hospital. But in some cases it can be done on day care basis.</p>
              </div>
            </div>

            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={ThroatImage1}
                className="img-fluid wow fadeInRight"
                alt="tonsillectomy-procedure"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="left-right-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={ThroatImage2}
                className="img-fluid wow fadeInRight"
                alt="tonsillectomy-symptoms"
              />
            </div>

            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h2 className="pq-section-title">What are the symptoms?</h2>
                <p>A tonsillectomy is usually suggested if you have:</p>
                <div className="highlight-box">
                  <p>Recurrent episodes of tonsillitis or quinsy — an infection of the tonsils which can cause a severe sore throat, high temperature and difficulty swallowing</p>
                  <p>Swollen tonsils that cause you to snore or hold your breath at night</p>
                  <p>Swollen tonsils that make it harder to breathe or swallow</p>
                  <p>Sore throats that often interrupt your work or everyday life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fess-section">
        <div className="container pq-section pq-style-1 text-left">
          <h2 className="pq-section-title">Why Choose Tonsillectomy?</h2>
          <div className="content">
            <p>If you suffer from any of the following, tonsillectomy might be the right solution for you:</p>
            
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="feature-box">
                  <h4>Chronic Tonsillitis</h4>
                  <p>Frequent infections that don't respond to antibiotics.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-box">
                  <h4>Sleep Apnea</h4>
                  <p>Enlarged tonsils causing snoring or obstructed breathing during sleep.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-box">
                  <h4>Difficulty Swallowing or Breathing</h4>
                  <p>Tonsils that block airways.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-box">
                  <h4>Recurrent Sore Throats</h4>
                  <p>Interfering with daily activities and work.</p>
                </div>
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
                <h2 className="pq-section-title">Benefits of Tonsillectomy</h2>
                <p>Removing your tonsils will prevent further episodes of tonsillitis.</p>
                <p>You may still get sore throats, but this should not occur as often and severity will be less also.</p>
                <p>Your general health may improve.</p>
                
                <h3 className="mt-4">Can everyone have a tonsillectomy?</h3>
                <p>Usually this is a very safe procedure and can be done in any patient. Only if patient is unfit for general anaesthesia or have severe bleeding disorder this surgery cannot be done. Even in these situations it can be done but only after detailed discussion with the patient about pros and cons of getting the surgery done.</p>
              </div>
            </div>

            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={ThroatImage3}
                className="img-fluid wow fadeInRight"
                alt="tonsillectomy-benefits"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="fess-section">
        <div className="container pq-section pq-style-1 text-left">
          <h2 className="pq-section-title">Risks of not having the surgery</h2>
          <div className="content">
            <div className="warning-note">
              <p>Usually recurrent episodes of tonsillitis follow which require course of antibiotics and pain killers. Sometimes even pus can accumulate in tonsils and nearby structures of throat which may cause difficulty in swallowing and in rare case difficulty in breathing. This can be life threatening.</p>
              <p>Peritonsillitis/ Peritonsillar abscess can occur. In children recurrent strep throat may predispose to Rheumatic Fever. Enlarged Tonsils cause snoring and disturbed sleep on account of Sleep Apnoea. This is a dangerous condition in children as well as adults.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="left-right-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={ThroatImage1}
                className="img-fluid wow fadeInRight"
                alt="pre-surgery-preparation"
              />
            </div>

            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h2 className="pq-section-title">Before the surgery</h2>
                <p>Some tests will be done to determine your fitness for surgery.</p>
                <p>Patient is usually admitted on the day of the surgery, or one day before.</p>
                <p>Patient has to come on an empty stomach (no food/ no water for 6 hours to prior surgery).</p>
                <p>If patient is taking any medications for Hypertension/ Hypothyroidism he/she has to take morning dose with a sip of water.</p>
                <p>Medication for diabetes (OHA+ insulin) should not be taken on the day of surgery.</p>
                <p>If you are taking any blood thinner they have to be stopped 1 week prior to surgery or as advised by your surgeon and/ or anaesthetist.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fess-section">
        <div className="container pq-section pq-style-1 text-left">
          <h2 className="pq-section-title">After the surgery</h2>
          <div className="content">
            <p>After anaesthesia usually you will feel drowsy/ sleepy for 2-3 hours.</p>
            <p>Till you become fully alert you are not given any thing to eat by mouth.</p>
            <p>Usually after 4 hours diet is started in the form of liquids which is build up over few hours.</p>
            <p>Usually after surgery cold liquids/ ice creams are given to the patient as it provides calories and reduces pain.</p>
            <p>Usually no sutures are put, if require then self-dissolvable once are given. So removal is not required.</p>
            <p>Normally a healthy slough is formed over tonsils.</p>
          </div>
        </div>
      </section>

      <section className="fess-section">
        <div className="container pq-section pq-style-1 text-left">
          <h2 className="pq-section-title">Risks of this procedure</h2>
          <div className="content">
            <div className="warning-note">
              <p>While majority of patients have an uneventful surgery and recovery, few cases may be associated with complication. These are seen infrequently not all the ones listed below are applicable to one individual. However it is important that you are aware of the complications/risks that may arise out of this procedure which are as below:</p>
              <p><em>Note: The listed risks and complications are not all inclusive.</em></p>
            </div>
            
            <div className="mt-4">
              <p>Injury to anterior pillar, Uvula, soft palate and eustachian tubes.</p>
              <p>Post-operative bleeding from surgical site which may come out from nose and mouth.</p>
              <p>Pain while eating food.</p>
              <p>Sometimes tonsils may enlarge again after surgery.</p>
              <p>Sometimes it may not be possible to remove tonsils completely.</p>
              <p>Difficulty in passing urine after the operation and may need a catheter passed into the bladder.</p>
              <p>Pus collection.</p>
              <p>Risk of wound infection, bleeding, chest infection, heart and lung complication(s) and thrombosis and these risks are higher in smokers/ obese patients.</p>
              <p>Allergic reactions to drugs or medications.</p>
              <p>Urinary tract infection.</p>
              <p>Re.surgery due to any reason mentioned above or any other reasons.</p>
              <p>Other rare risk(s)/complication(s).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="fess-section">
        <div className="container pq-section pq-style-1 text-left">
          <div className="contact-info">
            <h3 className="text-center mb-4">Contact Information</h3>
            <p className="text-center">Kindly call at +919871150032, +919205585295 | Doctor's direct number +919810014747</p>
            
            <h4 className="mt-4">When to contact your doctor:</h4>
            <p>You develop a fever over 100°F (37.8°C)</p>
            <p>You have redness, swelling, pain, bleeding or pus discharge from surgical site</p>
            <p>You become dizzy and faint</p>
            <p>You have chest pain</p>
            <p>You become short of breath</p>
            <p>Swelling over face or eyes</p>
            <p>Severe nausea or vomiting or giddiness</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TonsillectomyInfo;