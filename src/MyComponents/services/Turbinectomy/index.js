import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "./style.css";
import Form from './Form.js'
import ContentWithImages from './ContentWithImages.js'
import DoctorBite from '../DoctorBite.js';
import PatientReviews from '../PatientReview.js';
import Faq from './Faq.js';
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
            <title>Turbinectomy Surgery in Delhi | Enlarged Turbinate Treatment</title>
            <meta name="description" content="Learn about turbinate reduction surgery (turbinectomy) in Delhi. ENT Delhi offers safe and effective treatment for nasal blockage and breathing issues caused by enlarged turbinates." />
            <meta name="keywords" content="Turbinectomy in Delhi, turbinate reduction surgery, enlarged turbinate treatment, nasal blockage surgery, ENT Delhi turbinate, nose surgery Delhi" />
            <link rel="canonical" href="https://entdelhi.com/turbinectomy/" />
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
