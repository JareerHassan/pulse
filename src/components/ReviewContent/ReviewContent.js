import axios from "../../Api/Axios";
import * as axiosUrls from '../../Api/AxiosUrls'
import React, { useEffect, useState } from "react";
import "../HomeFeaturedSale/HomeFeaturedSale.js";
import "../Header/header.css";
import "./ReviewContent.css";
import Sale1 from "../../Assests/5565175.png";
import Clothes from "../../Assests/clothes.svg";
import House from "../../Assests/placeholder.svg";
import Heart from "../../Assests/heart.svg";
import Profile from "../../Assests/ProfileLogin.svg";
import Rating from "../../Assests/rating.svg";
import Star from "../../Assests/star.svg";
import LoadMore from "../../Assests/down-arrow.svg";

export function ReviewCard({ businessReviewData ,isToken}) {

// Handling the user review like API
const handleApiUserReviewLike = (user, review) => {
  if (isToken) {
    const token = localStorage.getItem("loginToken");
    console.log(review);
    axios.post(axiosUrls.userReviewLike, {
      user: user,
      review: review,
    }, {
      headers: {
        'Authorization': 'Bearer ' + token // Include token in the Authorization header
      } 
    })
    .then(result => {
      console.log(result.data);
    })
    .catch(error => {
      alert('service error');
      console.log(error);
      console.log('Authorization Header:', error.response.headers.authorization);
    });
  }
};

  if (businessReviewData == undefined) {
    return (
      <div>
        No Reviews Available!!!!!!!!
      </div>
    )
  }
  return (
    <>
      {businessReviewData.map(index => (
        <>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div key={index.id} className="col-4 w-100">
              <div className="card w-100">
                <img
                  src={index.review_images}
                  className="card-img-top"
                  alt="Product Image"
                  style={{ objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5 className="review-title font-2">Review Title</h5>

                  <div className="cardTextOuterBorderLess">
                    <div className="OfferOuter ">
                      <img src={Profile} alt="..." className="CategoryIcon" />
                      <p className="font-2">{index.user}</p>
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
                      <p className=" font-2"> {index.rating}/5</p>
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
                    <a onClick={() => handleApiUserReviewLike(index.user,index.review_id)}>
                        <img src={Heart} alt="..." className="icon" />
                      </a>

                      <p className="OfferDate font-2"> 20 Likes</p>
                    </div>
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

export default function ReviewContent() {
  const [isToken, setIsToken] = useState(false); // Initialize to false
  const [businessReviewData, setbusinessReviewData] = useState([]);

  useEffect(() => {
    const checkToken = () => {
      if (localStorage.getItem("loginToken")) {
        setIsToken(true);
      }
    };
    checkToken(); // Call the function to set the state when the component mounts
  }, []);

  useEffect(() => {
    if (isToken) {
      fetchbusinessReviewData(); // Fetch user review data when isToken is true
    }
  }, [isToken]);


  const fetchbusinessReviewData = () => {
    const token = localStorage.getItem("loginToken");
    axios.get(axiosUrls.businessReview, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then((res) => {
        if (Array.isArray(res.data)) {
          console.log(res.data)
          setbusinessReviewData(res.data);
        } else {
          console.error('Invalid response format. Expected an array.');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="row ReviewContent">
      <ReviewCard banner={Sale1} classForiT={" reviewPage"} businessReviewData={businessReviewData} isToken = {isToken}/>
      {/* <div className="col-lg-4 col-md-6 col-sm-6">
        <ReviewCard banner={Sale1} classForiT={" reviewPage"} />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <ReviewCard banner={Sale1} classForiT={" reviewPage"} />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <ReviewCard banner={Sale1} classForiT={" reviewPage"} />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <ReviewCard banner={Sale1} classForiT={" reviewPage"} />
      </div> */}
      <div
        className="heroHeading col-lg-12"
        style={{ marginTop: "25px", zIndex: "0" }}
      >
        <button
          type="button"
          class="btn btn-outline-review"
          style={{ width: "50%" }}
        >
          Load more Posts
          <img src={LoadMore} alt="more..." style={{ margin: "5px" }} />
        </button>
      </div>
    </div>

  );
}
