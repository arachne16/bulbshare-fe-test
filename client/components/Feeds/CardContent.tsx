import React from "react";
import { GenericObject } from "../../interfaces";

const CardContent = ({ item }: GenericObject) => {
  return (
    <div className="cardcontent">
      <img src={item?.banner_image} alt="banner" />
      <h3 className="cardcontent-title">{item?.feed_title || ""}</h3>
    </div>
  );
};

export default CardContent;
