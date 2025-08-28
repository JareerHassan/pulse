import axios from "../../Api/Axios";
import * as axiosUrls from '../../Api/AxiosUrls'
import React, { useEffect, useState } from "react";
import "../HomeFeaturedSale/HomeFeaturedSale.js";
import "../Header/header.css";
import "./HomeRecentReviews.css";
import Sale1 from "../../Assests/5565175.png";
import Clothes from "../../Assests/clothes.svg";
import House from "../../Assests/placeholder.svg";
import Heart from "../../Assests/heart.svg";
import Profile from "../../Assests/ProfileLogin.svg";
import Rating from "../../Assests/rating.svg";
import Star from "../../Assests/star.svg";
import { Link } from "react-router-dom";
export function ReviewCard({ userReviewData }) {
 
  return (
    <>
    {userReviewData.map(index => (
      <>
    <div key={index.id} className="col-4">
      <div className="card">
        
        <img
          src={index.review_images[0].image}
          className="card-img-top"
          alt="Product Image"
          
        />

        <div className="card-body">
          <h5 className="review-title font-2">Review Title</h5>

          <div className="cardTextOuterBorderLess">
            <div className="OfferOuter ">
              <img src={Profile} alt="..." className="CategoryIcon" />
              <p className="font-2">User {index.user}</p>
            </div>
          </div>

          <div className="cardTextOuter">
            <div className="OfferOuter ">
              <div className="ratting">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Rating} alt="" />
                <img src={Rating} alt="" />
              </div>
              <p className=" font-2"> 2.0/5</p>
              <p className="categoryText font-2"> 10 min ago</p>
            </div>
          </div>
          <div className="  bussiness card-title">
            <p className="cardInnerItem font-2 ">{index.branch}</p>
            <div className="cardInnerItemCategory font-2">
              <img src={Clothes} alt="..." className="CategoryIcon" />
              <p className="categoryText font-2"> Fashion</p>
            </div>
          </div>
          <p className="cardText font-2">
            {index.review_description}
          </p>

          <div className="cardTextOuter  buisnessDetails">
            <div className="cardInnerItemCategory">
              <img src={House} alt="..." className="CategoryIcon" />
              <p className="categoryText font-2 ">Islamabad</p>
            </div>

            <div className="cardInnerItemCategory font-2">
              <img src={Heart} alt="..." className="icon" />
              <p className="OfferDate font-2"> 20 Likes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
        ))};
    </>
  );
}

export default function HomeRecentReviews() {
  const [isToken, setIsToken] = useState(false); // Initialize to false
  const [userReviewData, setUserReviewData] = useState([]);
  
  useEffect(() => {
    const checkToken = () => {
      if (localStorage.getItem("loginToken")) {
        setIsToken(true);
      }
    };
    checkToken(); // Call the function to set the state when the component mounts
  }, []);

   useEffect(() => {
    // if (isToken) {
      fetchUserReviewData(); // Fetch user review data when isToken is true
    // }
  }, [isToken]);


  const fetchUserReviewData = () => {
    const token = localStorage.getItem("loginToken");
    axios.get(axiosUrls.userReview, {
      // headers: {
      //   'Authorization': 'Bearer ' + token
      // }
    })
    .then((res) => {
      if (Array.isArray(res.data)) {
        setUserReviewData(res.data);
        console.log(res.data)
      } else {
        console.error('Invalid response format. Expected an array.');
      }
    })
    .catch(err => {
      console.log(err);
    });
  };
  return (
    <div className="">
      <div className="heroHeading col-lg-6 col-sm-6 col-md-6">
        <h1 className="opacity-8">Recent Reviews</h1>
      </div>

      <div className="wrapper">
        <ReviewCard banner={Sale1} classForiT={" myCol"} userReviewData={userReviewData}/>
      </div>

      <div className="heroHeading col-lg-6 col-sm-6 col-md-6">
        <Link to='/reviews' class="btn btn-outline-buisness">
          View All
        </Link>
      </div>
    </div>
  );
}
