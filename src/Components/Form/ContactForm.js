import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./ContactForm.css"

function ContactForm() {
  const [state, handleSubmit] = useForm("xbjqkvbl");
  if (state.succeeded) {
    return <p>Thank you for reaching out! I will respond to you shortly.</p>;
  }
  return (
    <div id="contact">
      <p id="contactHeader">Use the form below to contact me. I look foward to hearing from you!</p>
      <form onSubmit={handleSubmit}>
        <div id="contactForm">
          <label htmlFor="email" className="formLabel">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <label htmlFor="email" className="formLabel">
            Message
          </label>
          <textarea
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} id="submitBtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;