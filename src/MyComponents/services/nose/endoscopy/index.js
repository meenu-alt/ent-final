import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "./style.css";
import Form from './Form.js'
import ContentWithImages from './ContentWithImages.js'
import DoctorBite from '../../DoctorBite.js';
import PatientReviews from '../../PatientReview.js';

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
            <title>ENT Endoscopy in Delhi | MedFirst ENT Centre</title>
            <meta name="description" content="Get clear and accurate ENT diagnosis with nasal and throat endoscopy by MedFirst ENT Centre. Quick and safe procedures." />
            <meta name="keywords" content="ENT endoscopy Delhi, nasal endoscopy, throat endoscopy, Endoscopy cost,Is endoscopy painful,Endoscopy near me,Endoscopy procedure,Endoscopy test,Endoscopy price" />
            <link rel="canonical" href="https://entdelhi.com/endoscopy/" />
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
         
         <GetInTouch/>
      </main>
    </div>
  )
}
