import React from "react";
import "./PictureGrid.css";
import womensSale1Image from "./card-images/WomensSale1.avif";

const PictureGrid = () => {
  return (
    <div className="picture-grid">
      <div className="picture">
        <img src={womensSale1Image} alt="Image 1" />
        <div className="picture-text">Image 1</div>
      </div>
      {/* Add more picture items */}
    </div>
  );
};

export default PictureGrid;
