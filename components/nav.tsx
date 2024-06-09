import React from "react";
import style from "@/styles/Home.module.css";
import { Josefin_Sans } from "next/font/google";

const sans = Josefin_Sans({ subsets: ["latin"] });

const Nav = () => {
  return (
    <div className={style.navBarBG}>
      <div className={`${style.NavBar} ${sans.className}`}>
        <img src="/Group 4 (1).png" alt="" />
        <ul>
          <li>Home</li>
          <li>Feature</li>
          <li>How it works</li>
          <li>Contact</li>
        </ul>
        <button>Request Demo</button>
      </div>
    </div>
  );
};

export default Nav;
