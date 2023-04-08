import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

import logo from "../../assets/images/logo.png";
import Slider from "../slider/Slider";
import { GLOBAL_CONTEXT } from "../../layer/AppLayer";
import Navigation from "./Navigation";

const NavBar = () => {
  const { user } = useContext(GLOBAL_CONTEXT);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#3992dbd8]  shadow sticky top-0 z-50">
      <div className="container mx-auto navbar ">
        <div className="navbar-start">
          <Link
            to={"/home"}
            className="normal-case text-xl hover:scale-[1.03] duration-300"
          >
            <img src={logo} alt="" className=" w-[130px] " />
          </Link>
        </div>
        {!open && <Navigation user={user} open={open} />}

        {user && (
          <div className="navbar-end pr-2">
            <ProfileDropdown setOpen={setOpen} />
          </div>
        )}
      </div>
      <Slider open={open} setOpen={setOpen} />
    </div>
  );
};

export default NavBar;
