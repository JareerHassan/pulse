import React from "react";

import SalesLeft from "../components/SalesLeft/SalesLeft";
import SalesMiddle from "../components/SalesMiddle/SalesMiddle";
import SalesRight from "../components/SalesRight/SalesRight";
export default function Sales() {
  return (
    <div className="row" style={{ width: "100%", margin: "50px 0px 0px 0px" }}>
      <SalesLeft />
      <SalesMiddle />
      <SalesRight />
    </div>
  );
}
