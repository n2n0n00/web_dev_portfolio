import React, { useRef, useState } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import useAlert from "./useAlert";
import Alert from "./Alert";

const ContactForm = () => {
  const serviceId = "service_djgreht";
  const templateId = "template_x3tt7f9";
  const publicKey = "eZQDiJOCWAYvf4rKQ";

  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "The Developer",
          from_email: form.email,
          to_email: "athinat690@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);

            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <div className="contact-form-content">
      {alert.show && <Alert {...alert} />}
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="name"
            className="input"
            placeholder="First Name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="email"
          className="input"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="4"
          className="textarea"
          placeholder="Write your message here..."
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading} className="btn">
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
