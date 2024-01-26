import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const email = `athinat690@gmail.com`;

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./assets/images/email-icon.svg"
            text="Gmail"
            href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(
              email
            )}`}
          />

          <ContactInfoCard
            iconUrl="./assets/images/github-icon.svg"
            text="GitHub"
            href="https://github.com/n2n0n00"
          />
        </div>

        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
