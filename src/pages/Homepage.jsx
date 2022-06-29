import React from 'react'
import Layout from '../components/Layout'
import img from '../assets/themain.png'
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { FaLinkedin } from 'react-icons/fa'

const Homepage = () => {
  return (
    <Layout>
      <section className="hero">
        <div className="heroImg">
          <img src={img} alt="" />
        </div>

        <div className="heroText">
          <h1>Hi, I'm Mojisola</h1>
          <h4>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
            <div className="socialIcons">
              <FiInstagram className="icon" />
              <FiTwitter className="icon" />
              <FaLinkedin className="icon" />
            </div>
          </h4>
        </div>
      </section>
    </Layout>
  );
}

export default Homepage