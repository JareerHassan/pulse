import axios from "../../Api/Axios";
import * as axiosUrls from '../../Api/AxiosUrls'
import React, { useEffect, useState } from "react";
import Chicken from "../../Assests/chicken.jpg";
import Rate from "../../Assests/rating (1).svg";
import ProfileIcon from "../../Assests/ProfileLogin.svg";
import "./writeAReview.css";

function RecentRewiesCards({ userReviewData }) {
  return (
    <>
      {userReviewData.map(index => (
        <>
          <div key={index.id}>
            <div className="RecentRewiesCards w-100 px-2 pt-3 border">
              <div className='w-100 d-flex'>
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <div className='px-2'>
                  <h5 class="font-1 bold px-1 py-1" style={{ opacity: "0.9", fontWeight: "600" }}>
                    {index.review_id}
                  </h5>
                  <a
                    href=""
                    className="nav-links  multi font-2 semibold w-100 p-0"
                    id=""
                    role="a"
                    aria-expanded="false"
                  >
                    <img src={ProfileIcon} alt="" className="nav-icon" />
                  {index.user}
                  </a>
                  <br></br>
                  <small className="ratingsRecentReviews py-2 px-0 m-0">
                    <img src={Rate} alt="tating.." />
                    <img src={Rate} alt="tating.." />
                    <img src={Rate} alt="tating.." />
                    <img src={Rate} alt="tating.." />
                    <img src={Rate} alt="tating.." />
                    <span className='p-0 m-0 ms-3 '>{index.rating}/5</span>
                  </small>
                  <p className='font-3 dateTime px-1 m-0'>09/10/2023 02:50 PM</p>
                  <p className='p-0 m-0 bbq'>BBQ Tonight</p>
                </div>
              </div>
              <p className='font-3 pb-1 pt-3'>
                {index.review_description}
                <a className='text-danger'>Read More</a>
              </p>


            </div>
            <div className='d-flex border justify-content-between ps-4'>
              <p className='p-0 m-0'>{index.branch}</p>
              <p className='p-0 m-0 text-danger border pe-3'>&#9825; {index.like_count} Likes</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};


export default function WriteAReview() {
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
    <div>
      <div className="container py-5">

        <div className="row">
          <div className="col-12 col-md-1 col-sm-1"></div>
          <div className="col-12 col-md-6 col-sm-6">

            <div className='d-flex justify-content-between'>
              <h6>Business Name</h6>
              <p className='p-0 m-0 text-danger font-3'>Read our review guidelines</p>
            </div>
            <div className='border position-relative' style={{ height: "417px" }} >
              <div className='p-3'>
                <div className='d-flex'>
                  <small className="px-0 m-0">
                    <img src={Rate} alt="tating.." />
                    <img src={Rate} alt="tating.." />
                    <img src={Rate} alt="tating.." />
                    <img src={Rate} alt="tating.." />
                    <img src={Rate} alt="tating.." />
                  </small>
                  <span className='ms-3 font-2 opacity-25'>Select your rating</span>
                </div>
                <p className='ms-3 font-3 opacity-25'>
                  A few things to consider in your review
                </p>
                <div className='d-flex gap-2 px-2'>
                  <span className='border p-1 px-3 bg-custom opacity-25'>Food</span>
                  <span className='border p-1 px-3 bg-custom opacity-25'>Service</span>
                  <span className='border p-1 px-3 bg-custom opacity-25'>Ambiance</span>
                </div>
              </div>
              <div className="position-absolute bottom-0 w-100 p-3 m-0">
                <div className="d-flex flex-column justify-content-center align-items-center w-100 py-5 bg-custom">
                  <label htmlFor="fileInput" className="p-1 px-2 text-danger" style={{ border: "1px dashed gray", cursor: "pointer" }}>
                    &#43;
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                  </label>
                  <h6 className="font-2 m-0 py-1">Add Photos</h6>
                  <span className="font-5">or drag and drop</span>
                </div>
              </div>
              {/* <div className='position-absolute bottom-0 w-100 p-3 m-0'>
            <div className='d-flex flex-column justify-content-center align-items-center w-100 py-5 bg-custom'>
            <span className='p-1 px-2 text-danger' style={{border:"1px dashed gray"}}>&#43;</span>
            <h6 className='font-2 m-0 py-1'>Add Photos</h6>
            <span className='font-5'>or drag and drop</span>
            </div>
        </div> */}
            </div>
          </div>
          <div className="col-12 col-md-1 col-sm-1"></div>
          <div className="col-12 col-md-4 col-sm-4 overflow-scroll overflow-x-hidden" style={{ height: "487px" }}>
            <h6>Recent Reviews</h6>
            <RecentRewiesCards userReviewData={userReviewData} />

          </div>
        </div>
      </div>
    </div>
  );
}
