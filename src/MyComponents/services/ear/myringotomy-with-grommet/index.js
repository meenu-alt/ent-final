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
            <title>Myringotomy with Grommet  | MedFirst ENT Centre</title>
            <meta name="description" content="Treat chronic ear infections and fluid buildup with myringotomy and grommet insertion by MedFirst ENT Centre." />
            <meta name="keywords" content="Myringotomy with grommet insertion complications,Myringotomy and grommet insertion procedure,Myringotomy with grommet insertion indications,Myringotomy with grommet insertion cost" />
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
        
        <FollowYt />
        <DoctorBite />
        <PatientReviews />
        <GetInTouch />
      </main>
    </div>
  );
}
