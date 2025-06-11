import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  // FaEnvelope,
  FaClock,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="pq-contact-us">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="pq-contact-box">
              <div className="pq-contact-box-icon">
                <div className="icon animation-grow">
                  <FaMapMarkerAlt />
                </div>
              </div>
              <div className="pq-contact-box-info">
                <h4 className="pq-contact-box-title">Our Location</h4>
                <p className="pq-contact-box-description">
                  D 3/14, Ground Floor Vasant Vihar New Delhi 110 057
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-md-0 mt-4">
            <div className="pq-contact-box">
              <div className="pq-contact-box-icon">
                <div className="icon animation-grow">
                  <FaPhoneAlt />
                </div>
              </div>
              <div className="pq-contact-box-info">
                <h4 className="pq-contact-box-title">Our Contact</h4>
                <p className="pq-contact-box-description">
                  +91 98711 50032
                  <br />
                  +91 92055 85295
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-4">
            <div className="pq-contact-box">
              <div className="pq-contact-box-icon">
                <div className="icon animation-grow">
                  <FaClock />
                </div>
              </div>
              <div className="pq-contact-box-info">
                <h4 className="pq-contact-box-title">Hour of Operation</h4>
                <p className="pq-contact-box-description">
                  Monday To Saturday
                  <br />
                  <strong>Morning Timing:</strong> 09:30 AM to 12:00 PM
                  <br />
                  <strong>Evening Timings:</strong> 4:30 PM to 7:00 PM
                  <br />
                  <strong>Thursday:</strong> Morning Clinic Closed, Evening 4:30
                  PM to 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
