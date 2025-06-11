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
            <title>Sensorineural Hearing Loss Treatment in Delhi | MedFirst ENT Centre</title>
            <meta name="description" content="Effective diagnosis and treatment of sensorineural hearing loss by MedFirst ENT Centre. Regain your hearing health today." />
            <meta name="keywords" content="sensorineural hearing loss Delhi, hearing loss treatment, Sensorineural hearing loss treatment,Sensorineural hearing loss causes,Mild sensorineural hearing loss treatment,Sensorineural hearing loss symptoms,Sensorineural hearing loss examples
" />
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
