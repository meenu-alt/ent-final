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
                  <h1 className="pq-section-title"> Neck Swelling Surgery </h1>
                  <p className="pq-section-description">
                A benign neck mass refers to a non-cancerous lump or swelling in the neck that can arise from various tissues, including lymph nodes, salivary glands, fat, or congenital remnants. While these swellings are typically harmless, they may cause discomfort, cosmetic concerns, or raise suspicion of more serious conditions.
Common types of benign neck swellings includes Reactive lymphadenopathy – enlarged lymph nodes due to infection or inflammation, Thyroglossal duct cysts – congenital cysts usually located in the midline of the neck, Branchial cleft cysts – developmental cysts typically found on the side of the neck, Lipomas – soft, fatty, slow-growing tumours under the skin – and benign salivary gland tumours – such as pleomorphic adenoma.  
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
