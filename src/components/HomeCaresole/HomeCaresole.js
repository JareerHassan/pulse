import React, { useState } from "react";
import "./HomeCaresole.css";
import "../Header/header.css";
import Search from "../../Assests/search-interface-symbol.svg";
import Banner1 from "../../Assests/BannerImage1.png";
import Banner2 from "../../Assests/Banner Image 2.png";
import Banner3 from "../../Assests/Banner Image 3.png";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function Mycaresoul({ item, banner }) {
  return (
    <MDBCarouselItem itemId={item}>
      <img src={banner} className="d-block w-100 banner" alt="..." />
    </MDBCarouselItem>
  );
}

export default function HomeCaresole() {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    // Handle the search action using the current value of searchInput
    console.log("Search input:", searchInput);
  };

  return (
    <>
      <div className="caresoulOuter">
        <MDBCarousel showIndicators showControls fade>
          <Mycaresoul item={1} banner={Banner1} />
          <Mycaresoul item={2} banner={Banner2} />
          <Mycaresoul item={3} banner={Banner3} />
        </MDBCarousel>

        <div className="search" style={{ zIndex: "900" }}>
          <h2 className="semibold">Unlocking Insights, Empowering Choices</h2>
          <p className="font-2 opct-2">
            Your Trusted Source for Business Reviews
          </p>
          <div className="search-input">
            <input
              type="text"
              placeholder="What?"
              // value={searchInput}
              // onChange={handleInputChange}
              style={{ marginRight: "-5px" }}
            />
            <input
              type="text"
              placeholder="Where?"
              style={{ marginRight: "-5px" }}
            />
            {/* <button onClick={handleSearch}> */}
            <button style={{ height: "47px" }}>
              <img src={Search} alt="Search" />
            </button>
          </div>
          <p className="font-2 opct-2">
            By using this website, you are agreeing to our terms and conditions
          </p>
        </div>
      </div>

      <div className="caresoleMobile">
        <h2 className="semibold">Unlocking Insights, Empowering Choices</h2>

        <div className="input-group" style={{ margin: "auto", width: "80%" }}>
          <span
            className="input-group-addon"
            style={{
              borderRadius: "5px 0px 0px 5px",
            }}
          >
            <i className="fa fa-search"></i>
          </span>
          <input
            style={{
              borderRadius: "0px 5px 5px 0px",
            }}
            className="Mobilewhat"
            type="text"
            placeholder="What? e.g. Resturants, Store, Electronic"
          />
        </div>

        {/* <input
            className="Mobilewhat"
            type="text"
            placeholder="What?"
            // className=" col-md-6 col-sm-6"
          /> */}

        <div className="Mobilewhere">
          <div className="input-group" style={{ width: "100%" }}>
            <span
              className="input-group-addon"
              style={{
                borderRadius: "5px 0px 0px 5px",
              }}
            >
              <i className="fa fa-search"></i>
            </span>
            <input
              style={{
                borderRadius: "0px 0px 0px 0px",
              }}
              type="text"
              placeholder="Where? e.g. Islamabad, Lahore"
            />
          </div>
          <button
            style={{
              borderRadius: "0px 5px 5px 0px",
              marginLeft: "-2px",
            }}
          >
            <img src={Search} alt="..." style={{ height: "18px" }} />
          </button>
          {/* <input
            style={{
              width: "80%",
              borderRadius: "0px 0px 0px 0px",
              placeholderColor: "black",
            }}
            type="text"
            placeholder="Where?"
          />
          <button>
            <img src={Search} alt="..." style={{ height: "18px" }} />
          </button> */}
        </div>
      </div>
    </>
  );
}
