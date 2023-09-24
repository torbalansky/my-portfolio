import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // Import emailjs library for sending emails
import Map from "./map";
import facebookIcon from "../img/facebook.png";
import twitterIcon from "../img/twitter.png";
import githubIcon from "../img/github_logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const FloatingArrow = ({ className }) => {
  return (
    <motion.div
      animate={{
        x: [0, 10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className={`w-6 h-6 ${className}`}
      style={{
        background: "transparent",
        borderTop: "10px solid transparent",
        borderBottom: "10px solid transparent",
        borderRight: "20px solid #d1f8fd",
        position: "fixed",  
        bottom: "0",
        left: "20px",
      }}
    ></motion.div>
  );
};

const Contact = () => {
  // Create a reference to the form element
  const formRef = useRef();
  // Initialize state for form input values
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Function to handle changes in form input fields
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    // Update the form state with the new input value
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Function to handle form submission (sending email)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Send email using emailjs
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Patso",
        from_email: form.email,
        to_email: "torbalansky@gmail.com",
        message: form.message,
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I'll get back to you asap.");
          
          // Clear the form input fields after successful submission
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
    id="contact"
    className={`w-full h-full flex xl:flex-row flex-col-reverse overflow-hidden custom-media3 md:flex-col ${
      'lg:mt-0 md:mt-10 sm:mt-20' }`}
  >
    <div className="w-full flex flex-col items-center justify-center space-y-2 md:flex-row pb-6">
      <div className="max-w-7xl mx-auto p-5 text-white">
          <p>Contact Information: torbalansky@gmail.com</p>
          <p>Phone: +351910808938</p>
          <div className="flex flex-row justify-between mt-2">
          <a href="https://www.facebook.com/patzu.rs"><img src={facebookIcon} alt="Facebook" /></a>
           <a href="https://twitter.com/pstathis2"><img src={twitterIcon} alt="Twitter" /></a>
          <a href="https://github.com/torbalansky"><img src={githubIcon} alt="GitHub" /></a>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center space-y-2 custom-media3">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-5 mx-auto flex flex-col gap-4 items-center"
          >
              <label className="flex flex-col w-[300px]">
                <span className="text-white font-medium mb-1">Get in touch:<br></br>Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name..."
                  className="bg-tertiary py-1 px-2 placeholder:text-secondary text-white outline-none border border-1px font-medium hover:bg-gray-800"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your e-mail</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your e-mail..."
                  className="bg-tertiary py-1 px-2 placeholder:text-secondary text-white outline-none border border-1px font-medium w-[300px] hover:bg-gray-800"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Message</span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  style={{ height: '100px' }}
                  className="bg-tertiary py-1 px-2 placeholder:text-secondary text-white border border-1px font-medium w-[300px] hover:bg-gray-800"
                />
              </label>
              <button
                type="submit"
                className="bg-blue-600 py-2 text-white font-bold shadow-md shadow-primary w-[300px] hover:bg-blue-800 mb-4"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
        </div>
        <div className="flex flex-0.5 w-full h-screen custom-media2">
          <Map></Map>
      </div>
      <div>
        <Link to="/work">
          <FloatingArrow />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
