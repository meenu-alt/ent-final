import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import AllBlogs from './Blogs';



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
                <title>ENT Blogs & Health Articles | Tips from Expert ENT Specialists</title>
                <meta name="description" content="Read expert ENT blogs and articles on nose, throat, and ear health. Stay informed with tips, treatments, and latest updates from leading ENT doctors at ENT Delhi." />
                <meta name="keywords" content="ENT blogs, ENT health tips, ear nose throat articles, ENT Delhi blog, sinus care tips, hearing loss advice" />
                <link rel="canonical" href="https://entdelhi.com/blogs/" />
            <meta property="og:title" content="Open Graph Title" />
                <meta property="og:description" content="Open Graph Description for Facebook etc." />
                <meta name="robots" content="index, follow" />
                {/* You can add more meta tags as needed */}
              </Helmet>
            <AllBlogs/>
           
        </main>
    </div>
  )
}
