import React from "react";
import ContactUsComponents from "../components/ContactUs/ContactUs";
import ReviewContent from "../components/ReviewContent/ReviewContent";
import BannerV4 from "../components/section-components/banner-v4";
export default function ContactUs() {
  return (
    <>
      <BannerV4
        bannerImage={"http://localhost:3000/assets/img/banner/contactus.png"}
        bannerContent1={"Contact Us"}
        bannerContent2={""}
      />
      <ContactUsComponents />
    </>
  );
}
