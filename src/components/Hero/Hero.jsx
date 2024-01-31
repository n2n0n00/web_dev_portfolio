import React from "react";
import "./Hero.css";
import { StackImages } from "../../constants";
import { hero } from "../../assets";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <p>Hello, I'm Athena</p>
        <h2>Full Stack and Occasional Web3 Developer</h2>
        <p>
          With a keyboard as my trusty sword and lines of code as my magic
          spells, this web wiz weaves digital wonders into existence. Whether
          navigating the realms of traditional stacks or boldly venturing into
          the mystical realms of Web3.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <img src={hero} alt="" />
        </div>

        <div className="">
          {StackImages.map((item) => (
            <div className="tech-icon" key={item.alt}>
              <img alt={item.alt} src={item.src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
