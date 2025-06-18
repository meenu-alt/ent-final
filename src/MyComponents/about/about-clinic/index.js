import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import Breadcrumb from '../about-the-doctor/Breadcrum'
import WhyChooseUs from './WhyChooseUs'
import BestServices from './BestServices'
import ModernInfra from './ModernInfra'
import FAQ from '../about-the-doctor/Faq'
import NumCounter from '../../NumCounter'
import "./about-clinic.css";


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
        <title>About Our ENT Clinic in Delhi | Advanced ENT Care</title>
        <meta name="description" content="Discover our modern ENT clinic in Delhi offering comprehensive care for ear, nose, and throat conditions. Patient-first approach and expert care." />
        <meta name="keywords" content="ENT clinic Delhi, best ENT hospital, about ENT center, ENT care Delhi" />
        <link rel="canonical" href="https://entdelhi.com/about-clinic/" />
            <meta property="og:title" content="Open Graph Title" />
        <meta property="og:description" content="Open Graph Description for Facebook etc." />
        <meta name="robots" content="index, follow" />
        {/* You can add more meta tags as needed */}
      </Helmet>
      <main>
        <Breadcrumb/>
        <WhyChooseUs />
        <BestServices />
        <ModernInfra />
        <FAQ />
        <NumCounter />
        </main>
    </div>
  )
}