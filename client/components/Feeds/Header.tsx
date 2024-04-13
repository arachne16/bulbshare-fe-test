import React from "react";
import { GenericObject } from "../../interfaces";

const Header = ({ item }: GenericObject) => {
  return (
    <div className="header">
      <div className="profile">
        <div>
          <img src={item?.logo} alt="logo" className="profile-image" />
        </div>
        <p>{item?.name || ""}</p>
      </div>
      <div>
        <a href="#">Join this brief</a>
      </div>
    </div>
  );
};

export default Header;
