/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={`d-flex justify-content-center ${styles.form_box}`}>
      <form id="contact_form" action="#" method="POST" encType="multipart/form-data">
        <div className="row">
          <label className="required" htmlFor="name">Your name :</label><br />
          <input id="name" className={`input ${styles.input} ${styles.inputText}`} name="name" type="text" size="30" /><br />
          <span id="name_validation" className={`error_message ${styles.error_message}`}></span>
        </div>
        <div className="row">
          <label className="required" htmlFor="email">Your email :</label><br />
          <input id="email" className={`input ${styles.input} ${styles.inputText}`} name="email" type="text" size="30" /><br />
          <span id="email_validation" className={`error_message ${styles.error_message}`}></span>
        </div>
        <div className="row">
          <label className="required" htmlFor="message">Your message :</label><br />
          <textarea id="message" className={`input ${styles.input}`} name="message" rows="7" cols="30"></textarea><br />
          <span id="message_validation" className={`error_message ${styles.error_message}`}></span>
        </div>
        <input id="submit_button" className={`submit_button ${styles.submit_button}`} type="submit" value="Send email" />
      </form>
    </div>
  );
};

export default ContactForm;
