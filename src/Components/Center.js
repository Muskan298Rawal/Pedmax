import React from "react";
import "../App.css";
import HorizontalScrollLive from "./HorizontalScrollLive";
import HorizontalScrollArriving from "./HorizontalScrollArriving";

function Center() {
  return (
    <div className="maintxt">
      <img src="assets/banner.jpg" alt="Pic" />
      <HorizontalScrollLive />
      <HorizontalScrollArriving />
    </div>
  );
}

export default Center;
