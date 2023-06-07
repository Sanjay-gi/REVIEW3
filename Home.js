import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{  }}>
      <div className="headerContainer">
        <h1> SJ-Kart</h1>
        <p>All you need ? Is at ONE PLACE</p>
        <Link to="/menu">
          <button> BUY NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
