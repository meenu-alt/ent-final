import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import Form from './Form.js'
import ContentWithImages from './ContentWithImages.js'
import DoctorBite from '../DoctorBite.js';
import PatientReviews from '../PatientReview.js';
import Counter from '../../NumCounter.js'
import GetInTouch from '../GetInTouch.js';
import FollowYt from '../FollowYt.js'
import Breadcrumb from '../Breadcrum.js';

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
            <title>Best Throat Doctor in Delhi | MedFirst ENT Centre</title>
            <meta name="description" content="Visit top throat specialists in Delhi for sore throat, voice problems, infections, and more. Expert ENT care for all ages." />
            <meta name="keywords" content="throat doctor Delhi, throat specialist, ENT throat expert, sore throat treatment,Best throat surgery specialist in Delh" />
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
