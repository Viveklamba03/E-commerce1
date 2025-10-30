import React from "react";
import "./contact.css";

export default function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Please fill out the form below or reach us
          using the details on the right.
        </p>
      </div>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <form>
            <label>Name</label>
            <input type="text" placeholder="Your Full Name" />

            <label>Email</label>
            <input type="email" placeholder="you@example.com" />

            <label>Subject</label>
            <input type="text" placeholder="Message Subject" />

            <label>Message</label>
            <textarea placeholder="Write your message here..." rows="5"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>📍 123 Your Street, City, Country</p>
          <p>📞 +1 (234) 567-890</p>
          <p>✉ support@bonik.com</p>

          <div className="business-hours">
            <h3>Business Hours</h3>
            <ul>
              <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
              <li>Sat: 10:00 AM – 4:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>

          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="map-container">
        <iframe
          title="Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.016746295809!2d-122.40135022402842!3d37.79362061108347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f63c8f45%3A0x3b70e6b36f70db!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1693660376413!5m2!1sen!2sus"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
