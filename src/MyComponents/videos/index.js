import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import Breadcrumb from '../services/Breadcrum.js';
import YouTubeVideos from './videos.js'

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
            <title>ENT Health Videos | Patient Education Resources | MedFirst ENT Centre</title>
            <meta name="description" content="Watch informative videos on ENT treatments, surgeries, and patient care. Learn more about ear, nose, and throat health from experts." />
            <meta name="keywords" content="ENT videos, patient education ENT, ENT treatments videos, ENT Delhi videos" />
            <link rel="canonical" href="https://entdelhi.com/videos/" />
            <meta property="og:title" content="Open Graph Title" />
            <meta property="og:description" content="Open Graph Description for Facebook etc." />
            <meta name="robots" content="index, follow" />
            {/* You can add more meta tags as needed */}
          </Helmet>
     <main>
        <Breadcrumb/>
        <YouTubeVideos/>
        
      </main>
    </div>
  )
}
