import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ user, open }) => {
  return (
    <div className={`${user ? "navbar-center" : "navbar-end"} hidden lg:flex `}>
      <ul className="menu menu-horizontal px-1">
        <li>
          <NavLink
            to="/home"
            className="font-bold text-white hover:bg-[#57A3E1] active:bg-[#57A3E1]"
          >
            <span>Home</span>
          </NavLink>
        </li>
        {user && (
          <>
            <li>
              <NavLink
                to="/profile"
                className="font-bold text-white hover:bg-[#57A3E1] active:bg-[#57A3E1] "
              >
                <span> My Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myEvents"
                className="font-bold text-white hover:bg-[#57A3E1] active:bg-[#57A3E1]"
              >
                <span>My Events</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/createEvents"
                className="font-bold text-white hover:bg-[#57A3E1] active:bg-[#57A3E1]"
              >
                <span>Create Events</span>
              </NavLink>
            </li>
          </>
        )}
        {!user && (
          <li>
            <NavLink
              to="/join"
              className="font-bold text-white hover:bg-[#57A3E1] active:bg-[#57A3E1]"
            >
              <span>Join</span>
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
