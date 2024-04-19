import React, { useState } from "react";
import { IoLogoBuffer } from "react-icons/io";
import { IoSettingsOutline, IoSearchSharp } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import Styles from "../styles/navbar.module.css";
import CustomLink from "../utils/CustomLink";

export default function Navbar() {
  return (
    <nav className={Styles.nav}>
      <ul>
        <CustomLink className={Styles.hideFromMobile} to="/">
          <IoLogoBuffer />
        </CustomLink>
        <div>
          <CustomLink to="/search">
            <IoSearchSharp />
          </CustomLink>
          <CustomLink to="/">
            <AiOutlineHome />
          </CustomLink>
          <CustomLink to="/dashboard">
            <MdOutlineDashboardCustomize />
          </CustomLink>
          <CustomLink to="/profile">
            <FaRegUser />
          </CustomLink>
        </div>
        <CustomLink className={Styles.hideFromMobile} to="/settings">
          <IoSettingsOutline />
        </CustomLink>
      </ul>
    </nav>
  );
}
