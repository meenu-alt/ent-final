import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "../../../../assets/css/style.css";
import Form from './Form.js'
import PatientReviews from '../../PatientReview.js';
import Faq from './Faq.js';
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
            <title>Adenoid Surgery with Grommet Tube Insertion</title>
            <meta name="description" content="Dual treatment for chronic ear and nasal blockage. Get adenoid removal and grommet insertion surgery in Delhi by Dr (Major) Rajesh Bhardwaj." />
            <meta name="keywords" content="adenoid surgery with tube, grommet insertion Delhi, ENT ear nose surgery, ENT combo treatment,Adenoids and grommets recovery,Adenoids and grommets symptoms,Adenoidectomy" />
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
         <Faq/>
         <GetInTouch/>
      </main>
    </div>
  )
}
