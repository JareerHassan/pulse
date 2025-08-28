import React from "react";
import "../HomeCategory/HomeCategory.css";
import "../Header/header.css";
import "./ReviewsSearch.css";

export default function ReviewsSearch() {
  return (
    <div className="ReviewsSearch row">
      <div class="form-group innerWidth width30 lookingForwhat">
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="What are you looking for?"
        />
      </div>
      <div class="form-group innerWidth width20">
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="All locaitons"
        />
      </div>
      <div class="form-group innerWidth width20 ">
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="All categories"
        />
      </div>

      <div class="filterRecent innerWidth width30">
        <p className="font-2">Filter By</p>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Recent"
        />
      </div>

      <div className="advanceWidth">
        <p className="font-2">Advance Search</p>
        <div className="box">
          <div class="form-check form-check-inline ">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label class="form-check-label" for="inlineCheckbox1">
              Resturants
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label class="form-check-label" for="inlineCheckbox2">
              Gyms
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="option3"
            />
            <label class="form-check-label" for="inlineCheckbox3">
              Fashion
            </label>
          </div>
        </div>
      </div>

      <div
        className="heroHeading col-lg-12 FilterSearch"
        style={{ marginTop: "25px", zIndex: "0" }}
      >
        <button
          type="button"
          class="btn btn-outline-review buttonFilterSearch"
          style={{ height: "49px", width: "117px" }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
