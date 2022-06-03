import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { ArrowForward } from "@material-ui/icons";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* About us hero section */}
      <div className="about">
        <div className="about__title">
          <div className="underline"></div>
          <p>About us</p>
        </div>
        <div className="about__callout display-5">
          <p>Built for SaaS and E-Commerce</p>
        </div>
        <div className="about__text">
          <p className="">
            Out tools are easy to set up and use with a user friendly dashboard
            that enabls you to set up, launch, automate and manage
            multi-affiliate compaigns in 5 minutes .
          </p>
        </div>
      </div>

      {/* article section */}
      <article>
        <div className="container display-4">
          <p className="about__article">
            Metricks was developed because just like you, we needed a product
            that could give us <strong>good value</strong>
          </p>
        </div>
      </article>

      {/* Why us section */}
      <article>
        <div className="whyus container text-white py-4">
          <div className="whyus__text p-4">
            <div className="whyus__title">
              <span>01</span>
              <div className="underline"></div>
              <p>Why us</p>
            </div>
            <p className="">
              We pride ourselves in our ability to innovate and create
              world-class tols that provide reliable and efficient touchpoints
              between advertisers and affiliates
            </p>
          </div>
          <div className="growing__with p-4 pl-5">
            <div className="whyus__title">
              <span>02</span>
              <div className="underline"></div>
              <p>Growing with you</p>
            </div>
            <p>
              Leveraging the best technology, we have developed an all-in-one
              affiliate marketing tracking software, a genius tool to help you
              track, automate and optimize your influcner campaigns, all from
              one dashboard
            </p>
            <p>
              Leveraging the best technology, we have developed an all-in-one
              affiliate marketing tracking software, a genius tool to help you
              track, automate and optimize your influcner campaigns, all from
              one dashboard
            </p>
          </div>
        </div>
      </article>

      {/* Got a question section */}
      <article>
        <div className="got__question">
          <div className="got__container container d-flex flex-column">
            <h2 className="text-white">Got a Question?</h2>
            <p className="text-white my-3">
              See how Metricks can help your business growwith best affiliate
              marketing tracking software.
            </p>
            <Link to="/contact" className="link">
              Contact Us <ArrowForward className="arrow" />
            </Link>
          </div>
        </div>
      </article>
    </motion.section>
  );
};

export default About;
