import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../componenets/PageHeader/PageHeader";
import { Animate } from "react-simple-animate";
import "./style.scss";
import {  DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase,FaGithub  } from "react-icons/fa";
const persnolDetails = [
  {
    label: "Name",
    value: "Karthik Reddy",
  },
  {
    label: "Age",
    value: "21",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "mkarthikreddy7713@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 6360553327",
  },
];
const jobSummary =
  "Motivated and curious Computer Science undergraduate with a strong foundation in Data Structures and Algorithms, combined with hands-on experience in modern web development. Passionate about crafting intuitive and responsive user interfaces using HTML, CSS, JavaScript, and React.js. Enthusiastic about clean code, performance optimization, and creating seamless user experiences." +
  "Currently exploring the ever-evolving world of front-end engineering with an eye for design, usability, and technical precision. Eager to contribute creative solutions and grow through collaboration and learning. With a developer mindset and a student’s hunger to grow, I am focused on transforming ideas into interactive, functional, and user-friendly web applications.";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader headertext="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about_con">
        <div className="about_con_perwrap">
          <Animate
            play
            duration={1.5}
            delay={.5}
            start={{
              transform: "translatex(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>FrontEnd developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={.5}
            start={{
              transform: "translatex(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="per_info">Persnol Details </h3>
            <ul>
              {persnolDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about_con_serwrap">
                <Animate
            play
            duration={1.5}
            delay={.5}
            start={{
              transform: "translatex(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
                <div className="about_con_serwrap_inner">
          <div>
          <FaDev size={60} color="var(--yellow-theme-main-color)"/>
        </div>
        <div>
           <FaGithub size={60} color="var(--yellow-theme-main-color)"/>
        </div>
        <div>
           <DiAndroid size={60} color="var(--yellow-theme-main-color)"/>
        </div>
        <div>
           <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
        </div>

      </div></Animate>
        </div>

      </div>
    </section>
  );
};

export default About;
