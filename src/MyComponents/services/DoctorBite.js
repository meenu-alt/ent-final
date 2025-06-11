import React from 'react';
import Doc from "./images/doctor-images/Dr-Rajesh-Bhardwaj..png";

export default function DoctorBite() {
  return (
    <div>
      <main>
        <section className="pq-home2-about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="pq-section pq-style-1 text-center">
                  <span className="pq-section-sub-title">About the doctor</span>
                  <h2 className="pq-section-title">
                    Dr. (Major) Rajesh Bhardwaj MBBS (AFMC), MS, DNB, DLO, DHA
                  </h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 d-flex align-items-center">
                <div className="pq-tab-info">
                  <p>
                    Dr. (Major) Bhardwaj graduated from Armed Forces Medical College (AFMC), Pune in 1982 and served in the Indian Army for 15 years, where he gained vast clinical experience as an ENT specialist. He has served in the largest and busiest hospitals of the armed forces, including Command Hospitals at Pune and Chandigarh and at the Army Hospital (R&R), Delhi Cantt.
                  </p>
                  <p>
                    Dr. Bhardwaj earned his blue and white striped Siachen Glacier Medal for his long stint on the Siachen glacier in 1984 and was the first medical officer to complete his tour of duty without being medically evacuated. He also served at Jaffna (Sri Lanka) during the peacekeeping mission, handling multiple casualties daily with his surgical expertise.
                  </p>
                  <a className="pq-button pq-button-flat mt-4" href="about-us.html">
                    <div className="pq-button-block">
                      <span className="pq-button-text">Read More</span> <i className="ion ion-plus-round"></i>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 d-flex justify-content-center">
                <div className="position-relative text-center" style={{ Width: '100%', height:'100%' }} >
                  <img src={Doc} className="img-fluid pq-image1 rounded shadow-lg" alt="Doctor 1" style={{ maxWidth: '100%' }} />
                 
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
