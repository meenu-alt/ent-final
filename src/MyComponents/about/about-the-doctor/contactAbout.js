import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./about-the-doctor.css";

const ContactInfo = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6"
            style={{
              gap: "20px",
              display: "flex",
              flexDirection: "column",
            }}>
            <div className="contact-box">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-info">
                <h4 className="contact-title">Address</h4>
                <p className="contact-description">
                  D 3/14, Ground Floor Vasant Vihar, New Delhi 110 057
                  <br />
                  <strong>Mobile:</strong>{" "}
                  <a href="tel:+919871150032">+91 9871150032</a>
                </p>
              </div>
            </div>

            <div className="contact-box">
              <div className="contact-icon">
                <FaClock />
              </div>
              <div className="contact-info">
                <h4 className="contact-title">Hour of Operation</h4>
                <p className="contact-description">
                  <strong>Monday To Saturday</strong>
                  <br />
                  <strong>Morning Timing:</strong> 09:30 AM - 12:30 PM
                  <br />
                  <strong>Evening Timing:</strong> 4:30 PM - 7:00 PM
                  <br />
                  <br />
                  <strong>Thursday Morning Clinic Is Closed</strong>
                  <br />
                  <strong>Thursday Evening:</strong> 4:30 PM - 7:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-box map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1814325306223!2d77.15069767613541!3d28.564314087174107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dac3cbaeea1%3A0xda530ec64e7913b3!2sDr%20Rajesh%20Bhardwaj%20-%20Best%20ENT%20Clinic!5e0!3m2!1sen!2sin!4v1741609904082!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: "none", borderRadius: "10px" }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
