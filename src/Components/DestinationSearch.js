import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DestinationSearch.css";
import next from "../assets/images/next.png";
import cycle from "../assets/images/cycle.png";
import b1 from '../assets/images/b1.png';
import b2 from '../assets/images/b2.png';
import d1Image from'../assets/images/d1.png';
import d2 from '../assets/images/d2.png';

const DestinationSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      const encodedDestination = encodeURIComponent(query);
      navigate(`/destination?name=${encodedDestination}`);
    }
  };

  return (
    <section className="search-section">
      <div className="search-container1">
        <div className="d1">
          <img src={d1Image} alt="decorative blockbox 1"/>
        </div>
        <h4>Explore the World</h4>
        <h2>It's time to travel around the World</h2>

        <div className="search-container">
          <input
            type="text"
            placeholder="Your destination"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
          <a href="DestinationPage" smooth={true} offset={0} duration={500}><img src={next} alt="send" /></a>
          </button>
        </div>
      </div>
      <div className="b1">
        <img src={b1} alt="decorative block 1"/>
      </div>
      <div className="b2">
        <img src={b2} alt="decorative block 1"/>
      </div>
      <div className="cycle-image">
        <img src={cycle} alt="animation" />
      </div>
      <div className="d2">
        <img src={d2} alt="destination yellowbox"/>
      </div>
    </section>
  );
};

export default DestinationSearch;
