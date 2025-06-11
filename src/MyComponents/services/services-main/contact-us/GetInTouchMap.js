import { useState } from "react";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/mailer.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.text();
      setStatus(result); 
    } catch (error) {
      setStatus("Error sending message. Please try again.");
      console.error("Error:", error);
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
                <h2 className="pq-section-title">Get in touch with us</h2>
              </div>
            </div>
            <div className="pq-applyform-whitebg text-start">
            <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      <p>{status}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="map pt-0">
        <div className="pq-bg-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1814325306223!2d77.15069767613541!3d28.564314087174107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dac3cbaeea1%3A0xda530ec64e7913b3!2sDr%20Rajesh%20Bhardwaj%20-%20Best%20ENT%20Clinic!5e0!3m2!1sen!2sin!4v1741609904082!5m2!1sen!2sin"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
