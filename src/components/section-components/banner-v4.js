import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
export default function BannerV4(props) {
  let publicUrl = "http://localhost:3000/";
  let imagealt = "image";

  return (
    <div className="ltn__slider-area ltn__slider-2--- ltn__slider-6 section-bg-2">
      <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1 arrow-white slick-initialized">
        {/* ltn__slide-item */}
        <div
          className="ltn__slide-item ltn__slide-item-2--- ltn__slide-item-6 text-color-white bg-image slick-current"
          style={{
            backgroundImage: `url(${props.bannerImage})`,
            position: "relative",
            left: "0px",
            top: "0px",
            zIndex: "999",
            opacity: "1",
          }}
          data-bs-bg={props.bannerImage}
        >
          <div className="ltn__slide-item-inner text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-info">
                    <div
                      className="slide-item-info-inner ltn__slide-animation"
                      style={{ color: "white" }}
                    >
                      <h1 className="animated ">{props.bannerContent1}</h1>
                      <p className="animated">{props.bannerContent2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
