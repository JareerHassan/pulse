import axios from "../../Api/Axios";
import * as axiosUrls from '../../Api/AxiosUrls'
import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import Search from "../../Assests/search-interface-symbol.svg";
import PeopleColab from "../../Assests/3708508.jpg";
import Chicken from "../../Assests/chicken.jpg";
import Rate from "../../Assests/rating (1).svg";

function PlacesCards({ userBranchData }) {
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

export default function FindBuisnessReview() {
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
    <div className="row " style={{ width: "100%" }}>
      <div className="col-lg-7  mb-100 " style={{ margin: "20px 0px" }}>
        <div className="row ReviewWrite">
          <div className="col-md-12 SearchSide">
            <h4
              class="font-1 bold"
              style={{ opacity: "0.9", fontWeight: "600" }}
            >
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
      </div>
      <div className="col-lg-4" style={{ margin: "auto" }}>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571289.733943155!2d76.08560099999998!3d29.058775699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e4a4b98404f57%3A0x75ffae70833e8448!2sShahbad%2C%20Haryana%20136135!5e0!3m2!1sen!2sin!4v1594195370933!5m2!1sen!2sin"
            width="100%"
            height="500"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
