import React from 'react'
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import Breadcrumb from "../../services/Breadcrum.js";
import PrivacyPolicy from "./PrivacyPolicy.js";


export default function Index() {
  useEffect(() => {
    const metaTags = document.getElementsByTagName('meta');
    Array.from(metaTags).forEach((tag) => {
      console.log(tag);
    });
  }, []);
  return (
    <div> <Helmet>
    <title>Best ENT Clinic In Delhi</title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <link rel="canonical" href="" />
            <meta property="og:title" content="Open Graph Title" />
    <meta property="og:description" content="Open Graph Description for Facebook etc." />
    <meta name="robots" content="index, follow" />
    {/* You can add more meta tags as needed */}
  </Helmet>
     <main>     
        <Breadcrumb/>
        <PrivacyPolicy/>
      </main>
    </div>
  );
}


