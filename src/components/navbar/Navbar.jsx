import React, { useState } from "react";
import { IoLogoBuffer } from "react-icons/io";
import { IoSettingsOutline, IoSearchSharp } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import "./navbar.scss";
import CustomLink from "../../utils/CustomLink";

export default function Navbar({ itemCount }) {
  return (
    <nav className="nav">
      <ul>
        <CustomLink className="hideFromMobile" to="/">
          <IoLogoBuffer />
        </CustomLink>
        <div>
          <CustomLink to="/search">
            <IoSearchSharp />
          </CustomLink>
          <CustomLink to="/">
            <AiOutlineHome />
          </CustomLink>
          <CustomLink id="cart-icon" to="/cart">
            <MdShoppingCartCheckout />
            <small>{itemCount === 0 ? "" : itemCount}</small>
          </CustomLink>
          <CustomLink to="/profile">
            <FaRegUser />
          </CustomLink>
        </div>
        <CustomLink className="hideFromMobile" to="/settings">
          <IoSettingsOutline />
        </CustomLink>
      </ul>
    </nav>
  );
}
