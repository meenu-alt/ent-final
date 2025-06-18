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
      <title>Best ENT Clinic In Delhi</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <link rel="canonical" href="" />
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

