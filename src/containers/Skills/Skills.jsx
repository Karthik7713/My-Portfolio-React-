import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../componenets/PageHeader/PageHeader";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { skillsData } from "./utils";
import { Line } from "rc-progress";
import './style.scss';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeader
        headertext="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills_con_wrap">
        {skillsData.map((item, i) => (
          <div key={i} className="skills_con_wrap_inner">
            <Animate
              play
              duration={1}
              delay={0}
              start={{
                transform: "translatex(-400px)",
              }}
              end={{
                transform:"translate(0px)"
              }}
            >
              <h3 className="skills_con_wrap_inner_text"> {item.label}</h3>
              <div className="skills_con_wrap_inner_pro-con">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity:1", "opacity:0"]}
                    iterationCount="1"
                  >
                    <div className="pro-wrap" key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLine="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
