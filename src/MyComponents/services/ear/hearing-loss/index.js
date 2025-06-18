import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "../../../../assets/css/style.css";
import Form from './Form.js'
import ContentWithImages from './ContentWithImages.js'
import DoctorBite from '../../DoctorBite.js';
import PatientReviews from '../../PatientReview.js';

import GetInTouch from '../../GetInTouch.js';
import FollowYt from '../../FollowYt.js';
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
            <title>Hearing Loss Treatment in Delhi | MedFirst ENT Centre</title>
            <meta name="description" content="Struggling with hearing problems? Get expert diagnosis and effective treatment for hearing loss at MedFirst ENT Centre – a trusted ENT clinic in Delhi." />
            <meta name="keywords" content="Hearing loss treatment Medicine,Mild hearing loss treatment,Latest treatment for hearing loss,Diseases that cause hearing loss,Permanent hearing loss treatment,4 types of hearing loss,Early signs of hearing loss in adults" />
            <link rel="canonical" href="https://entdelhi.com/hearing-loss/" />
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
