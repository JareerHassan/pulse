import React from "react";
import "./Footer.css";
import "../Header/header.css";
import Twtitter from "../../Assests/Twtitter.svg";
import Youtube from "../../Assests/Youtube.svg";
import Facebook from "../../Assests/facebook.svg";

function Contenthead(props) {
  return <p className="contentHead font-2">{props.head}</p>;
}

function Content(props) {
  return <p className="content font-2 ">{props.text}</p>;
}

function ContentBlank(props) {
  return (
    <p className="content font-2 " style={{ color: "black" }}>
      {props.text}
    </p>
  );
}

function Contenticon(props) {
  return (
    <p className="content font-2 ">
      <img
        className="contentIcon "
        style={{ width: "20px" }}
        src={props.image}
        alt="icons"
      />
    </p>
  );
}

function ContentLink(props) {
  return (
    <p>
      {" "}
      <a href="#" className="contentLink font-2 ">
        {props.text}
      </a>
    </p>
  );
}

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContent row">
        <h1 className="heading ">PULSE 2X</h1>

        <div className="col-2">
          <Contenthead head="About Us" />
          <Content text="How Pulse 2X works" />
          <Content text="Our Story" />
          <Content text="What we believe" />
          <Content text="Jobs [HIRING!]" />
          <Content text="Blog" />
        </div>

        <div className="col-2">
          <Contenthead head="Review Community" />
          <Content text="Join the Community" />
          <Content text="Leave a review" />
          <Content text="Search for a company" />
        </div>

        <div className="col-2">
          <Contenthead head="Businesses" />
          <Content text="Features" />
          <Content text="Pricing" />
          <Content text="Business Owner Login" />
          <Content text="Claim your Business Page" />
          <Content text="Business Support" />
        </div>

        <div className="col-2">
          <Contenthead head="Contact" />
          <Content text="Contact Sales" />
          <Content text="Help Center" />
          <Content text="Our Offices" />
        </div>

        <div className="col-2">
          <Contenthead head="Follow us on" />
          <Contenticon image={Facebook} />
          <Contenticon image={Twtitter} />
          <Contenticon image={Youtube} />
        </div>

        <div className="privacy">
          <ContentLink text="Privacy Policy" />

          <ContentLink text="Terms & Conditions" />
          <ContentLink text="©2023 Pulse 2X. All rights reserved." />
        </div>
      </div>
    </div>
  );
}
