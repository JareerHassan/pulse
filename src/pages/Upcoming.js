import React from "react";
import SalesLeft from "../components/SalesLeft/SalesLeft";
import SalesRight from "../components/SalesRight/SalesRight";
import UpcomingMiddle from "../components/Upcoming/UpcomingMiddle";

export default function Upcoming() {
  return (
    <div className="row" style={{ width: "100%", margin: "50px 0px 0px 0px" }}>
      <SalesLeft />
      <UpcomingMiddle />
      <SalesRight />
    </div>
  );
}
