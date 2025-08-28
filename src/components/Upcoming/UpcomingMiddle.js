import axios from "../../Api/Axios";
import * as axiosUrls from '../../Api/AxiosUrls'
import React, { useEffect, useState } from "react";
import "../ReviewsSearch/ReviewsSearch.css";
import "../HomeFeaturedSale/HomeFeaturedSale.css";
import "../SalesMiddle/SalesMiddle.css";
import Sale1 from "../../Assests/5565175.png";
import LoadMore from "../../Assests/down-arrow.svg";
import Calendar from "../../Assests/calendar.svg";
import Clothes from "../../Assests/clothes.svg";

export function SaleCard({ userUpcomingData }) {

  const handleUpcomingFvrtApi = () => {
    const loveFvrtElement = document.getElementById('loveFvrt');
    const token = localStorage.getItem("loginToken");
    const spanElement = document.getElementById('product_idd');
    const spanText = spanElement.textContent;
    axios.post(
      axiosUrls.userLogin,
      {
        upcoming_product: spanText,
        user: "ah@gmail.com"
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
      .then(result => {
        loveFvrtElement.classList.remove('far');
        loveFvrtElement.classList.add('fas');
      })
      .catch(error => {
        // Handle errors
        console.log(error);
      });
  };

  return (
    <>
      {userUpcomingData.map(index => (
        <div
          key={index.id}
          className="col-4 saleCards "
          style={{ padding: "0px", width: "32%", margin: "4px" }}
        >

          <span id="product_idd" className="d-none">{index.product_id}</span>
          <div className="card">
            <img
              src={index.product_image}
              className="card-img-top"
              alt="Product Image"
              style={{ objectFit: "cover" }}
            />

            <div className="card-body">
              <div className="d-flex justify-content-between p-0">
                <h5 className="card-title font-3 m-0"> {index.product_name}</h5>
                <button type="button" className="bg-transparent" onClick={handleUpcomingFvrtApi}>
                  <i class="far fa-heart" id="loveFvrt" style={{ color: "#E61616" }}></i>
                </button>
              </div>
              <div className="cardTextOuter  buisnessDetails">
                <p className="cardInnerItem font-3 "> {index.business} </p>
                <div className="cardInnerItemCategory font-3">
                  <img src={Clothes} alt="..." className="CategoryIcon" />
                  <p className="categoryText font-3"> Fashion</p>
                </div>
              </div>
              <p className="cardText font-3">
                {index.product_detail}
              </p>

              <div className="cardTextOuter cardOuter">
                <div className="OfferOuter ">
                  <img src={Calendar} alt="..." className="CategoryIcon" />
                  <p className="OfferDate font-3">{index.start_date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default function UpcomingMiddle() {
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
    if (isToken) { // Only make the request if there's a token
      const tokenn = localStorage.getItem("loginToken");
      axios.get(axiosUrls.userUpcomingProducts, {
        headers: {
          'Authorization': 'Bearer ' + tokenn // Include token in the Authorization header
        }
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
    }
  }, [isToken]);

  return (
    <div
      className="col-lg-6  mb-100 saleMiddle"
      style={{ margin: "20px 0px", width: "53%" }}
    >
      <div className="row filterOuter">
        <h4
          class="font-1 bold"
          style={{ opacity: "0.7", paddingTop: "10px", paddingLeft: "20px" }}
        >
          Upcoming Products
        </h4>
        <span class="filter  row">
          <p className="font-2" style={{ width: "40%", paddingTop: "10px" }}>
            Filter By
          </p>
          <input
            style={{ width: "60%" }}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Recent"
          />
        </span>

        <div class="form-group inner Alllocations">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="All locaitons"
          />
        </div>

        <div class="form-group inner lookingFor">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="What are you looking for?"
          />
        </div>
        <div class="form-group inner Allcategories">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="All categories"
          />
        </div>
        <div className="advance" style={{ width: "70%" }}>
          <p className="font-2">Advance Search</p>
          <div className="box">
            <div class="form-check form-check-inline ">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label
                class="form-check-label "
                style={{ fontSize: "14px" }}
                for="inlineCheckbox1"
              >
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
              <label
                class="form-check-label"
                style={{ fontSize: "14px" }}
                for="inlineCheckbox2"
              >
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
              <label
                class="form-check-label"
                style={{ fontSize: "14px" }}
                for="inlineCheckbox3"
              >
                Fashion
              </label>
            </div>
          </div>
        </div>

        <div
          className="heroHeading col-lg-12"
          style={{ marginTop: "25px", zIndex: "0", width: "30%" }}
        >
          <button
            type="button"
            class="btn btn-outline-review searchButton"
            style={{ height: "40px", width: "105px" }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="row" style={{ width: "100%", margin: "auto" }}>
        <SaleCard userUpcomingData={userUpcomingData} />

     
      </div>
    </div>
  );
}
