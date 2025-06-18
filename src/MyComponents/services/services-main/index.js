import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import DoctorBite from '../DoctorBite.js';
import Form from './Form.js'
import Counter from '../../NumCounter.js'
import PatientReviews from '../PatientReview.js';
import ServicesMain from './ServicesMain.js'
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
            <title>Our Services | MedFirst ENT Centre</title>
            <meta name="description" content="Discover the full range of ENT services we offer includingTonsillectomy, Adenoidectomy, Septoplasty, FESS, MLS, Myringoplasty & more. Expert care in surgery, audiology & speech." />
            <meta name="keywords" content="Tonsillectomy,Adenoidectomy,Snoring Sleep Apnea Surgery,Myringotomy With Grommet,Septoplasty,Turbinectomy,Functional Endoscopic Sinus Surgery,Neck Swelling Surgery,Nasal Polyp Removal,Myringoplasty,microlaryngeal surgery mls" />
            <link rel="canonical" href="https://entdelhi.com/our-services/" />
            <meta property="og:title" content="Open Graph Title" />
            <meta property="og:description" content="Open Graph Description for Facebook etc." />
            <meta name="robots" content="index, follow" />
            {/* You can add more meta tags as needed */}
          </Helmet>
      <main>
        <Breadcrumb/>
        <Form/>
        <Counter/>
         <ServicesMain/>
         <FollowYt/>
         <DoctorBite/>
         <PatientReviews/>
         <GetInTouch/>
      </main>
    </div>
  )
}
