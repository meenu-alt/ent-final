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
// import Counter from '../../../NumCounter.js'
import Counter from '../../../NumCounter.js'
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
            <title>Mouth Ulcers Treatment in Delhi | MedFirst ENT Centre</title>
            <meta name="description" content="Suffering from painful mouth ulcers? Get accurate diagnosis and effective treatment by MedFirst ENT Centre in Delhi." />
            <meta name="keywords" content="Best mouth ulcer Doctor in Delhi,Best mouth ulcer doctor near me,Mouth Specialist Doctor in Delhi,Mouth ulcer doctor specialist,Mouth ulcer doctor near me,Best Hospital for Mouth ulcer treatment,Mouth specialist near me,Mouth Specialist doctor near me" />
            <meta property="og:title" content="Open Graph Title" />
            <meta property="og:description" content="Open Graph Description for Facebook etc." />
            <meta name="robots" content="index, follow" />
            {/* You can add more meta tags as needed */}
          </Helmet>
      <main>
        <Breadcrumb/>
        <Form />  
         <Counter/>
         <ContentWithImages/>
         <FollowYt/>
         <DoctorBite/>
         <PatientReviews/>
         
         <GetInTouch/>
      </main>
    </div>
  )
}
