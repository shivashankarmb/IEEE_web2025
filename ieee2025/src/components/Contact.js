import React from 'react';
import './Contact.css';

function ContactUs() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-card">
        <p><strong>BNMIT IEEE PES Student Chapter</strong></p>
        <p>Dr. Madhu S, Faculty Advisor: 9886496914</p>
        <p>Ms. Deekshitha K, Student Chair: 9019876798</p>
        <p>Ms. Shaswatha V, Student Co-chair: 7204470201</p>
        <p>Mail ID: <a href="mailto:pesieeebnmit@gmail.com">pesieeebnmit@gmail.com</a></p>
      </div>
    </div>
  );
}

export default ContactUs;
