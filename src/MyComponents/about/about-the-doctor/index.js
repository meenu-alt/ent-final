import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import AboutDR from './AboutDr'
import Achievements from './Achivements'
import Awards from './Awards'
import Breadcrumb from './Breadcrum'
import ContactInfo from './contactAbout'
import WhatWeDo from './WhatWeDo'
import FAQ from './Faq'
import NumCounter from '../../NumCounter'

export default function Index() {
  useEffect(() => {
    const metaTags = document.getElementsByTagName('meta');
    Array.from(metaTags).forEach((tag) => {
      console.log(tag);
    });
  }, []);
  return (
    <div>
          <Helmet>
            <title>Doctor About Us | MedFirst ENT Centre</title>
            <meta name="description" content="Dr. (Major) Bhardwaj, an AFMC Pune graduate and experienced ENT specialist, served 15 years in the Indian Army, including key roles at top military hospitals and in high-risk zones like Siachen and Sri Lanka." />
            <meta name="keywords" content="ENT doctor Delhi, best ENT specialist, about ENT surgeon, experienced ENT in Delhi" />
            <meta property="og:title" content="Open Graph Title" />
            <meta property="og:description" content="Open Graph Description for Facebook etc." />
            <meta name="robots" content="index, follow" />
            {/* You can add more meta tags as needed */}
          </Helmet>
<main>
        <Breadcrumb/>
        <AboutDR />
        <NumCounter />
        <Achievements />
        <WhatWeDo />
        <Awards/>
        <FAQ/>
        <Achievements />
        <ContactInfo />
      </main>
    </div>
  )
}

