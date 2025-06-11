import React, { useRef, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function GetInTouch() {
  const navigate=useNavigate();
  const [formDataState, setFormDataState] = useState({
    name: "",
    email: "",
    phone: "",
    findUs: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

   const sendEmail = async (e) => {
    e.preventDefault();

    // Prepare FormData object
    const formData = new FormData();
    formData.append("name", formDataState.name);
    formData.append("email", formDataState.email);
    formData.append("phone", formDataState.phone);
    formData.append("findUs", formDataState.findUs);
    formData.append("message", formDataState.message);

    try {
      console.log('hello1');
      
      const response = await axios.post("https://entdelhi.com/mailer/mailer.php", formData);

      console.log('hello2');
      
      if (response.data.success) {
        setStatus("Message sent successfully!");
        // Reset form state
        setFormDataState({
          name: "",
          email: "",
          phone: "",
          findUs: "",
          message: "",
        });
        // ✅ Redirect to thank you page
      navigate("/thank-you");
      } else {
        setStatus("Failed to send message.");
        console.error(response.data.error);
      }
    } catch (error) {
      console.log('bye');
      
      setStatus("Something went wrong!");
      console.error("Axios error:", error);
    }
  };
  return (
    <div>
      <section className="get-in-touch">
        <div className="container">
          <div className="pq-bg-white pq-form-bg-white p-3">
            <div className="row align-items-center">
              <div className="col-xl-6 ps-xl-4 mt-xl-0 ">
                <div className="pq-section pq-style-1 text-left">
                  <h2 className="pq-section-title">Get In Touch</h2>
                  
                  <div className="pq-section pq-style-1 text-left">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1814325306223!2d77.15069767613537!3d28.564314087174107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dac3cbaeea1%3A0xda530ec64e7913b3!2sDr%20Rajesh%20Bhardwaj%20-%20Best%20ENT%20Clinic!5e0!3m2!1sen!2sin!4v1741353822175!5m2!1sen!2sin"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Maps"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 ps-xl-4  mt-xl-0">
                <div className="pq-applyform-whitebg p-3">
                <form onSubmit={sendEmail}>
        <div className="row">
          <div className="col-md-12">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formDataState.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formDataState.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formDataState.phone}
              onChange={handleChange}
              required onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "") ;
              }}
            />
          </div>
          <div className="col-md-12">
            <input
              type="text"
              name="message"
              placeholder="Query"
              value={formDataState.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12">
            <select
              name="findUs"
              value={formDataState.findUs}
              onChange={handleChange}
              required
            >
              <option value="" disabled>How did you find us?</option>
              <option value="youtube">YouTube</option>
              <option value="instagram-facebook">Instagram/Facebook</option>
              <option value="google">Google</option>
              <option value="reference">Reference</option>
            </select>
          </div>
          <div className="col-md-12 pt-2">
            <button type="submit">Send Message</button>
          </div>
        </div>
      </form>
                  <p>{status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}