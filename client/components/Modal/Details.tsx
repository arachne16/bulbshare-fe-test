import React from "react";
import { GenericObject } from "../../interfaces";
import "./details.css";

const Details = ({ item }: GenericObject) => {
  return (
    <div className="details">
      <div className="details--logo">
        <img src={item?.brand?.logo} alt="logo" />
      </div>
      <h3>{item?.feed_title}</h3>
      <p>{item.starts_on}</p>
      <p>{item.banner_text}</p>
      <div className="details--image 1">
        <img src={item?.ad_1_image} alt="banner" />
      </div>
      <div className="details--image 2">
        <img src={item?.ad_2_image} alt="banner" />
      </div>
    </div>
  );
};

export default Details;
