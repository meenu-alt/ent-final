import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import Appointment from "./Appointment";

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
        <title>Book Appointment Online | MedFirst ENT Centre</title>
        <meta name="description" content="Schedule your appointment with MedFirst ENT Centre. Quick online booking for comprehensive ear, nose, and throat care." />
        <meta name="keywords" content="book ENT appointment, ENT doctor booking Delhi, ENT consultation Delhi, ENT appointment online" />
        <link rel="canonical" href="https://entdelhi.com/book-an-appointment/" />
            <meta property="og:title" content="Open Graph Title" />
        <meta property="og:description" content="Open Graph Description for Facebook etc." />
        <meta name="robots" content="index, follow" />
        {/* You can add more meta tags as needed */}
      </Helmet>
      <main>
        <Appointment/>
      </main>
    </div>
  );
}

export default Home;    

