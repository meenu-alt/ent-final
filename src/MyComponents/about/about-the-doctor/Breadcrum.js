import React, { useEffect, useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const { id } = useParams();
  const [productName, setProductName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (location.pathname.startsWith("/about")) {
          console.log("Fetching data for ID:", id);
          const response = await fetch(`https://api.testing.entdelhi.com/${id}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setProductName(data.name);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [location, id]);

  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbNameMap = {
    "": "Home",
    about: "About",
    "testing.entdelhi.com/about-the-doctor": "About the Clinic",
  };

  return (
      <div className="container mt-4">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav aria-label="breadcrumb">
             
              <div className="pq-breadcrumb-container mt-2">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <i className="fas fa-home mr-2"></i>Home
                    </Link>
                  </li>
                  {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                      <li
                        key={to}
                        className={`breadcrumb-item ${isLast ? "active" : ""}`}
                        aria-current={isLast ? "page" : undefined}
                      >
                        {isLast ? (
                          breadcrumbNameMap[value] || productName || value
                        ) : (
                          <Link to={to}>{breadcrumbNameMap[value] || value}</Link>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </nav>
          </div>
          <div className="col-lg-4">
            <div className="pq-breadcrumb-img text-right wow fadeInRight"></div>
          </div>
        </div>
      </div>
   
  );
};

export default Breadcrumb;