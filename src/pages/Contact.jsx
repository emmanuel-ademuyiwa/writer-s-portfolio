import React, { useState } from "react";
import Layout from "../components/Layout";
import img from "../assets/mainmain.jpeg";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const { fullname, email, message } = formData;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullname: "",
      email: "",
      message: "",
    });
    alert('Thank you for reaching out')
  }

  function handleChange(event) {
    event.preventDefault();
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <Layout>
      <div className="contact">
        <h1>Let's Talk</h1>
        <div className="contactContent">
          <div className="form">
            <form action="" onSubmit={handleSubmit}>
              <label className="label" htmlFor="name">
                Name:
              </label>
              <br />
              <input
                type="text"
                name="fullname"
                placeholder="Your name"
                value={fullname}
                onChange={handleChange}
              />
              <br />

              <label className="label" htmlFor="email">
                Email:
              </label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                value={email}
                onChange={handleChange}
              />
              <br />

              <label className="label" htmlFor="message">
                Message:
              </label>
              <br />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Enter your message"
                value={message}
                onChange={handleChange}
              />
              <br />

              <button>Submit</button>
            </form>
          </div>
          <div className="imgContainer">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
