import axios from "../../Api/Axios";
import * as axiosUrls from '../../Api/AxiosUrls'
import React, { useEffect, useState } from "react";
import "../HomeFeaturedSale/HomeFeaturedSale.css";
import "../Header/header.css";
import "./HomeUpcomingProducts.css";
import Calendar from "../../Assests/calendar.svg";
import Clothes from "../../Assests/clothes.svg";
import Sale1 from "../../Assests/5565175.png";
import Sale2 from "../../Assests/4318805.png";
import { Link } from "react-router-dom";
function ProductCard({ userUpcomingData }) {
  return (
    <>
      {userUpcomingData.map(index => (
        <div key={index.id} className="col-4 myCol">
          <div className="card">
            <img
              src={index.product_image}
              className="card-img-top"
              alt="Product Image"
              
            />

            <div className="card-body">
              <h5 className="card-title font-2">{index.product_name}</h5>

              <div className="cardTextOuter  buisnessDetails">
                <p className="cardInnerItem font-2 ">{index.business}</p>
                <div className="cardInnerItemCategory font-2">
                  <img src={Clothes} alt="..." className="CategoryIcon" />
                  <p className="categoryText font-2"> Fashion</p>
                </div>
              </div>
              <p className="cardText font-2">
                {index.product_detail}
              </p>

              <div className="cardTextOuter cardOuter">
                <div className="OfferOuter ">
                  <img src={Calendar} alt="..." className="CategoryIcon" />
                  <p className="OfferDate font-2"> 3rd October</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default function HomeUpcomingProducts() {
  const [isToken, setIsToken] = useState(false); // Initialize to false
  const [userUpcomingData, setuserUpcomingData] = useState([]);
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
      axios.get(axiosUrls.userUpcomingProducts, {
        // headers: {
        //   'Authorization': 'Bearer ' + token // Include token in the Authorization header
        // }
      })
        .then((res) => {
          if (Array.isArray(res.data)) {
            setuserUpcomingData(res.data);
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
        <h1 className="opacity-8">Upcoming Products</h1>
      </div>

      <div className="wrapper">
        <ProductCard userUpcomingData={userUpcomingData} />

      </div>

      <div className="heroHeading col-lg-6 col-sm-6 col-md-6">
        <Link to="/upcoming" class="btn btn-outline-buisness">
          View All
        </Link>
      </div>
    </div>
  );
}
