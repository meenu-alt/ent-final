import React from 'react';
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import entimg from "./images/ent-surgery.jpeg";
import image1 from "./images/2.webp";
import image2 from "./images/3.webp";
import image3 from "./images/4.webp";
import image4 from "./images/5.webp";
import image5 from "./images/6.webp";
import image6 from "./images/7.webp";
import image7 from "./images/8.webp";
import image8 from "./images/9.webp";
import image9 from "./images/10.webp";
import image10 from "./images/11.webp";
import image11 from "./images/12.webp";
import image12 from "./images/13.webp";

const EntSurgery = () => {
  return (
    <>
      <section className="left-right-section">
      <style>
        {`
        section {
    position: relative;
    padding: 15px 0px !important;
}`}
      </style>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pe-xl-5 text-center">
              <img
                src={entimg}
                className="img-fluid wow fadeInRight"
                alt="ent-surgery-procedure"
              />
            </div>

            <div className="col-xl-6 px-xl-4 mt-4 mt-xl-0">
              <div className="pq-section pq-style-1 text-left">
                <h2 className="pq-section-title">ENT Surgery</h2>
                <p>
                  From basic to advanced, all ENT Surgeries are offered at the
                  Centre. We partner with some of the leading hospitals in South
                  Delhi for panel patients.
                </p>
                <p>
                  Dr. Bhardwaj is a senior well-trained ENT Surgeon. All routine
                  ENT surgeries are performed by him, including Adenoid removal,
                  Tonsillectomy, Microlaryngeal Surgery, and Ear surgeries
                  including Mastoidectomy, Tympanoplasty, Septoplasty,
                  Endoscopic Sinus Surgery, etc.
                </p>
                <button className="btn " style={{backgroundColor: "#0f995f", color:"white", marginTop: "10px"}}>Book An Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ent-surgery-section py-5">
        <div className="container pq-section pq-style-1 ">
          <h2 className="pq-pq-section-subtitle sub-subtitle text-center">
            Medfirst - The Best ENT Surgery Centre in Delhi
          </h2>
          <p className="text-center mb-5">
            Welcome to our world-class ENT surgery center, where we prioritize
            your well-being above all else. Our team of expert ENT surgeons is
            committed to delivering top-notch care, specializing in a wide range
            of procedures. Whether it’s sinus surgery, tonsillectomy, or other
            complex ENT surgeries, you can trust our experienced surgeons to
            provide exceptional results. As the best clinic in the region, we
            take pride in delivering personalized care and achieving optimal
            outcomes for our patients. Your health is our priority, and we’re
            dedicated to helping you breathe, hear, and live better.
          </p>

          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            {surgeryProcedures.map((procedure, index) => (
              <div key={index} className="col">
                <div className="card h-100 text-center">
                  <img
                    src={procedure.image}
                    className="card-img-top"
                    alt={procedure.title}
                  />
                  <div className="card-body">
                    <h2 className="card-title">{procedure.title}</h2>
                    <p className="card-text">{procedure.description}</p>
                    {/* Add a button to link to the service page */}
                    {/* <Link
                      to={`/${procedure.title
                        .toLowerCase()
                        .replace(/ /g, "-")
                        .replace("adenoidectomy", "adenoide-surgery")}`}
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link> */}
                    {/* <Link
                      to={`/${procedure.title.toLowerCase().replace(/ /g, "-")}`}
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link> */}
                    <Link
  to={`/${procedure.route}`} // Use the custom route name
  className="btn btn-primary"
>
  Learn More
</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fess-section">
        <div className="container pq-section pq-style-1 text-left">
          <h2 className="section-title main-title text-center">
            Insurance and TPA for ENT Surgeries
          </h2>
          <div className="content">
            <p>
              At MedFirst ENT Centre, we prioritize our patients’ well-being and
              strive to make their healthcare journey as smooth as possible. We
              understand that managing medical expenses and insurance can be a
              concern for many individuals. That’s why we have partnered with a
              trusted Third-Party Administrator (TPA) to offer you a hassle-free
              and efficient way to handle your insurance claims.
            </p>
            <p>
              We understand the significance of Health Policy in your medical
              journey. If you’re among those fortunate individuals with Health
              Policy coverage, you’ll be pleased to know that we offer an array
              of state-of-the-art ENT surgeries, including but not limited to
              sinus surgery, tonsillectomy, and adenoidectomy. We are proud to
              provide a seamless, cashless experience, ensuring that your health
              policy takes care of the financial aspects, allowing you to focus
              on your well-being.
            </p>
            <p>
              With our Insurance and TPA support, you can rest assured that your
              ENT surgery expenses will be efficiently managed, allowing you to
              focus on your health and recovery. Our experienced team will work
              closely with your insurance providers and TPAs to handle all
              paperwork and approvals, minimizing any administrative burden on
              your end.
            </p>
          </div>
        </div>
      </section>

      <section className="fess-section beige-bg">
        <div className="container pq-section pq-style-1 text-left">
          <h2 className="section-title main-title text-center">
            Best ENT Surgery in Delhi
          </h2>
          <div className="content">
            <p>
              An ENT doctor or otolaryngologist specializes in the diagnosis and
              treatment of conditions affecting the ears, nose, and throat. The
              doctor is also well-trained in various head and neck surgeries.
            </p>
            <p>
              Both non-surgical and surgical procedures can be performed by an
              ENT surgeon. An ENT surgery is generally suggested when
              medications and non-invasive treatments fail to work. Surgery may
              also be recommended to address various deformities and injuries.
            </p>
            <p>
              MedFirst ENT Centre is the best ENT surgery centre in Delhi
              offering world-class medical procedures and top-notch care under
              the guidance of Dr. (Major) Rajesh Bhardwaj, a renowned ENT
              surgeon having more than thirty years of expertise in successfully
              performing various types of simple and complex ENT surgeries to
              date.
            </p>
          </div>
        </div>
      </section>

      <section className="fess-section">
        <div className="container pq-section pq-style-1 text-left">
          <h2 className="section-title main-title text-center">
            Why Choose MedFirst for the Best ENT Surgery in Delhi
          </h2>
          <div className="content">
            <p>
              If you are looking for ENT surgery in Delhi, you should contact
              MedFirst ENT Centre for the best treatment outcomes. The following
              facilities provided by us give us an edge over other ENT centres
              in Delhi:
            </p>
            <ul className="key-points">
              <li>Senior and experienced ENT surgeon</li>
              <li>
                Same senior doctors for subsequent treatments and follow-up
                appointments
              </li>
              <li>Personalized care</li>
              <li>
                No changes in appointment slots or doctors like other hospitals
              </li>
              <li>
                Strict appointment scheduling with minimal or no waiting time
              </li>
              <li>Best in class equipment</li>
              <li>Experienced, polite, and trained ENT staff</li>
              <li>Sanitized and hygienic premises</li>
              <li>Comprehensive ENT care under one roof</li>
              <li>Ground floor facility and no steps to go to the OPD</li>
              <li>E-prescriptions facility</li>
              <li>Convenient location</li>
              <li>Affordable treatments</li>
              <li>Acceptance of insurance</li>
              <li>
                Partnered with TPA (Third-Party Administrator) to provide
                hassle-free and easy ways to handle insurance claims
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="fess-section beige-bg">
        <div className="container pq-section pq-style-1 text-left">
          <h2 className="section-title main-title text-center">
            Advanced Technology & Facilities
          </h2>
          <div className="content">
            <p>
              At MedFirst ENT Centre, we use the following advanced facilities
              and technology to help us provide successful treatment outcomes
              and make us the best ENT surgery clinic in Delhi:
            </p>
            <ul className="key-points">
              <li>Well-equipped operation theater (OT)</li>
              <li>High-end nasal endoscope</li>
              <li>Latest microscope with a camera</li>
              <li>Pure tone, impedance audiometer</li>
              <li>Nerve stimulator</li>
              <li>High-end microdrill</li>
              <li>Flexible bronchoscope</li>
              <li>Suction and syringe equipment</li>
              <li>
                OAE (otoacoustic emission) and BERA (brainstem evoked response
                audiometry) screening machine to detect hearing loss in children
              </li>
              <li>
                Facilities for emergency ENT procedures like foreign body
                removal
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
const surgeryProcedures = [
  {
    title: "Tonsillectomy",
    image: image1,
    description:
      "Relieving chronic tonsillitis and breathing problems through surgical removal.",
    route: "tonsillectomy",
  },
  {
    title: "Adenoidectomy",
    image: image2,
    description:
      "Removing adenoids to treat infections, breathing issues, and ear infections.",
      route:"adenoid-surgery",
  },
  {
    title: "Myringoplasty",
    image: image3,
    description:
      "Repairing eardrum or middle ear damage to improve hearing and reduce infection risk.",
      route: "myringoplasty",
  },
  {
    title: "Myringotomy",
    image: image4,
    description:
      "Myringotomy is a surgical procedure for middle ear fluid buildup, relieving pressure and improving ventilation.",
      route:"myringotomy-with-grommet",
  },
  {
    title: "Septoplasty",
    image: image5,
    description:
      "Correcting Deviated Nasal Septum for Improved Breathing and Reduced Symptoms.",
      route: "septoplasty",
  },
  {
    title: "Turbinectomy",
    image: image6,
    description:
      "Surgical removal of nasal turbinates to improve airflow and filtration function.",
      route: "tonsillectomy",
  },
  {
    title: "FESS",
    image: image7,
    description:
      "Surgeries for sinus diseases, improving drainage and treating nasal polyps and tumors.",
      route: "functional-endoscopic-sinus-surgery",
  },
  {
    title: "Nasal Polypectomy",
    image: image8,
    description:
      "Surgical removal of nasal polyps causing obstruction, discharge, and loss of smell.",
      route: "nasal-polyp-removal",
  },
  {
    title: "Snoring Sleep Apnea Surgery",
    image: image9,
    description:
      "Surgery for sleep-related breathing disorders like snoring and obstructive sleep apnea.",
      route: "snoring-sleep-apnea-surgery",
  },
  {
    title: "Mastoidectomy",
    image: image10,
    description:
      "Removal of infected mastoid bone to treat complications like mastoiditis and cholesteatoma.",
      route: "mastoidectomy",
  },
  {
    title: "MLS",
    image: image11,
    description:
      "Microlaryngeal surgery (MLS) treats deep throat swelling or growth without external incisions under general anesthesia.",
      route: "microlaryngeal-surgery-mls",
  },
  {
    title: "Removal of Neck Swelling",
    image: image12,
    description:
      "Neck Swelling Removal, including lymph nodes, glands, and cysts, with anesthesia tailored to the size, location, and patient’s preference.",
      route: "neck-swelling-surgery",
  },
];

export default EntSurgery;
