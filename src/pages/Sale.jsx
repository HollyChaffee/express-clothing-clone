import React from "react";
import ClothingCard from "./components/cards/Cards";

function Sale() {
  return (
    <div>
      {/* Other content */}
      <ClothingCard
        imageSrc="/path/to/image1.jpg"
        title="Women's Summer Style Steals"
        price="$20+"
      />
      <ClothingCard
        imageSrc="/path/to/image2.jpg"
        title="Men's Casual Collection"
        price="$30+"
      />
      {/* Add more ClothingCard components as needed */}
    </div>
  );
}

export default Sale;
