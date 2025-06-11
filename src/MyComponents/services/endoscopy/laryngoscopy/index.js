import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "../../../../assets/css/style.css";
import Form from './Form.js'
import PatientReviews from '../../PatientReview.js';

import GetInTouch from '../../GetInTouch.js';
import FollowYt from '../../FollowYt.js'
import ContentWithImages from './ContentWithImages.js'
import DoctorBite from '../../DoctorBite.js';
import Counter from '../../../NumCounter.js'
import "./style.css"
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
            <title>Laryngoscopy Procedure in Delhi | MedFirst ENT Centre</title>
            <meta name="description" content="Laryngoscopy helps diagnose voice and throat problems accurately. Get expert laryngoscopy services byMedFirst ENT Centre in Delhi." />
            <meta name="keywords" content="laryngoscopy Delhi,Best Doctors for Laryngoscopy in Delhi, throat examination, voice problem diagnosis, ENT throat specialist" />
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
