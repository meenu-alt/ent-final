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
import Counter from '../../../NumCounter.js';
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
            <title>Otitis Externa (Swimmer’s Ear) Treatment | MedFirst ENT Centre</title>
            <meta name="description" content="Get effective treatment for otitis externa and ear infections by MedFirst ENT Centre. Safe care for ear health restoration." />
            <meta name="keywords" content="otitis externa treatment, ear infection , swimmer’s ear care, Acute otitis externa treatment,Chronic otitis externa treatment,Otomize ear spray" />
            <link rel="canonical" href="https://entdelhi.com/otitis-externa/" />
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
