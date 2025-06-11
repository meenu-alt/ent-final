import React, { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function TitleForm() {
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
      <section className="about-us">
        <div className="container">
          <div className="row">
              <div className="col-xl-7 px-xl-8 mt-4 mt-xl-0">
                <div className="pq-section pq-style-1 text-left">
                  <span className="pq-section-sub-title">Medfirst ENT Centre</span>
                  <h1 className="pq-section-title">
                  Mastoidectomy Surgery
                  </h1>
                  <p className="pq-section-description">
                  Mastoidectomy is a surgical procedure performed to remove infected air cells from the mastoid bone, which is located just behind the ear. The mastoid bone contains air spaces that are connected to the middle ear. When an ear infection spreads or becomes chronic, it can involve the mastoid bone and lead to a condition called mastoiditis or cholesteatoma — both of which may require surgical treatment.
The goal of mastoidectomy is to eliminate infection, prevent complications, and preserve hearing. It is commonly performed for patients with chronic ear infections that do not respond to medical treatment, persistent ear discharge, or growth of abnormal skin tissue (cholesteatoma) in the middle ear and mastoid.
                  </p>
                  </div>

                
              </div>
            <div className="col-xl-5 pe-xl-4">
              <div className="pq-bg-white pq-form-bg-white p-4">
                <div className="pq-applyform-whitebg p-4">
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
