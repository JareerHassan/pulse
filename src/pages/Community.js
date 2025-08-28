import React from "react";
import CommunityLeft from "../components/Community/CommunityLeft";
import CommunityMiddle from "../components/Community/CommunityMiddle";
import CommunityRight from "../components/Community/CommunityRight";
import BannerV4 from "../components/section-components/banner-v4";


export default function Community() {
  return (
    <> 
    <BannerV4
        bannerImage={"http://localhost:3000/assets/img/banner/community.png"}
        bannerContent1={"Community"}
        bannerContent2={"Unite, Engage, Connect: Join the Conversation!"}
      />
    <div className="row" style={{ width: "100%", margin: "50px 0px 0px 0px" }}>
      <CommunityLeft />
      <CommunityMiddle />
      <CommunityRight />
    </div>
    </>
  );
}
