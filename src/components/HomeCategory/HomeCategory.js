import React from "react";
import { Link } from "react-router-dom";
import Fashion from "../../Assests/fashion.svg";
import YT from "../../Assests/Layer 2.svg";
import Gym from "../../Assests/weight.svg";
import Institue from "../../Assests/university.svg";
import Resturant from "../../Assests/Group 7811.svg";
import Bank from "../../Assests/bank.svg";
import Car from "../../Assests/rental.svg";
import Pet from "../../Assests/pet-shop.svg";
import Furniture from "../../Assests/furniture.svg";
import Jewelry from "../../Assests/Page-1.svg";
import Electronics from "../../Assests/device.svg";
import Realestate from "../../Assests/house.svg";

import "./HomeCategory.css";
import "../Header/header.css";

function DasCards(props) {
  return (
    <div className="padding col-lg-3 col-md-4 col-4 ">
      <div className="cardDesign ">
        <img src={props.captionIcon} alt="..." className="cardIcon" />
        <p className="crad-caption font-2 align-left margin-0">
          {props.caption}
        </p>
      </div>
    </div>
  );
}

export default function HomeCategory() {
  return (
    <div className="homeCatorgies row container">
      <div className=" context row col-9 ">
        <h5 className="font-1 col-lg-10 col-md-9 col-sm-6 align-left">
          BROWSE POPULAR IN YOUR CITY
        </h5>
        <button
          type="button"
          class=" col-lg-2 col-md-3  btn btn-outline-danger font-2  "
        >
          <Link to="/allCategories" style={{ color: "inherit", style: "none" }}>
            View all
          </Link>
        </button>
      </div>

      <div className=" cardHead m-auto col-9 row">
        <DasCards caption="Resturants" captionIcon={Resturant} />
        <DasCards caption="Clothing Store" captionIcon={Fashion} />
        <DasCards caption="Entertainment" captionIcon={YT} />
        <DasCards caption="Gyms" captionIcon={Gym} />
        <DasCards caption="Institutes" captionIcon={Institue} />
        <DasCards caption="Bank" captionIcon={Bank} />
        <DasCards caption="Car Dealer" captionIcon={Car} />
        <DasCards caption="Pet Store" captionIcon={Pet} />
        <DasCards caption="Furniture Store" captionIcon={Furniture} />
        <DasCards caption="Jewelry Store" captionIcon={Jewelry} />
        <DasCards caption="Electronics" captionIcon={Electronics} />
        <DasCards caption="Real Estate Agents" captionIcon={Realestate} />
      </div>
    </div>
  );
}
