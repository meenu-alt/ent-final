import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import "../../../../assets/css/style.css";
import Form from "./Form.js";
import ContentWithImages from "./ContentWithImages.js";
import DoctorBite from "../../DoctorBite.js";
import PatientReviews from "../../PatientReview.js";

import GetInTouch from "../../GetInTouch.js";
import FollowYt from "../../FollowYt.js";
import Counter from "../../../NumCounter.js";
import Breadcrumb from "../../Breadcrum.js";

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
      <title>Speech Therapy |  MedFirst ENT Centre</title>
      <meta name="description" content="Improve speech clarity and communication with professional speech therapy services offered by MedFirst ENT Centre." />
      <meta name="keywords" content="speech therapy Delhi, speech specialist, communication disorder therapy, Speech therapy cost,Speech therapy techniques,Speech therapy for kids,Speech therapy near me,Speech therapy for adults,Speech Therapist Near Me with fees,Speech Therapy cost in Delhi" />
      <meta property="og:title" content="Open Graph Title" />
      <meta property="og:description" content="Open Graph Description for Facebook etc." />
      <meta name="robots" content="index, follow" />
      {/* You can add more meta tags as needed */}
    </Helmet>
     <main>
        <Breadcrumb/>
        <Form />  
        <Counter />
        <ContentWithImages />
        <FollowYt />
        <DoctorBite />
        <PatientReviews />
        
        <GetInTouch />
      </main>
    </div>
  );
}
