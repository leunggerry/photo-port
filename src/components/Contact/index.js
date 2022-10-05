import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  //Hooks that manage the form data
  //initialize state to empty strings
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  //desctruct formState
  const { name, email, message } = formState;

  //message handlers
  const [errorMessage, setErrorMessage] = useState("");

  //function declarations
  /**
   * Sync the sate of the input
   * @param {*} e
   */
  function handleChange(e) {
    //validate email
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    }
    //validate input for name and message
    else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    // spread operator ...formstate, so we can retain other key-value pairs in object
    // without it formState object would be overwritten
    // name property of target -refers  to the name attribute of the forma element
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  /**
   * Handle the submission of the form
   * @param {*} e
   */
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* //name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} name="name" onBlur={handleChange} />
          {/* handlechange is there to save the state (sync the state) */}
        </div>
        {/* // email */}
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        {/* // message text area */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows={5} defaultValue={message} onBlur={handleChange} />
        </div>
        {/* if statement (if (errorMessage)) */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
