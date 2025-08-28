import React, { Component } from "react";
import "./SalesLeft.css";
import Rate from "../../Assests/rating (1).svg";

function CheckboxSugeested(props) {
  return (
    <li>
      <label
        className="checkbox-item font-2"
        style={{ fontWeight: "600", opacity: "0.8" }}
      >
        {props.label}
        <input type="checkbox" defaultChecked="checked" />
        <span className="checkmark" />
      </label>
      <span
        className="categorey-no"
        style={{
          float: "none",
          marginLeft: "10px",
          fontWeight: "600",
          opacity: "0.8",
        }}
      >
        {props.category}
      </span>
    </li>
  );
}

function Checkbox(props) {
  return (
    <li>
      <label
        className="checkbox-item font-2"
        style={{ fontWeight: "400", opacity: "0.9" }}
      >
        {props.label}
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </li>
  );
}

function CategoryHead(props) {
  return (
    <h4 className="font-1 bold" style={{ opacity: "0.7" }}>
      {props.head}
    </h4>
  );
}

export default function SalesLeft() {
  let anchor = "#";
  let imagealt = "image";
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div
      className="col-lg-2  mb-100 leftSide"
      style={{ margin: "20px 0px", width: "14%" }}
    >
      <aside className="sidebar ltn__shop-sidebar" >
        <CategoryHead head="Filter by" />
        <label className="">
          <small className="rattings">
          <i class="fa fa-star fa-2x" aria-hidden="true"></i>
          <i class="fa fa-star fa-2x" aria-hidden="true"></i>
          <i class="fa fa-star fa-2x" aria-hidden="true"></i>
          <i class="fa fa-star fa-2x" aria-hidden="true"></i>
          <i class="fa fa-star fa-2x" aria-hidden="true"></i>
            {/* <img src={Rate} alt="tating.." />
            <img src={Rate} alt="tating.." />
            <img src={Rate} alt="tating.." />
            <img src={Rate} alt="tating.." /> */}
          </small>
        </label>
        <hr />
        {/* Advance Information widget */}
        <div
          className="widget ltn__menu-widget"
          style={{ border: "none", padding: "0px" }}
        >
          <CategoryHead head="Suggested" />
          <ul>
            <CheckboxSugeested label="Open Now" category="3:34 PM" />
          </ul>
          <hr />
          <CategoryHead head="Features" />
          <ul>
            <Checkbox label="Open to All" />
            <Checkbox label="Offers Military Discount" />
            <Checkbox label="Accepts Cryptocurrency" />
            <Checkbox label="Fast-responding" />
          </ul>
          <hr />

          <CategoryHead head="Neighborhoods" />
          <ul>
            <Checkbox label="Alamo Square" />
            <Checkbox label="Anza Vista" />
            <Checkbox label="Ashbury Heights" />
            <Checkbox label="Balboa Terrace" />
          </ul>
          <hr />

          <CategoryHead head="Distance" />
          <ul>
            <Checkbox label="Bird's-eye View" />
            <Checkbox label="Driving (5 mi.)" />
            <Checkbox label="Biking (2 mi.)" />
            <Checkbox label="Walking (1 mi.)" />
            <Checkbox label="Within 4 blocks" />
          </ul>
        </div>
        {/* Price Filter Widget */}
        <div className="widget ltn__price-filter-widget d-none">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Filter by price
          </h4>
          <div className="price_filter">
            <div className="price_slider_amount">
              <input type="submit" defaultValue="Your range:" />
              <input
                type="text"
                className="amount"
                name="price"
                placeholder="Add Your Price"
              />
            </div>
            <div className="slider-range" />
          </div>
        </div>
      </aside>
    </div>
  );
}
