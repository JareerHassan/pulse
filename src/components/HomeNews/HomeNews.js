import React from "react";
import "./HomeNews.css";
import "../HomeFeaturedSale/HomeFeaturedSale.css";
import "../Header/header.css";
import Sale1 from "../../Assests/5565175.png";
import Sale2 from "../../Assests/4318805.png";

function NewsCard(props) {
  return (
    <div className="col-4 myCol" style={{ width: "320px" }}>
      <div className="card">
        <img
          src={props.banner}
          className="card-img-top"
          alt="Product Image"
          style={{ objectFit: "cover" }}
        />

        <div className="card-body">
          <p className="font-2 text">Oct 03, 2023 . Resturants</p>

          <h5 className="news-title font-2">
            How to choose top-notch resturants in Islamabad.
          </h5>

          <p className="font-2 text">By Sarah Cooper</p>
        </div>
      </div>
    </div>
  );
}

export default function HomeNews() {
  return (
    <div className="">
      <div className="heroHeading col-lg-6 col-sm-6 col-md-6">
        <h1 className="opacity-8">News & Articles</h1>
        <p className="font-2 text ">
          Browse the latest news and articles from our blog.
        </p>
      </div>
      <div className="wrapper" id="News">
        <NewsCard banner={Sale2} />
        <NewsCard banner={Sale1} />
        <NewsCard banner={Sale2} />
        <NewsCard banner={Sale2} />
      </div>
    </div>
  );
}
