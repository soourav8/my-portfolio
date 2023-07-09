import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import contact from "../../assets/lottie/contact.json";

import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kznx2lk",
        "template_aof89sn",
        form.current,
        "Yjbjq1otJHXyTnhNQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="email  mb-10 lg:mb-[15rem] " id="contact">
      <p className="text-4xl mb-10 text-center">Contact</p>
      <div className="flex flex-col md:flex-row items-center px-2 lg:p-0">
        <div data-aos="fade-right">
          <Lottie animationData={contact}></Lottie>
        </div>
        <form ref={form} onSubmit={sendEmail} className="mt-5" data-aos="fade-left">
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            className="border border-solid border-stone-950"
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className="border border-solid border-stone-950"
          />
          <label>Message</label>
          <textarea
            name="message"
            rows={8}
            className="border border-solid border-stone-950"
          />
          <input
            className="bg-transparent hover:bg-[#48b9ee] text-[#4cbcf0] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
