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
            <title>Tonsil Infection & Inflammation Treatment | MedFirst ENT Centre</title>
            <meta name="description" content="Sore throat or swollen tonsils? Get relief with expert ENT care for tonsillitis and chronic tonsil infections in Delhi." />
            <meta name="keywords" content="tonsil treatment Delhi, tonsillitis care, swollen tonsils doctor,Tonsils symptoms,Best doctor for tonsils near me,Otolaryngologist,Tonsil Removal Surgery,Chronic Tonsillitis" />
            <link rel="canonical" href="https://entdelhi.com/tonsils/" />
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
