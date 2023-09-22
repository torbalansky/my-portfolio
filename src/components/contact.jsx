import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Map from "./map";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

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
    <section className="w-full h-full mt-[30px] flex xl:flex-row flex-col-reverse overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center space-y-2 md:flex-row">
        <div className="md:p-20 w-full md:w-[50%]">
        <p className={`${styles.SubText} text-center mt-1`}>Contact</p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-5 mx-auto flex flex-col gap-4 items-center"
          >
              <label className="flex flex-col w-[300px]">
                <span className="text-white font-medium mb-1">Your Name</span>
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
                className="bg-blue-600 py-2 text-white font-bold shadow-md shadow-primary w-[300px] hover:bg-blue-800 mt-2 mb-4"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-2 w-full h-full">
          <Map></Map>
        </div>
    </section>
  );
};

export default Contact;
