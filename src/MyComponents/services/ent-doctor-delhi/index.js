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
            <title>Best ENT Doctor in Delhi | Ear, Nose & Throat Specialist</title>
            <meta name="description" content="Consult with Dr (Major) Rajesh Bhardwaj experienced ENT doctors in Delhi for comprehensive treatment of ear, nose, and throat problems. Book an appointment now." />
            <meta name="keywords" content="ENT doctor near me,Top ENT Specialist in Delhi,ENT doctor near me with Fees,Top 10 ENT specialist in Delhi,ENT doctor Delhi near me,Top 5 ENT doctors in Delhi" />
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
