import axios from "../../Api/Axios";
import * as axiosUrls from '../../Api/AxiosUrls'
import React, { useEffect, useState } from "react";
import Profile from "../../Assests/ProfileLogin.svg";
import Heart from "../../Assests/heart.svg";
import { Link } from "react-router-dom";
import Chicken from "../../Assests/chicken.jpg";
import Star from "../../Assests/star.svg";
import Rate from "../../Assests/rating.svg";
import ProfileIcon from "../../Assests/ProfileLogin.svg";
import ReviewImg from "../../Assests/4318805.png";
import Share from "../../Assests/share.svg";
import review2 from "../../Assests/review-2.svg";
import images from "../../Assests/images.svg";
import g543 from "../../Assests/g543.svg";
import Ikon from "../../Assests/Ikon.svg";
import Resturant from "../../Assests/restaurant.svg";
import LoadMore from "../../Assests/down-arrow.svg";
import "./UserProfile.css";


function UserReviewCard( { userReviewData } ) {

  return (
    <>
    {userReviewData.map(index => (
      <>
      <div key={index.id} className='w-100 d-flex'>
        <img src={Chicken} className="border" alt="..." style={{ width: "154px", height: "138px" }} />
        <div className='px-2'>
          <h5 class="font-1 bold m-0" style={{ opacity: "0.9", fontWeight: "600" }}>
           
            {index.review_id}
          </h5>
          <h6 className='py-1 m-0 text-danger'>BBQ Tonight <img className="m-1" src={Ikon} alt="Ikon.." /> </h6>
          <small className="px-0 m-0 py-1">
            <img src={Star} alt="rating.." />
            <img src={Star} alt="rating.." />
            <img src={Star} alt="rating.." />
            <img src={Star} alt="rating.." />
            <img src={Star} alt="rating.." />
            <span className='p-0 m-0 ms-3 '> { index.rating}/5</span>
          </small>
          <p className='font-3 dateTime px-1 m-0 pt-2'>09/10/2023 02:50 PM</p>
          <p className="text-danger font-2 py-1">
            <img src={Resturant} alt="..." className="ProfileSectionImages mx-1" />
            { index.branch} </p>
        </div>
      </div>
      <p className='font-3 pb-1 pt-3'>
      
      { index.review_description}
      </p>
      <div className="d-flex flex-wrap gap-4 myReviewImgs pb-4">
       
      {index.review_images.map(image => (
        <div>
        <img src={image.image} alt=".." />
        </div>
      ))}
      </div>
      <div className="d-flex justify-content-between border px-3">
        <p className='p-0 m-0 text-danger pe-3'>&#9825; {index.like_count} Likes</p>
        <img src={Share} alt=".." />


      </div>
      </>
        ))}
    </>
  )
}
export default function MyReviews() {
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

    if (isToken) { // Only make the request if there's a token
      const token = localStorage.getItem("loginToken");

      axios.get(axiosUrls.userReview, {
        headers: {
          'Authorization': 'Bearer ' + token // Include token in the Authorization header
        }
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
        })
    }
  }, [isToken]);

  return (
    <div className="row MyReviews w-100 p-md-5">
      <div
        className="col-md-4 ProfileSide"

      >
        <div className="profile">
          <div className="w-100 text-end">
            <img src={Heart} alt="..." />
          </div>

          <img src={Profile} alt="..." className="ProfileImage" />
          <h6 className="font-2 mt-2">Mani</h6>
          <p className="font-2">Islamabad, Pakistan</p>
          <div className="d-flex justify-content-around w-100 font-3 text-danger py-3">
            <p className="p-0 m-0">
              <img src={review2} alt="..." className="ProfileSectionImages mx-1" />

              180 Reviews</p>
            <p className="p-0 m-0">
              <img src={g543} alt="..." className="ProfileSectionImages mx-1" />

              510 Ratings</p>
            <p className="p-0 m-0">
              <img src={images} alt="..." className="ProfileSectionImages mx-1" />

              320 Images</p>

          </div>
          <button className="btn btn-outline-review font-2 semibold">
            <Link

              style={{ color: "inherit", style: "none" }}
            >
              Joined: 10-11-23
            </Link>
          </button>
          <p className="font-3 py-2" style={{ color: "#484848" }}>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
        <div className="border border-bottom-0 border-start-0 border-end-0 mt-3 p-2">
          <h6>Rating Distribution</h6>
          <div className="px-0 m-0 py-1 d-flex gap-2">
            <img src={Star} alt="rating.." />
            <img src={Star} alt="rating.." />
            <img src={Star} alt="rating.." />
            <img src={Star} alt="rating.." />
            <img src={Star} alt="rating.." />
            <span className='p-0 m-0 ms-3 font-3'>32(5 Stars)</span>
          </div>
          <div className="px-0 m-0 py-1 d-flex gap-2">
            <img src={Star} alt="rating.." />
            <img src={Star} alt="rating.." />
            <img src={Star} alt="rating.." />
            <img src={Star} alt="rating.." />
            <img src={Rate} alt="rating.." />
            <span className='p-0 m-0 ms-3 font-3'>45(4 Stars)</span>
          </div>
          <div className="px-0 m-0 py-1 d-flex gap-2">
            <img src={Star} alt="rating.." />
            <img src={Star} alt="rating.." />
            <img src={Star} alt="rating.." />
            <img src={Rate} alt="rating.." />
            <img src={Rate} alt="rating.." />
            <span className='p-0 m-0 ms-3 font-3'>10(3 Stars)</span>
          </div>
          <div className="px-0 m-0 py-1 d-flex gap-2">
            <img src={Star} alt="rating.." />
            <img src={Star} alt="rating.." />
            <img src={Rate} alt="rating.." />
            <img src={Rate} alt="rating.." />
            <img src={Rate} alt="rating.." />
            <span className='p-0 m-0 ms-3 font-3'>12(2 Stars)</span>
          </div>
          <div className="px-0 m-0 py-1 d-flex gap-2">
            <img src={Star} alt="rating.." />
            <img src={Rate} alt="rating.." />
            <img src={Rate} alt="rating.." />
            <img src={Rate} alt="rating.." />
            <img src={Rate} alt="rating.." />
            <span className='p-0 m-0 ms-3 font-3'>2(1 Stars)</span>
          </div>


        </div>
      </div>
      <div
        className="col-md-8 ReviewsSide"
      >
        <UserReviewCard userReviewData={userReviewData}/>

        <button
          type="button"
          class="btn btn-outline-review2 mt-3"
          style={{ width: "50%" }}
        >
          Load more Review
          <img src={LoadMore} alt="more..." style={{ margin: "5px" }} />
        </button>
      </div>

    </div>
  );
}
