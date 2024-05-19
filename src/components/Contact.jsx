import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <main>
          <h1>Contact Us</h1>

          <form>
            <div>
              <label>Name</label>
              <input type="text" required placeholder="Enter your name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" required placeholder="Abc@xyc.com" />
            </div>
            <div>
              <label>Message</label>
              <input
                type="text"
                required
                placeholder="Tell us about your query..."
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Contact;
