import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "./style.css";
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
            <title>Insurance and TPA Services | MedFirst ENT Centre</title>
            <meta name="description" content="We partner with major insurance and TPA providers to ensure your ENT treatments in Delhi are smooth and worry-free. Learn more." />
            <meta name="keywords" content="ENT insurance Delhi, TPA partners ENT, cashless ENT treatment, ENT hospital insurance Delhi" />
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
         <Counter/>
         <GetInTouch/>
      </main>
    </div>
  )
}
