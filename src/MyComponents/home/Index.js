import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import AboutDoctor from "./AboutDoctor.js";
import Banner from "./Banner.js";
import WhatWeDo from "./WhatWeDo.js";
// import Testimonials from "./Testimonials.js";
import PatientReviews from "./PatientReview.js";
import FollowYt from "./FollowYt.js";
import Faq from "./Faq.js";
import Blogs from "./Blogs.js";
import GetInTouch from "./GetInTouch.js";

function Home() {
  useEffect(() => {
    const metaTags = document.getElementsByTagName('meta');
    Array.from(metaTags).forEach((tag) => {
      console.log(tag);
    });
  }, []);
  return (
    <div>
      <Helmet>
      <title>Best ENT Doctor in Delhi – Dr. Rajesh Bhardwaj | MedFirst ENT Centre</title>
      <meta name="description" content="Consult Dr. (Major) Rajesh Bhardwaj at MedFirst ENT Centre, Vasant Vihar – a trusted ENT specialist in Delhi offering expert care, surgeries & ethical treatment." />
      <meta name="keywords" content="" />
      <link rel="canonical" href="https://entdelhi.com/" />
            <meta property="og:title" content="Open Graph Title" />
      <meta property="og:description" content="Open Graph Description for Facebook etc." />
      <meta name="robots" content="index, follow" />
      {/* You can add more meta tags as needed */}
    </Helmet>
      <main>
        <Banner />
        <AboutDoctor />
        <WhatWeDo />
        {/* <Testimonials /> */}
        <PatientReviews />
        <FollowYt />
        <Faq />
        <Blogs />
        <GetInTouch />
      </main>
    </div>
  );
}

export default Home;
