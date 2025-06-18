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
            <title>Microlaryngeal Surgery | MedFirst ENT Centre</title>
            <meta name="description" content="Treat voice disorders and vocal cord lesions with precision microlaryngeal surgery in Delhi. Performed by expert ENT specialists Dr (Major) Rajesh Bhardwaj." />
            <meta name="keywords" content="microlaryngeal surgery Delhi, vocal cord microsurgery, 
Microlaryngeal surgery,Microlaryngeal surgery complications,Microlaryngeal surgery cost,Microlaryngeal surgery anesthesia, larynx surgery" />
            <link rel="canonical" href="https://entdelhi.com/microlaryngeal-surgery/" />
            <meta property="og:title" content="Open Graph Title" />
            <meta property="og:description" content="Open Graph Description for Facebook etc." />
            <meta name="robots" content="index, follow" />
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
