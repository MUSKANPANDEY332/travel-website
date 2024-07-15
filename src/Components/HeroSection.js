import React from "react";
import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import bgImage from "../assets/images/bg-side.png";
import hero_assest1 from "../assets/images/hero-assest1.png";
import hero_assest2 from "../assets/images/hero-assest2.png";
import hero_assest3 from "../assets/images/hero-assest-3.png";
import hero_assest4 from "../assets/images/hero-assest-4.png";
import assest5 from "../assets/images/hero-assest-5.png";
import dark_arrow from "../assets/images/dark-arrow.png";

const HeroSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/destination");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <sector>
      <section className="hero-section">
        <div className="hero-content">
          <h1>It's time to travel around the World</h1>
          <h3>
            Sreach for your Destination <a href="DestinationSearch" smooth={true} offset={0} duration={500}><img src={dark_arrow} alt="" /></a> 
          </h3>
        </div>

        <div className="hero-image">
          <img src={bgImage} alt="Hero" />
        </div>
      </section>
      <section className="hero-assest">
        <div className="hero-assest1">
          <img src={hero_assest1} alt="1" />
        </div>
        <div className="hero-assest2">
          <img src={hero_assest2} alt="2" />
        </div>
        <div className="hero-assest3">
          <img src={hero_assest3} alt="3" />
        </div>
        <div className="hero-assest4">
          <img src={hero_assest4} alt="4" />
        </div>
        <div className="hero-assest5">
          <img src={assest5} alt="5" />
        </div>
      </section>
    </sector>
  );
};

export default HeroSection;
