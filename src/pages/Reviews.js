import React from "react";
import ReviewsSearch from "../components/ReviewsSearch/ReviewsSearch";
import ReviewContent from "../components/ReviewContent/ReviewContent";
import BannerV4 from "../components/section-components/banner-v4";

export default function Reviews() {
  return (
    <>
      <BannerV4
        bannerImage={"http://localhost:3000/assets/img/banner/reviewBanner.png"}
        bannerContent1={"Customer Reviews"}
        bannerContent2={
          "Discover the Voice of the Customers: Real Reviews, Real Experiences"
        }
      />
      <ReviewsSearch />   
      <ReviewContent />
    </>
  );
}
