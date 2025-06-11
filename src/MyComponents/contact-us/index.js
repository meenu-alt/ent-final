import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import ContactInfo from "./contactDetails.js";
import GetInTouchMap from "./GetInTouchMap.js"
import "./contact.css"

function Home() {
  useEffect(() => {
    const metaTags = document.getElementsByTagName('meta');
    Array.from(metaTags).forEach((tag) => {
      console.log(tag);
    });
  }, []);
  return (
    <div>
      <Helmet>
      <title>Contact US | Book Your Consultation Today</title>
      <meta name="description" content="Need expert ENT care? Contact us to book an appointment with leading ENT specialists in Delhi. We’re here to help you feel better." />
      <meta name="keywords" content="contact ENT clinic, book ENT appointment, ENT specialist Delhi, ENT consultation Delhi" />
      <meta property="og:title" content="Open Graph Title" />
      <meta property="og:description" content="Open Graph Description for Facebook etc." />
      <meta name="robots" content="index, follow" />
      {/* You can add more meta tags as needed */}
    </Helmet>
      <main>
        <ContactInfo />
        <GetInTouchMap />
      </main>
    </div>
  );
}

export default Home;    

