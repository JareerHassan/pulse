import axios from "../../Api/Axios";
import * as axiosUrls from '../../Api/AxiosUrls'
import React, { useEffect, useState } from "react";
import Sale1 from "../../Assests/5565175.png";
import Calendar from "../../Assests/calendar.svg";
import Clothes from "../../Assests/clothes.svg";
function SaleCard({ userFavSalesData }) {
  return (
    <>
      {userFavSalesData.map(index => (
        <div
          key={index.id}
          className="col-3 saleCards "
          style={{
            padding: "0px",
            width: "30%",
            margin: "auto",
            marginTop: "10px",
          }}
        >
          <div className="card">
            <img
              src={index.product_image}
              className="card-img-top"
              alt="Product Image"
              style={{ objectFit: "cover" }}
            />

            <div className="card-body">
              <div className="d-flex justify-content-between p-0">
                <h5 className="card-title font-3 m-0">{index.product_name}</h5>
                <button type="button" className="bg-transparent">
                  <i class="fas fa-heart" id="loveFvrt" style={{ color: "#E61616" }}></i>
                </button>
              </div>

              <div className="cardTextOuter  buisnessDetails">
                <p className="cardInnerItem font-3 ">Brand Name</p>
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

export default function FavUsers() {
  const [isToken, setIsToken] = useState(false); // Initialize to false
  const [userFavSalesData, setuserFavSalesData] = useState([]);
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
      axios.get(axiosUrls.userUpcomingProducts, {
        headers: {
          'Authorization': 'Bearer ' + token // Include token in the Authorization header
        }
      })
        .then((res) => {
          if (Array.isArray(res.data)) {
            setuserFavSalesData(res.data);

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
      <div className="heroHeading col-lg-6 col-sm-6 col-md-6">
        <h3 className="opacity-8" style={{ marginTop: "40px" }}>
          My Favorites
        </h3>
      </div>
      <div className="row" style={{ width: "90%", margin: "auto" }}>

        <SaleCard userFavSalesData={userFavSalesData} />

      </div>
    </div>
  );
}
