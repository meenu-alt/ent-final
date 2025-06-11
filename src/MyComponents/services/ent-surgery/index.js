import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "../../../assets/css/style.css";
import Form from './Form.js'
import PatientReviews from '../PatientReview.js';
import GetInTouch from '../GetInTouch.js';
import FollowYt from '../FollowYt.js'
import ContentWithImages from './ContentWithImages.js'
import DoctorBite from '../DoctorBite.js';
import Counter from '../../NumCounter.js'
import "./style.css"
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
            <title>ENT Surgery  | MedFirst ENT Centre</title>
            <meta name="description" content="Trust our expert ENT surgeons for safe and advanced ear, nose, and throat surgeries in Delhi. Personalized care for lasting relief." />
            <meta name="keywords" content="Cashless ENT surgery Delhi,ENT Surgery Delhi TPA,Affordable ENT Surgery Delhi,ENT surgery in Delhi,Affordable ENT surgery Delhi,Laser ENT surgery for painless treatment,ENT surgery TPA,Cashless ENT surgery,Painless ENT surgery in delhi,Cashless ENT surgery hospitals,Laser ENT Surgery in Delhi" />
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
