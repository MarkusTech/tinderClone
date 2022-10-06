import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>

      <img
        className="header_logo"
        src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Logo.png"
        alt=""
      />

      <ForumIcon fontSize="large" className="header_icon" />
    </div>
  );
};

export default Header;
