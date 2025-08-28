import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileIcon from "../../Assests/ProfileLogin.svg";
import UserProfile from "../../Assests/userProfile.svg";
import Fav from "../../Assests/Love.svg";
import Logo from "../../Assests/logo.png";
import Reviews from "../../Assests/review.svg";
import "./header.css";
import SignUp from "../SignUp/SignUp";
import Button from 'react-bootstrap/Button';

// import { a } from "react-router-dom";
export default function Header() {

  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const [show, setShow] = useState(false);
  const [isToken, setIsToken] = useState(false); // Initialize to false
  useEffect(() => {
    const checkToken = () => {
      if (localStorage.getItem("loginToken")) {
        setIsToken(true);
      }
    };

    checkToken();
  }, []);

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = (e) => {
    setShow(true);
    e.preventDefault();
  }

  function reviewHandle(e) {
    e.preventDefault();
    if (localStorage.getItem("loginToken")) {
      navigate("/writeReview");
    }
    else {
      handleShow(e);
    }
  }
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (

    <div className="hero color">
      <nav className="navbar-expand-lg ">
        <div className="container-fluid bar">
          <div className="nav-component">
            <div className="navcomponent-logo-parent">
              <p className="navcomponent-logo bold">
                <img src={Logo} alt="pulse 2x" />
              </p>
            </div>

            <div className="navcomponent-item ">
              {/* <a href="" className="nav-links active font-2 semibold">
                Home
              </a> */}
              <Link to="/" className={"nav-links font-2 semibold "+(window.location.pathname =="/"?'active':'')}>
                Home
              </Link>

              <Link to="/sales" className={"nav-links font-2 semibold "+(window.location.pathname =="/sales"?'active':'')}>
                Sales
              </Link>
              <Link to="/buisness" className={"nav-links font-2 semibold "+(window.location.pathname =="/buisness"?'active':'')}>
                Buisness
              </Link>
              <Link to="/upcoming" className={"nav-links font-2 semibold "+(window.location.pathname =="/upcoming"?'active':'')}>
                Upcoming
              </Link>
              {/* <a href="" className="nav-links font-2 semibold">
                Reviews
              </a> */}
              <Link to="/community" className={"nav-links font-2 semibold "+(window.location.pathname =="/community"?'active':'')}>
                Community
              </Link>
              <Link to="/reviews" className={"nav-links font-2 semibold "+(window.location.pathname =="/reviews"?'active':'')}>
                Reviews
              </Link>
              <Link to="/contactUs" className={"nav-links font-2 semibold "+(window.location.pathname =="/contactUs"?'active':'')}>
                ContactUs
              </Link>
              <Link to="/pricing" className={"nav-links font-2 semibold "+(window.location.pathname =="/pricing"?'active':'')}>
                Pricing
              </Link>
              <button className="btn btn-outline-review font-3 p-2 semibold" style={{maxWidth:"100px"}} onClick={reviewHandle}>
                <Link
                  // onClick={handleShow}
                  // to="/writeReview"
                  style={{ color: "inherit", style: "none"}}
                >
                  Write a review
                </Link>
              </button>

              <button className=" btn btn-outline-buisness font-3 semibold p-2" style={{maxWidth:"150px"}}>
                <Link 
                to="/businesslogin" >
                Pulse for Buisness
                </Link>
              </button>

              {!isToken ? (

                <a
                  href=""
                  className="nav-links dropdown-toggle multi font-2 semibold"
                  id="navbarDropdown"
                  role="a"
                  aria-expanded="false"
                  onClick={handleShow}

                >
                  <img src={ProfileIcon} alt="" className="nav-icon" />

                  Login
                </a>

              ) : (
                <>
                  <a
                    href=""
                    className="nav-links dropdown-toggle multi font-2 semibold"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={ProfileIcon} alt="" className="nav-icon" />
                    Arshia
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    style={{ padding: "0px 10px" }}
                  >
                    <li style={{ opacity: "0.8" }}>
                      <img src={UserProfile} alt="" />
                      <Link
                        to="/userProfile"
                        className="dropdown-item font-2"
                        style={{ paddingLeft: "8px" }}
                        
                      >
                        My Profile
                      </Link>
                    </li>
                    <li style={{ opacity: "0.8" }}>
                      <img src={Fav} alt="" />
                      <Link
                        to="/userFav"
                        className="dropdown-item font-2"
                        style={{ paddingLeft: "8px" }}
                        
                      >
                        My Favorite
                      </Link>
                    </li>
                    <li style={{ opacity: "0.8" }}>
                      <img src={Reviews} alt="" />
                      <Link
                        to="/myReview"
                        className="dropdown-item font-2"
                        style={{ paddingLeft: "8px" }}
                        
                      >
                        My Reviews
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
        <SignUp handleClose={handleClose} handleShow={handleShow} show={show} />
      </nav>
    </div>

  );
}
