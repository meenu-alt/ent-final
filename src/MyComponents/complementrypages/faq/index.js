import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import Form from "./Form.js";
import Faqq from "./Faqo.js";
import PatientReviews from "../../services/PatientReview.js";
import GetInTouch from "../../services/GetInTouch.js";
import FollowYt from "../../services/FollowYt.js";
import Counter from "../../NumCounter.js";
import Breadcrumb from "../../services/Breadcrum.js";


export default function Index() {
  useEffect(() => {
    const metaTags = document.getElementsByTagName('meta');
    Array.from(metaTags).forEach((tag) => {
      console.log(tag);
    });
  }, []);
  return (
    <div>
     <main>
      <Helmet>
        <title> Frequently Asked ENT Questions | MedFirst ENT Centre</title>
        <meta name="description" content="Have questions about ENT problems? Find answers to common ear, nose, and throat concerns from our expert ENT specialists in Delhi." />
        <meta name="keywords" content="ENT FAQs, ENT common questions, ENT knowledge, ENT advice Delhi" />
        <meta property="og:title" content="Open Graph Title" />
        <meta property="og:description" content="Open Graph Description for Facebook etc." />
        <meta name="robots" content="index, follow" />
        {/* You can add more meta tags as needed */}
      </Helmet>
        <Breadcrumb/>
        <Form />  
        <Counter />
        <Faqq/>
        <FollowYt />
        <PatientReviews />
        <GetInTouch />
      </main>
    </div>
  );
}


