import React from "react";
import "../App.css";
import HomeCaresole from "../components/HomeCaresole/HomeCaresole";
import HomeCategory from "../components/HomeCategory/HomeCategory";
import HomeFeaturedSale from "../components/HomeFeaturedSale/HomeFeaturedSale";
import HomeRecentReviews from "../components/HomeRecentReviews/HomeRecentReviews";
import HomeUpcomingProducts from "../components/HomeUpcomingProducts/HomeUpcomingProducts";
import HomeNews from "../components/HomeNews/HomeNews";
import SignUp from "../components/SignUp/SignUp";
import WriteAReview from "../components/writeAReview/writeAReview";

function Home(props) {
  return (
    <>
      <HomeCaresole />
      <HomeCategory />
      <HomeFeaturedSale />
      <HomeRecentReviews />
      <HomeUpcomingProducts />
      <HomeNews />
    </>
  );
}

export default Home;
