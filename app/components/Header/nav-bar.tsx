import React from "react";
import cssStyle from "./nav-bar.module.css";
import NikeLogo from "./nikelogo.png";
import Image from "next/image";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={cssStyle.nav}>
        <div className={cssStyle.navPart1}>
          <Image
            className={cssStyle.nikeLogo}
            src={NikeLogo}
            alt=""
            height={50}
          />
          <h4>
            <Link href="">Home</Link>
          </h4>
          <h4>
            <Link href="">Men</Link>
          </h4>
          <h4>
            <Link href="">Women</Link>
          </h4>
          <h4>
            <Link href="">Collections</Link>
          </h4>
          <h4>
            <Link href="">Contact</Link>
          </h4>
        </div>
        <div className={cssStyle.navPart2}>
          <FaSearch className={cssStyle.searchIcon} />
          <FaShoppingCart className={cssStyle.cartIcon} />
          <FaBars className={cssStyle.menuIcon} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
