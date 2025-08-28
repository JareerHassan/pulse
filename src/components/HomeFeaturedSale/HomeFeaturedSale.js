import axios from "../../Api/Axios";
import * as axiosUrls from '../../Api/AxiosUrls'
import React, { useEffect, useState } from "react";
import "./HomeFeaturedSale.css";
import "../Header/header.css";
import Sale1 from "../../Assests/5565175.png";
import Sale2 from "../../Assests/4318805.png";
import Calendar from "../../Assests/calendar.svg";
import Clothes from "../../Assests/clothes.svg";
import Group from "../../Assests/Group 7894.png";
import Rightarrow from "../../Assests/right-arrow.png";
import RightArrowHover from "../../Assests/right-arrow-red.svg";
import { Link } from "react-router-dom";
export function SaleCard({ userSalesData }) {
  return (
    <>
      {userSalesData.map(index => (
        <div key={index.id} className="col-4 myCol">
          <div className="card">
            <img
              src={index.promo_image}
              className="card-img-top"
              alt="Product Image"
              
            />

            <div className="card-body">
              <h5 className="card-title font-2">{index.sale_title}</h5>

              <div className="cardTextOuter  buisnessDetails">
                <p className="cardInnerItem font-2 ">{index.business}</p>
                <div className="cardInnerItemCategory font-2">
                  <img src={Clothes} alt="..." className="CategoryIcon" />
                  <p className="categoryText font-2"> Fashion</p>
                </div>
              </div>
              <p className="cardText font-2">
                {index.sale_description}
              </p>

              <div className="cardTextOuter cardOuter">
                <div className="OfferOuter ">
                  <img src={Calendar} alt="..." className="CategoryIcon" />
                  <p className="OfferDate font-2"> {index.start_date} - {index.end_date} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default function HomeFeaturedSale() {

  const [isToken, setIsToken] = useState(false); // Initialize to false
  const [userSalesData, setuserSalesData] = useState([]);
  useEffect(() => {
    const checkToken = () => {
      if (localStorage.getItem("loginToken")) {
        setIsToken(true);
      }
    };
    checkToken(); // Call the function to set the state when the component mounts
  }, []);
  useEffect(() => {
    
      const token = localStorage.getItem("loginToken");
      axios.get(axiosUrls.userSales, {
       
      })
        .then((res) => {
          if (Array.isArray(res.data)) {
            setuserSalesData(res.data);

          } else {
            console.error('Invalid response format. Expected an array.');
          }
        })
        .catch(err => {
          console.log(err);
        })
    
  }, [isToken]);

  return (
    <div className="">
      <div className="heroHeading col-lg-6 col-sm-6 col-md-6">
        <h1 className="opacity-8">Featured Sales</h1>
      </div>

      <div className="wrapper">
        <SaleCard userSalesData={userSalesData} />
      </div>

      <div className="heroHeading col-lg-6 col-sm-6 col-md-6">
        <Link to='/sales' class="btn btn-outline-buisness">
          View All
        </Link>
      </div>

      <div className="buisnessDivider row">
        <div
          className="left col-lg-6 col-md-6 col-sm-12"
          style={{ textAlign: "center" }}
        >
          <h1 className="">Reach Millions of People</h1>
          <p className="font-2">
            Add your business infront of millions and earn 3x profits from our
            tool
          </p>
          <button type="button" class="btn btn-outline-review">
            Add Your Business
            <img src={Rightarrow} alt="..." className="icon" />
          </button>
        </div>
        <div className="rightSide col-lg-6 col-md-6 col-sm-12"></div>
      </div>
    </div>
  );
}
