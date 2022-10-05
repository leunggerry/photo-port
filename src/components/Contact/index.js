import React, { useState } from "react";

function ContactForm() {
  //Hooks that manage the form data
  //initialize state to empty strings
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  //desctruct formState
  const { name, email, message } = formState;

  //function declarations
  /**
   * Sync the sate of the input
   * @param {*} e
   */
  function handleChange(e) {
    // spread operator ...formstate, so we can retain other key-value pairs in object
    // without it formState object would be overwritten
    // name property of target -refers  to the name attribute of the forma element
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
          <input type="text" defaultValue={name} name="name" onChange={handleChange} />
          {/* handlechange is there to save the state (sync the state) */}
        </div>
        {/* // email */}
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onChange={handleChange} />
        </div>
        {/* // message text area */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows={5} defaultValue={message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
