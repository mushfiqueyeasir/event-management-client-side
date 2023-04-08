import React from "react";
import CopyRIght from "./CopyRIght";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-[#252733e2]">
      <footer className="container mx-auto footer p-10  text-white">
        <div>
          <img src={logo} alt="" className="w-[10rem]" />
          <p>
            EventHive Industries Ltd
            <br />
            Providing reliable tech since 2023
          </p>
        </div>
        <div>
          <span className="text-white font-bold text-base">About</span>
          <Link to="/home" className="link link-hover">
            Home
          </Link>
          <Link to="/join" className="link link-hover">
            Join
          </Link>
        </div>
        <div>
          <span className="text-white font-bold text-base">Contact</span>
          <a
            href="mailto:mushfiqueyeasir@gmail.com"
            className="link link-hover"
          >
            mushfiqueyeasir@gmail.com
          </a>
          <a href="tel:+8801624801466" className="link link-hover">
            +880 1624801466
          </a>
        </div>
        <div>
          <span className="text-white font-bold text-base">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
        </div>
      </footer>
      <CopyRIght />
    </div>
  );
};
