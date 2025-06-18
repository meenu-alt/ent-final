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
     <main>
           <Helmet>
             <title>Microlaryngoscopy | MedFirst ENT Centre</title>
             <meta name="description" content="Detailed vocal cord evaluation with microlaryngoscopy for voice issues and throat disorders. Book ENT appointment with MedFirst ENT Centre" />
             <meta name="keywords" content="Microlaryngoscopy procedure,Microlaryngoscopy surgery,Microlaryngoscopy recovery,Microlaryngoscopy cancer,Microlaryngoscopy side effects,Microlaryngoscopy and excision
" />
             <link rel="canonical" href="https://entdelhi.com/microlaryngoscopy/" />
            <meta property="og:title" content="Open Graph Title" />
             <meta property="og:description" content="Open Graph Description for Facebook etc." />
             <meta name="robots" content="index, follow" />
             {/* You can add more meta tags as needed */}
           </Helmet>
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
