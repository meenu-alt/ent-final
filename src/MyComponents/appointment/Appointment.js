import React, { useRef, useState } from "react";
import axios from "axios";

import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
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
      <section className="pq-contact-us form-map" style={{ bottom: "50px" }}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8 col-md-8 pq-form-box">
              <div className="form-container">
                <div className="pq-section pq-style-1 text-center p-0">
                  <span className="pq-section-sub-title">Contact Us</span>
                  <h1 className="pq-section-title">
                    Get an Appointment with us
                  </h1>
                </div>
              </div>
              <div className="pq-applyform-whitebg text-start">
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
      </section>
    </div>
  );
};

export default Appointment;
