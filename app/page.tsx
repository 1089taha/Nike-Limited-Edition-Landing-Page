import React from "react";
import NavBar from "./components/Header/nav-bar";
import Footer from "./components/Footer/Footer";
import cssstyle from "./home.module.css";
import Image from "next/image";
import shoePic1 from "./shoe1.png";
import shoePic2 from "./shoe2.png";
import shoePic3 from "./shoe3.png";
import shoePic4 from "./shoe4.png";
import shoePic5 from "./shoe5.png";
import shoePic6 from "./shoe6.png";
import shoePic7 from "./shoe7.png";

export default function Home() {
  return (
    <>
      <div className={cssstyle.body}>
        <NavBar />
        <div className={cssstyle.content}>
          <div className={cssstyle.left}>
            <h5>Explore Limited Edition</h5>
            <h1>Nike Limited Edition</h1>
            <p>
              Discover Nike’s exclusive Limited Edition collection—designed to
              push boundaries with bold style and peak performance. Crafted for
              athletes and enthusiasts alike, these shoes deliver unmatched
              comfort, durability, and innovation. Elevate your game and make a
              statement with this rare collection.
            </p>
            <button>SHOP NOW</button>
          </div>
          <div className={cssstyle.right}>
            <div className={cssstyle.elem}>
              <Image src={shoePic1} alt="" className={cssstyle.shoeImage} />
              <h4>Lebron 12</h4>
              <h5>Men's Basketball Shoes</h5>
            </div>
            <div className={cssstyle.elem}>
              <Image src={shoePic2} alt="" className={cssstyle.shoeImage} />
              <h4>Nike Air Pegasus 39</h4>
              <h5>Men's Shoes</h5>
            </div>
            <div className={cssstyle.elem}>
              <Image src={shoePic3} alt="" className={cssstyle.shoeImage} />
              <h4>Air Jordan</h4>
              <h5>Men’s Sneakers</h5>
            </div>
            <div className={cssstyle.elem}>
              <Image src={shoePic4} alt="" className={cssstyle.shoeImage} />
              <h4>Nike TN</h4>
              <h5>Men’s football shoes</h5>
            </div>
            <div className={cssstyle.elem}>
              <Image src={shoePic5} alt="" className={cssstyle.shoeImage} />
              <h4>Pink Air Winflo 9 </h4>
              <h5>Women's Running Shoes</h5>
            </div>
            <div className={cssstyle.elem}>
              <Image src={shoePic6} alt="" className={cssstyle.shoeImage} />
              <h4>Nike Air Huarache</h4>
              <h5>Women's Sneakers</h5>
            </div>
            <div className={cssstyle.elem}>
              <Image src={shoePic7} alt="" className={cssstyle.shoeImage} />
              <h4>Air Max 90</h4>
              <h5>Womens Trainers</h5>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
