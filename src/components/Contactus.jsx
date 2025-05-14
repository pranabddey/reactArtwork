import React from 'react';
import './Contactus.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Contactus() {
  return (
    <div className="contactus-container">
      <h1>Contact Us</h1>

      {/* 📍 Google Map */}
      <div className="contact-section">
        <h2><FaMapMarkerAlt className="icon" /> Our Location</h2>
        <div className="map-container">
          <iframe
            title="Google Map - Our Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14729.376363859378!2d88.471687!3d22.690447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89cf30f60a3c9%3A0xa901f1ee15ff4f1c!2sMaa%20Sarada%20Ln%2C%20Shri%20Nagar%2C%20Netaji%20Nagar%2C%20Madhyamgram%2C%20West%20Bengal%20700129!5e0!3m2!1sen!2sin!4v1715678030000!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="info-box">
            <h3>Our Address</h3>
    <h3>Madhyamgram</h3>
    <p>3 No SreeNagar,Maa Saradalane L2, West Bengal 700129</p>
  </div>
      </div>

      {/* 📝 Google Form */}
      {/* <div className="contact-section">
        <h2>Contact Form</h2>
        <div className="form-container">
          <iframe
            title="Google Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSe...your_form_id.../viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div> */}

      {/* 📧 Email and 📞 Call */}
      <div className="contact-section">
        <h2>Reach Us Directly</h2>
        <p><FaEnvelope className="icon" /> Email: <a href="mailto:pranabdey0506@gmail.com">pranabdey0506@gmail.com</a></p>
        {/* <p><FaPhoneAlt className="icon" /> Call: <a href="tel:+7003748323">+91 7003748323</a></p> */}
      </div>
    </div>
  );
}

export default Contactus;

