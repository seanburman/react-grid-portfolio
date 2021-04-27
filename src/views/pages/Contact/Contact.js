import React, { useState } from "react";
import './ContactForm.css';
import './Contact.css';

var submit_msg = ""

const ShowStatus = ({header}) => {

  console.log(header)

  const messages = {
    sent: "Your message was sent successfully!",
    fail: "Your message failed to send"
  }

  let status = header === "SUCCESS" ? "true" : "false"
  const message = status === "true" ? messages.sent : messages.fail
  submit_msg = message

  return (
    <div className="grid-container-col-1">
      <h2 className="message-sent">Message Sent</h2>
      <p>Thank you for reaching out to me! <br />I will respond to your message via email within 24 hours.</p>
    </div>
   
  )
}

export function ContactForm() {
  const [status, setStatus] = useState("Send Message");
  const [alert, setAlert ] = useState(false);
  const [ header, setHeader ] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://safe-chamber-60817.herokuapp.com/sean", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Accept": "application/json"
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    setHeader(result.status)
    setAlert(true)
    setStatus(submit_msg)
    
  };
  return (
    <React.Fragment>

    {
      alert === false &&
    <div className="form-wrapper">
          <form onSubmit={handleSubmit} id="contact-form">
          <div className="field">
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" required />
          </div>
          <div className="field"> 
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message:</label><br />
            <textarea id="message" required />
          </div>
          <button type="submit" className="form-button">{status}</button>
          
    
        </form>
    </div>
    
    }
    {
      alert === true && <ShowStatus header={header} />
    }
    </React.Fragment>
    
  );
};
export default function Contact() {

    const centre = { textAlign: "center", width: "100%"}
    const paragraph = { textAlign: "center", width: "100%"}
    return (
      <div className="grid-container-contact">
        
            
            <p className="ubuntu contact-info" style={paragraph}>
            <h2 className="blue contact-header" style={centre}>Contact Me</h2>
            <a href="tel:15879141797">+1 587 914 1797</a><br />
            <a href="mailto:sean@seanburman.ca">sean@seanburman.ca</a>
            
            </p><br />
        
        <div className="contact-wrapper fade-in">
        <ContactForm />
        </div>
        
        </div>
        
    )
}
