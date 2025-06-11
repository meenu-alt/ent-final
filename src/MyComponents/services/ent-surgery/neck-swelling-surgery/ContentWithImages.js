import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import NeckSwellingSurgery from "./image/neckswelling.jpeg";
import NeckSwellingSurgery1 from "./image/neckswelling1.jpeg";
import NeckSwellingSurgery2 from "./image/neckswelling2.jpeg";

const RemovalOfNeckSwelling = () => {
  return (
    <>
      <Helmet>
        <title>Neck Swelling Surgery | Expert Treatment in Delhi</title>
        <meta name="description" content="Professional excision of neck swellings and lymph nodes by experienced ENT surgeons in Delhi. Minimally invasive procedures with quick recovery." />
      </Helmet>

      <div className="neck-swelling-service">
        <div className="container">
          {/* Hero Section */}
          <div className="neck-hero-section">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="neck-hero-content">
                  <span className="section-subtitle">Excision of Swelling/Node in the Neck</span>
                  <h1 className="section-title">Professional Treatment in Delhi</h1>
                  <h2 className="section-subtitle-main">ENT Delhi - Comprehensive Care for Neck Swelling and Lymph Node Issues</h2>
                  <img src={NeckSwellingSurgery} className="img-fluid mobile-img" alt="Neck Swelling Surgery" />
                  <p className="section-description">
                    Excision of the swelling or node is a surgical procedure performed to remove enlarged lymph nodes or any abnormal swelling in the neck. Swellings can arise from lymph nodes, salivary glands, or other tissues in the neck and may be due to infections, cysts, or even tumors.
                  </p>
                  <p className="section-description">
                    At ENT Delhi, we specialize in identifying and treating the underlying cause of neck swellings, whether it's an infection, benign cyst, or more serious conditions like tumors. The procedure is minimally invasive, performed through a small incision in the neck, and is designed to remove the swelling while preserving the surrounding tissues.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img src={NeckSwellingSurgery} className="img-fluid" alt="Neck Swelling Surgery" />
              </div>
            </div>
          </div>

          {/* Causes Section */}
          <div className="neck-section causes-section">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="neck-section-content">
                  <h2 className="section-title">Common Causes for Neck Swelling</h2>
                  <p className="section-description">
                    Neck swellings can result from various conditions, including:
                  </p>
                  <div className="cause-cards">
                    <div className="cause-card">
                      <h3>Infected Lymph Nodes</h3>
                      <p>Often due to bacterial infections</p>
                    </div>
                    <div className="cause-card">
                      <h3>Salivary Gland Infections</h3>
                      <p>Swelling caused by infections or blocked ducts</p>
                    </div>
                    <div className="cause-card">
                      <h3>Cysts and Abscesses</h3>
                      <p>Fluid-filled lumps that may require drainage</p>
                    </div>
                    <div className="cause-card">
                      <h3>Neoplastic Conditions</h3>
                      <p>Lymphomas or other tumors that may need further treatment</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <img src={NeckSwellingSurgery1} className="img-fluid" alt="Neck Swelling Causes" />
              </div>
            </div>
          </div>

          {/* Procedure Section */}
          <div className="neck-section procedure-section">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="neck-section-content">
                  <h2 className="section-title">The Excision Procedure</h2>
                  <p className="section-description">
                    The excision of the swelling/node is typically performed under general anaesthesia for your comfort. The procedure involves:
                  </p>
                  <div className="procedure-steps">
                    <div className="procedure-step">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h3>Incision</h3>
                        <p>A small incision is made in the neck over the swollen area</p>
                      </div>
                    </div>
                    <div className="procedure-step">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h3>Dissection and Removal</h3>
                        <p>The surrounding tissue is carefully dissected, and the swelling or node is removed</p>
                      </div>
                    </div>
                    <div className="procedure-step">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h3>Closure</h3>
                        <p>The incision is closed in one or two layers using sutures, which may either dissolve on their own or be removed after a few days</p>
                      </div>
                    </div>
                  </div>
                  <p className="section-description">
                    The procedure is usually completed within 30-45 minutes, and most patients can go home the same day, depending on the complexity of the condition.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <img src={NeckSwellingSurgery2} className="img-fluid" alt="Neck Swelling Procedure" />
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="neck-section benefits-section">
            <h2 className="section-title text-center">Benefits of the Procedure</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">✓</div>
                <h3>Effective Removal of Swelling</h3>
                <p>The surgery removes the abnormal node/swelling, reducing the risk of complications</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">✓</div>
                <h3>Improved Health</h3>
                <p>By removing infected or neoplastic tissue, the risk of further infection or spread is minimized</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">✓</div>
                <h3>Better Quality of Life</h3>
                <p>Alleviates discomfort caused by persistent swelling, difficulty swallowing, or breathing problems</p>
              </div>
            </div>
          </div>

          {/* Candidate Section */}
          <div className="neck-section candidate-section">
            <h2 className="section-title">Who Should Consider This Surgery?</h2>
            <p className="section-description">
              This surgery is recommended for individuals who have:
            </p>
            <div className="candidate-points">
              <div className="candidate-point">
                <div className="point-indicator">→</div>
                <p>Persistent Neck Swelling that doesn't resolve with medication</p>
              </div>
              <div className="candidate-point">
                <div className="point-indicator">→</div>
                <p>Infected Lymph Nodes or Cysts that may require surgical intervention</p>
              </div>
              <div className="candidate-point">
                <div className="point-indicator">→</div>
                <p>Neoplastic Swellings: Tumors or abnormal growths that need to be removed</p>
              </div>
            </div>
            <p className="section-description">
              If you experience swelling in the neck or have had recurrent infections, a consultation with our experts will help determine whether excision is the best treatment.
            </p>
          </div>

          {/* Pre-Surgery Section */}
          <div className="neck-section pre-surgery-section">
            <h2 className="section-title">Pre-Surgery Preparation</h2>
            <p className="section-description">
              To ensure you're fit for surgery, you'll undergo some initial tests. Here's what you need to know:
            </p>
            <div className="pre-surgery-grid">
              <div className="pre-surgery-card">
                <h3>Fasting</h3>
                <p>No food or water for at least 6 hours before the surgery</p>
              </div>
              <div className="pre-surgery-card">
                <h3>Medication Adjustments</h3>
                <p>If you take medication for chronic conditions like Hypertension or Hypothyroidism, please take them with a sip of water on the day of surgery</p>
              </div>
              <div className="pre-surgery-card">
                <h3>Blood Tests</h3>
                <p>A few tests may be required to assess your fitness for anaesthesia and surgery</p>
              </div>
              <div className="pre-surgery-card">
                <h3>Consent Form</h3>
                <p>You'll be asked to sign a consent form acknowledging the risks and procedure details</p>
              </div>
            </div>
          </div>

          {/* Post-Surgery Section */}
          <div className="neck-section post-surgery-section">
            <h2 className="section-title">Post-Surgery Care</h2>
            <p className="section-description">
              After the excision procedure, you can expect:
            </p>
            <div className="post-surgery-steps">
              <div className="post-surgery-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Rest and Recovery</h3>
                  <p>You'll be monitored for 2-3 hours as you recover from the anaesthesia</p>
                </div>
              </div>
              <div className="post-surgery-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Diet</h3>
                  <p>You'll begin with liquid foods after a few hours, gradually progressing to solid foods. Cold liquids or ice creams can help soothe the surgical area and provide nutrients</p>
                </div>
              </div>
              <div className="post-surgery-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Follow-Up Visits</h3>
                  <p>After the surgery, follow-up appointments are required to ensure proper healing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks Section */}
          <div className="neck-section risks-section">
            <h2 className="section-title">Risks of Excision of Swelling/Node</h2>
            <p className="section-description">
              Although excision surgery is generally safe, there are some risks to be aware of, including:
            </p>
            <div className="risks-grid">
              <div className="risk-card">
                <div className="risk-icon">⚠️</div>
                <h3>Injury to Surrounding Tissues</h3>
                <p>Rare damage to nearby nerves or muscles</p>
              </div>
              <div className="risk-card">
                <div className="risk-icon">⚠️</div>
                <h3>Post-Operative Bleeding</h3>
                <p>Bleeding from the surgical site, which may occasionally exit through the mouth</p>
              </div>
              <div className="risk-card">
                <div className="risk-icon">⚠️</div>
                <h3>Infection</h3>
                <p>Risk of infection at the incision site</p>
              </div>
              <div className="risk-card">
                <div className="risk-icon">⚠️</div>
                <h3>Recurrence of Swelling</h3>
                <p>In some cases, swelling may return</p>
              </div>
              <div className="risk-card">
                <div className="risk-icon">⚠️</div>
                <h3>Difficulty Swallowing</h3>
                <p>Temporary discomfort while eating or swallowing</p>
              </div>
              <div className="risk-card">
                <div className="risk-icon">⚠️</div>
                <h3>Allergic Reactions</h3>
                <p>Allergic responses to medications or anaesthesia</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="neck-section why-choose-section">
            <h2 className="section-title text-center">Why Choose ENT Delhi for Your Excision Surgery?</h2>
            <div className="why-choose-grid">
              <div className="why-choose-card">
                <h3>Expert Surgeons</h3>
                <p>Our experienced ENT specialists ensure that you receive the highest level of care</p>
              </div>
              <div className="why-choose-card">
                <h3>State-of-the-Art Facilities</h3>
                <p>We use advanced equipment and technology for safe and efficient surgery</p>
              </div>
              <div className="why-choose-card">
                <h3>Personalized Care</h3>
                <p>We work closely with each patient to understand their needs and provide a customized treatment plan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .neck-swelling-service {
          font-family: 'Arial', sans-serif;
          color: #333;
          line-height: 1.6;
          padding: 30px 0;
        }

        .section-subtitle {
          display: block;
          font-size: 18px;
          color: #0F995F;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }

        .section-title {
          font-size: 32px;
          font-weight: 700;
          color: #222;
          margin-bottom: 20px;
        }

        .section-subtitle-main {
          font-size: 24px;
          color: #444;
          margin-bottom: 25px;
          font-weight: 500;
        }

        .section-description {
          font-size: 16px;
          color: #555;
          margin-bottom: 20px;
        }

        .neck-hero-section {
          margin-bottom: 60px;
        }

        .neck-hero-content {
          padding-right: 30px;
        }

        .mobile-img {
          display: block;
          margin-bottom: 25px;
        }

        @media (min-width: 992px) {
          .mobile-img {
            display: none;
          }
        }

        .neck-section {
          margin-bottom: 60px;
          padding: 30px 0;
        }

        .cause-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 25px;
        }

        .cause-card {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #0F995F;
        }

        .cause-card h3 {
          color: #0F995F;
          font-size: 18px;
          margin-bottom: 10px;
        }

        .cause-card p {
          font-size: 15px;
          margin-bottom: 0;
        }

        .procedure-steps {
          margin: 30px 0;
        }

        .procedure-step {
          display: flex;
          margin-bottom: 25px;
          align-items: flex-start;
        }

        .step-number {
          background: #0F995F;
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          flex-shrink: 0;
          font-weight: bold;
        }

        .step-content h3 {
          font-size: 18px;
          color: #333;
          margin-bottom: 5px;
        }

        .step-content p {
          font-size: 15px;
          color: #555;
          margin-bottom: 0;
        }

        .benefits-section {
          background: #f0f8f0;
          padding: 40px;
          border-radius: 10px;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .benefit-card {
          background: white;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .benefit-icon {
          color: #2a7f2a;
          font-size: 24px;
          margin-bottom: 15px;
        }

        .benefit-card h3 {
          font-size: 20px;
          color: #333;
          margin-bottom: 10px;
        }

        .candidate-points {
          margin: 25px 0;
        }

        .candidate-point {
          display: flex;
          margin-bottom: 15px;
          align-items: center;
        }

        .point-indicator {
          color: #0F995F;
          font-size: 20px;
          margin-right: 15px;
        }

        .pre-surgery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 25px;
        }

        .pre-surgery-card {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
        }

        .pre-surgery-card h3 {
          color: #0F995F;
          font-size: 18px;
          margin-bottom: 10px;
        }

        .post-surgery-steps {
          margin: 30px 0;
        }

        .post-surgery-step {
          display: flex;
          margin-bottom: 25px;
          align-items: flex-start;
        }

        .risks-section {
          background:rgba(15, 153, 95, 0.02);
          padding: 40px;
          border-radius: 10px;
        }

        .risks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .risk-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(116, 116, 116, 0.05);
          border-left: 3px solid #0F995F;
        }

        .risk-icon {
          font-size: 24px;
          color: #0F995F;
          margin-bottom: 10px;
        }

        .risk-card h3 {
          font-size: 18px;
          color: #333;
          margin-bottom: 10px;
        }

        .why-choose-section {
          padding: 40px;
          border-radius: 10px;
        }

        .why-choose-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .why-choose-card {
          background: white;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          text-align: center;
        }

        .why-choose-card h3 {
          font-size: 20px;
          color: #0F995F;
          margin-bottom: 15px;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 28px;
          }
          
          .section-subtitle-main {
            font-size: 20px;
          }
          
          .neck-hero-content {
            padding-right: 0;
          }
          
          .benefits-section,
          .risks-section,
          .why-choose-section {
            padding: 30px 20px;
          }
        }

        @media (max-width: 576px) {
          .section-title {
            font-size: 24px;
          }
          
          .section-subtitle {
            font-size: 16px;
          }
          
          .benefits-grid,
          .risks-grid,
          .why-choose-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default RemovalOfNeckSwelling;