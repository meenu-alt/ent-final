import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "./style.css";
import Form from './Form.js'
import ContentWithImages from './ContentWithImages.js'
import DoctorBite from '../../DoctorBite.js';
import PatientReviews from '../../PatientReview.js';
import Faq from './Faq.js';
import GetInTouch from '../../GetInTouch.js';
import FollowYt from '../../FollowYt.js'
import Breadcrumb from '../../Breadcrum.js';

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
            <title>Turbinoplasty Surgery in Delhi | Nasal Blockage Treatment</title>
            <meta name="description" content="Breathe freely with turbinoplasty surgery to treat nasal obstruction. Get expert care from MedFirst ENT Centre." />
            <meta name="keywords" content="turbinoplasty Delhi, nasal blockage treatment, ENT nasal surgery, nose congestion surgery,Turbinoplasty cost,Turbinoplasty surgery cost,Turbinoplasty and septoplasty,Turbinoplasty surgery,Turbinoplasty side effects,Turbinoplasty recovery" />
            <link rel="canonical" href="https://entdelhi.com/turbinoplasty/" />
            <meta property="og:title" content="Open Graph Title" />
            <meta property="og:description" content="Open Graph Description for Facebook etc." />
            <meta name="robots" content="index, follow" />
            {/* You can add more meta tags as needed */}
          </Helmet>
      <main>
        <Breadcrumb/>
        <Form />  
         <ContentWithImages/>
         <FollowYt/>
         <DoctorBite/>
         <PatientReviews/>
         <Faq/>
         <GetInTouch/>
      </main>
    </div>
  )
}
