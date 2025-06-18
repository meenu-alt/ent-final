import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from "../../services/Breadcrum.js";
import Thanks from "./Thanks.js";

export default function Index() {
  useEffect(() => {
    // Google Ads Conversion Tracking
    const gtagScript = document.createElement("script");
    gtagScript.innerHTML = `gtag('event', 'conversion', {'send_to': 'AW-922043352/VaL-COnZs80aENiH1bcD'});`;
    document.head.appendChild(gtagScript);
  }, []);

  return (
    <div>
      <main>
        <Helmet>
          <title>Best ENT Clinic In Delhi</title>
          <meta name="description" content="Visit the best ENT Clinic in Delhi offering expert treatments for ear, nose, and throat disorders." />
          <meta name="keywords" content="ENT Clinic Delhi, Best ENT Doctor, Ear Nose Throat Specialist" />
          <link rel="canonical" href="" />
            <meta property="og:title" content="Open Graph Title" />
          <meta property="og:description" content="Open Graph Description for Facebook etc." />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <Breadcrumb />
        <Thanks />
      </main>
    </div>
  );
}
