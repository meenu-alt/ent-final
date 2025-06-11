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
            <title>Experienced Ear Doctor in Delhi | Hearing & Ear Problem Care</title>
            <meta name="description" content="Meet the best ear doctors in Delhi for treatment of infections, hearing loss, and other ear conditions. Safe and expert ENT care." />
            <meta name="keywords" content="ear doctor Delhi, ENT ear specialist, hearing loss doctor, ear infection treatment" />
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
