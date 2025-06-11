import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContactUs = () => {
  const navigate=useNavigate();
  const [formDataState, setFormDataState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
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
    formData.append("message", formDataState.message);
    formData.append("subject", formDataState.subject);

    try {
      console.log('hello1');
      
      const response = await axios.post("https://entdelhi.com/mailer/contact.php", formData);

      console.log('hello2');
      
      if (response.data.success) {
        setStatus("Message sent successfully!");
        // Reset form state
        setFormDataState({
          name: "",
          email: "",
          phone: "",
          message: "",
          subject: "",
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
    <section className="pq-contact-us form-map">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 col-md-8 pq-form-box">
            <div className="form-container">
              <div className="pq-section pq-style-1 text-center p-0">
                <span className="pq-section-sub-title">Contact Us</span>
                <h1 className="pq-section-title">Get in touch with us</h1>
              </div>
            </div>
            <div className="pq-applyform-whitebg text-start">
              <form  onSubmit={sendEmail}  >
                <input type="text" name="name" placeholder="Your Name" required value={formDataState.name}
              onChange={handleChange}/>
                <input type="email" name="email" placeholder="Your Email" required value={formDataState.email}
              onChange={handleChange}/>
                <input type="tel" name="phone" placeholder="Your Phone Number" value={formDataState.phone}
              onChange={handleChange} maxLength="13" required onInput={(e) => {
                            e.target.value = e.target.value.replace(/\D/g, "") ;
                          }} />
                <input type="text" name="subject" placeholder="Subject" value={formDataState.subject}
              onChange={handleChange}  required />
                <textarea name="message" placeholder="Your Message" required value={formDataState.message}
              onChange={handleChange}/>
                <button type="submit">Send Message</button>
              </form>
              <p>{status}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
