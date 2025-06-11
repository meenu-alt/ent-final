import React from 'react';
import { Link } from 'react-router-dom';
import './thnk.css';

export default function Thanks() {
  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <div className="confetti">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="confetti-piece"></div>
          ))}
        </div>
        
        <div className="checkmark">
          <svg className="checkmark-icon" viewBox="0 0 52 52">
            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>
        
        <h2 className="thank-you-title">Thank You for Reaching Out!</h2>
        
        <div className="thank-you-content">
          <p className="thank-you-message">
            Your consultation request has been received. Our team will get in touch with you shortly 
            to assist with your ENT concerns.
          </p>
          
          <div className="contact-info" style={{backgroundColor: "rgb(233 236 239 / 46%)"}}>
            <svg className="contact-icon" viewBox="0 0 24 24">
              <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg>
            <span>You'll receive a confirmation email shortly</span>
          </div>
          
          <div className="contact-info"  style={{backgroundColor: "rgb(233 236 239 / 46%)"}}>
            <svg className="contact-icon" viewBox="0 0 24 24">
              <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
            <span>Need immediate assistance? Call us at <strong>+91 98711 50032</strong></span>
          </div>
        </div>
        
        <Link to="/" className="home-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
}