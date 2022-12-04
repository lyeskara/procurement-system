import React from "react";
import home from "../componentCSS/home.css";
import { Link, Navigate } from "react-router-dom";
function Home() {
  return (
    <section className="home">
      <div className="header">
        <h2 id="sideHeader">Welcome to Procument </h2>
        <ul>
          {" "}
          <Link to="/inventory" id="sideLinks">
            Inventory
          </Link>
        </ul>
        <ul>
          {" "}
          <Link to="/product" id="sideLinks">
            Products Page
          </Link>
        </ul>
        <ul>
          {" "}
          <Link to="/about" id="sideLinks">
            About this Project
          </Link>
        </ul>
      </div>
      <div class="intro">
        The goal of this project is to develop a procurement system which
        automates material acquisition of a business using SQL, React.js and
        express. <br />
        <br />
        Please Login to access the Inventory Managment System.
      </div>
    </section>
  );
}

export default Home;
