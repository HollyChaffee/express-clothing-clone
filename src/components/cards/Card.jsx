import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function ClothingCard({ imageSrc, title, price }) {
  return (
    <Card>
      <CardMedia component="img" height="140" image={imageSrc} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="subtitle1">
          {title}
        </Typography>
        <Typography variant="subtitle2">
          {price}
          <strong>*</strong>
        </Typography>
        <Typography variant="body2" className="shop-now">
          SHOP NOW
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ClothingCard;
