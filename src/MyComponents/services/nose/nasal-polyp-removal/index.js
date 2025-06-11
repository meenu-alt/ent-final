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
            <title>Nasal Polyp Removal Surgery in Delhi | MedFirst ENT Centre</title>
            <meta name="description" content="Suffering from nasal polyps? Get expert consultation and safe surgical removal by ENT specialists in Delhi. Breathe easier with our effective treatments." />
            <meta name="keywords" content="nasal polyp removal, sinus surgery Delhi, Nasal polyps surgery cost in Delhi, nasal blockage treatment" />
            <meta property="og:title" content="Open Graph Title" />
            <meta property="og:description" content="Open Graph Description for Facebook etc." />
            <meta name="robots" content="index, followjdhfuiefp" />
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
