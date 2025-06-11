import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';

const DynamicContent = ({
  sectionSubTitle,
  sectionTitle,
  sectionDescription,
  fancyBoxTitle,
  fancyBoxLink,
  fancyBoxPrice,
}) => {
  return (
    <div className="col-xl-7 px-xl-8 mt-4 mt-xl-0">
      <div className="pq-section pq-style-1 text-left">
        <span className="pq-section-sub-title">{sectionSubTitle}</span>
        <h2 className="pq-section-title">{sectionTitle}</h2>
        <p className="pq-section-description">{sectionDescription}</p>
      </div>

      <div className="row">
        <div className="col-xl-6 col-md-6">
          <div className="pq-fancy-box pq-style-3">
            <div className="pq-fancy-box-info left">
              <h2 className="pq-fancy-box-title">{fancyBoxTitle}</h2>
              <a className="pq-button pq-button-link" href={fancyBoxLink}>
                <div className="pq-button-block">
                  <span className="pq-button-text">{fancyBoxPrice}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

 
    </div>
  );
};

export default DynamicContent;