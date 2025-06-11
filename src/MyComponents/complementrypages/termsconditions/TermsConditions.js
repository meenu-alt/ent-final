import React from 'react';
import './termscondi.css'; 

export default function TermsConditions() {
  return (
    <div className="container">
      <h1 className="terms-title pt-4 text-center">Terms & Conditions</h1>
      <p className="effective-date">Effective Date: 27-3-2025</p>

      <div className="terms-section">
        <h2 className="section-title">1. Introduction</h2>
        <p className="section-text">
          Welcome to <strong>MedFirst ENT Centre</strong>. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully. If you do not agree, please refrain from using our services.
        </p>
      </div>

      <div className="terms-section">
        <h2 className="section-title">2. Medical Disclaimer</h2>
        <ul className="terms-list">
          <li>The information provided on our website or during consultations is for general informational purposes only.</li>
          <li>Diagnosis and treatment plans are based on individual assessments by our qualified medical professionals.</li>
          <li>In case of medical emergencies, please contact emergency services immediately.</li>
        </ul>
      </div>

      <div className="terms-section">
        <h2 className="section-title">3. Appointments & Consultations</h2>
        <ul className="terms-list">
          <li>Patients must schedule appointments in advance via phone, email, or online booking.</li>
          <li>MedFirst ENT Centre reserves the right to reschedule or cancel appointments due to unforeseen circumstances.</li>
          <li>A valid ID may be required during your visit.</li>
        </ul>
      </div>

      <div className="terms-section">
        <h2 className="section-title">4. Fees & Payments</h2>
        <ul className="terms-list">
          <li>Consultation fees, procedure costs, and other charges will be communicated before treatment.</li>
          <li>Payments must be made at the time of service through accepted payment methods (cash, card, online transfer, etc.).</li>
          <li>MedFirst ENT Centre does not offer refunds for completed consultations or treatments.</li>
        </ul>
      </div>

      <div className="terms-section">
        <h2 className="section-title">5. Patient Responsibilities</h2>
        <ul className="terms-list">
          <li>Provide accurate medical history and information.</li>
          <li>Follow the prescribed treatment plan and adhere to medical advice.</li>
          <li>Respect clinic policies, staff, and other patients.</li>
        </ul>
      </div>

      <div className="terms-section">
        <h2 className="section-title">6. Confidentiality & Privacy</h2>
        <p className="section-text">
          We prioritize patient confidentiality and comply with applicable privacy laws. Medical records and personal data will not be shared without patient consent, except as required by law.
        </p>
      </div>

      <div className="terms-section">
        <h2 className="section-title">7. Limitation of Liability</h2>
        <p className="section-text">
          While we strive to provide the best medical care, MedFirst ENT Centre is not responsible for any complications or adverse reactions arising from treatments. The clinic is not liable for personal belongings lost or stolen within the premises.
        </p>
      </div>

      <div className="terms-section">
        <h2 className="section-title">8. Intellectual Property</h2>
        <p className="section-text">
          All content on our website, including text, images, and logos, is the property of MedFirst ENT Centre and cannot be reproduced without permission.
        </p>
      </div>

      <div className="terms-section">
        <h2 className="section-title">9. Modifications to Terms</h2>
        <p className="section-text">
          MedFirst ENT Centre reserves the right to update these Terms & Conditions at any time. Changes will be posted on our website.
        </p>
      </div>

      <div className="terms-section contact-section">
        <h2 className="section-title">10. Contact Information</h2>
        <p className="section-text">For any questions or concerns, contact us at:</p>
        <address className="contact-infocon">
          <p>📍 <strong>MedFirst ENT Centre</strong>, Vasant Vihar, New Delhi</p>
          <p>📞 [Insert Contact Number]</p>
          <p>📧 [Insert Email Address]</p>
        </address>
      </div>
    </div>
  );
}