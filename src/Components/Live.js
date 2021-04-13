import React from "react";
import "../App.css";
import HorizontalScrollLive from "./HorizontalScrollLive";

function Live() {
  return (
    <div className="maintxt">
      <img src="assets/banner.jpg" alt="Pic" />
      <HorizontalScrollLive />
    </div>
  );
}

export default Live;
