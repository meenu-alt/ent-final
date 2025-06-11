import React from 'react';
import './privacy.css'; 

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title text-center">Privacy Policy</h1>
      <p className="effective-date">Effective Date: 27-3-2025

</p>

      <div className="policy-section">
        <h2 className="section-title">1. Information We Collect</h2>
        <ul className="policy-list">
          <li><strong>Personal Information:</strong> Name, contact details, and demographic information.</li>
          <li><strong>Medical Information:</strong> Health history, medical records, and treatment details.</li>
          <li><strong>Payment Information:</strong> Billing details and transaction history.</li>
          <li><strong>Website Usage Data:</strong> IP address, browser type, and pages visited.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2 className="section-title">2. How We Use Your Information</h2>
        <p className="section-intro">We use the collected information to:</p>
        <ul className="policy-list">
          <li>Provide medical consultation, diagnosis, and treatment.</li>
          <li>Schedule and manage appointments.</li>
          <li>Process payments and issue invoices.</li>
          <li>Improve our services and website functionality.</li>
          <li>Communicate with you regarding appointments or updates.</li>
          <li>Comply with legal and regulatory requirements.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2 className="section-title">3. Sharing of Information</h2>
        <p className="section-intro">We do not sell or share your personal information, except:</p>
        <ul className="policy-list">
          <li><strong>Medical Referrals:</strong> Shared with healthcare providers if necessary.</li>
          <li><strong>Legal Requirements:</strong> If required by law or government authority.</li>
          <li><strong>Third-Party Service Providers:</strong> For payments, scheduling, or hosting (with confidentiality agreements).</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2 className="section-title">4. Data Security</h2>
        <p className="section-text">We take reasonable steps to protect your data but cannot guarantee absolute security.</p>
      </div>

      <div className="policy-section">
        <h2 className="section-title">5. Your Rights</h2>
        <p className="section-intro">You have the right to:</p>
        <ul className="policy-list">
          <li>Access, update, or correct your personal data.</li>
          <li>Request deletion of your data (subject to legal requirements).</li>
          <li>Opt-out of marketing communications.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2 className="section-title">6. Cookies & Tracking Technologies</h2>
        <p className="section-text">Our website may use cookies and analytics tools to enhance user experience.</p>
      </div>

      <div className="policy-section">
        <h2 className="section-title">7. Updates to This Policy</h2>
        <p className="section-text">We may update this Privacy Policy. Changes will be posted on this page.</p>
      </div>

      <div className="policy-section contact-section">
        <h2 className="section-title">8. Contact Us</h2>
        <p className="section-intro">For any questions, contact us at:</p>
        <address className="contact-infopri">
          <p>📍 <strong>MedFirst ENT Centre</strong>, Vasant Vihar, New Delhi</p>
          <p>📞 [Insert Contact Number]</p>
          <p>📧 [Insert Email Address]</p>
        </address>
      </div>
    </div>
  );
}