import axios from "../../Api/Axios";
import * as axiosUrls from '../../Api/AxiosUrls'
import React,{useEffect,useState} from "react";
import "../Header/header.css";
import "./ReviewWrite.css";
import Search from "../../Assests/search-interface-symbol.svg";
import PeopleColab from "../../Assests/Write Review.png";
import Chicken from "../../Assests/chicken.jpg";
import Rate from "../../Assests/rating (1).svg";
import { Link } from "react-router-dom";

function PlacesCards( { userBranchData }) {
  return (
    <>
    {userBranchData.map(index => (
    <div key={index.id} className=" PlacesCards">
      <img src={Chicken} alt="..." />
      <div className="PlacesCardsContent">
        <h4 class="font-1 bold" style={{ opacity: "0.9", fontWeight: "600" }}>
       { index.branch_name}
        </h4>
        <p className="font-2" style={{ opacity: 0.7 }}>
          Do you recommend this business?
        </p>
        <small className="rattingsStart">
          <img src={Rate} alt="tating.." />
          <img src={Rate} alt="tating.." />
          <img src={Rate} alt="tating.." />
          <img src={Rate} alt="tating.." />
          <img src={Rate} alt="tating.." />
        </small>
      </div>
    </div>
    ))}
    </>
  );
}

export default function ReviewWrite() {
  const [isToken, setIsToken] = useState(false); // Initialize to false
  const [userBranchData, setUserBranchData] = useState([]);
  useEffect(() => {
    const checkToken = () => {
      if (localStorage.getItem("loginToken")) {
        setIsToken(true);
      }
    };
    checkToken(); // Call the function to set the state when the component mounts
  }, []); 
   useEffect(() => {
  console.log(isToken)

    if (isToken) { // Only make the request if there's a token
      const token = localStorage.getItem("loginToken");
      console.log(token)
    
      axios.get(axiosUrls.userBranch, {
        headers: {
          'Authorization': 'Bearer ' + token // Include token in the Authorization header
        }
      })
      .then((res) => {
        if (Array.isArray(res.data)) {
          setUserBranchData(res.data);
        } else {
          console.error('Invalid response format. Expected an array.');
        }      })
      .catch(err => {
         console.log(err);
      })
    }
  }, [isToken]); 


  return (
    <div className="row ReviewWrite">
      <div
        className="col-md-8 SearchSide"
        style={{ marginTop: "40px", margin: "auto" }}
      >
        <h4 class="font-1 bold" style={{ opacity: "0.9", fontWeight: "600" }}>
          Find a business to review
        </h4>
        <p className="font-2" style={{ opacity: 0.7 }}>
          Review anything from your favorite patio spot to your local flower
          shop.
        </p>

        <div className="form">
          <input
            className="what"
            type="text"
            placeholder="What? e.g. Resturants, Store, Electronic"
            style={{ width: "40%", borderRadius: "5px 0px 0px 5px" }}
          />

          <div className="where">
            <input
              type="text"
              // className="where"
              placeholder="Where? e.g. Islamabad, Lahore"
            />
            <button className="font-2">
              <Link
                to="/findBuisnessReview"
                style={{ color: "white", style: "none" }}
              >
                <img
                  src={Search}
                  alt="..."
                  style={{ width: "14px", margin: "0px 2px 2px 0px" }}
                />
                Search
              </Link>
            </button>
          </div>
        </div>
      </div>
      <img
        src={PeopleColab}
        alt="..."
        className="col-md-4 PeopleColab"
        style={{ marginTop: "40px" }}
      />
      <h4
        class="font-1 bold"
        style={{ opacity: "0.9", fontWeight: "600", marginTop: "20px" }}
      >
        Visited one of these places recently?
      </h4>

      <div className="IsVisited row ">
        <PlacesCards userBranchData={userBranchData} />
       
      </div>
    </div>
  );
}
