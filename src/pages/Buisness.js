import React from "react";
import BuisnessLeft from "../components/Business/BuisnessLeft";
import BuisnessMiddle from "../components/Business/BuisnessMiddle";
import BuisnessRight from "../components/Business/BuisnessRight";

export default function Buisness() {
  return (
    <div className="row" style={{ width: "100%", margin: "50px 0px 0px 0px" }}>
      <BuisnessLeft />
      <BuisnessMiddle />
      <BuisnessRight />
    </div>
  );
}
