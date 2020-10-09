import React from "react";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

import "./Header.css";
import { useStateValue } from "../../contextAPI/StateProvider";

const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          className="header_avatar"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTime />
      </div>
      <div className="header_search">
        <Search />
        <input placeholder="Search for something" />
      </div>
      <div className="header_right">
        <HelpOutline />
      </div>
    </div>
  );
};

export default Header;
