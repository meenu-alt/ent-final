import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "../../../../assets/css/style.css";
import Form from './Form.js'
import ContentWithImages from './ContentWithImages.js'
import DoctorBite from '../../DoctorBite.js';
import PatientReviews from '../../PatientReview.js';

import GetInTouch from '../../GetInTouch.js';
import FollowYt from '../../FollowYt.js';
import Counter from '../../../NumCounter.js';
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
            <title>Hearing Aids Consultation & Fitting | MedFirst ENT Centre</title>
            <meta name="description" content="Find the right hearing aid with expert consultation and fitting services in Delhi. Improve your hearing and enjoy better quality of life." />
            <meta name="keywords" content="Hearing aids new delhi,hearing aids,hearing aid price in delhi,Hearing aid price,Hearing aid types and costs,Hearing aid near me,Hearing aid types" />
            <link rel="canonical" href="https://entdelhi.com/hearing-aids/" />
            <meta property="og:title" content="Open Graph Title" />
            <meta property="og:description" content="Open Graph Description for Facebook etc." />
            <meta name="robots" content="index, follow" />
            {/* You can add more meta tags as needed */}
          </Helmet>
     <main>
        <Breadcrumb/>
        <Form />    
        <Counter />
         <ContentWithImages/>
         <FollowYt/>
         <DoctorBite/>
         <PatientReviews/>
         
         <GetInTouch/>
      </main>
    </div>
  )
}
