import React, { useEffect } from "react";

export default function SalesRight() {
  return (
    <div
      className="col-lg-3  mb-100 maps "
      style={{
        margin: "20px 0px",
        width: "32%",
        padding: "12px",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977"
        frameborder="0"
        style={{ border: "0", width: "100%", height: "1000px" }}
        allowfullscreen
        className=" mb-100 "
      ></iframe>
    </div>
  );
}
