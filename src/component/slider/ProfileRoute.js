import React from "react";
import { NavLink } from "react-router-dom";

const ProfileRoute = ({ open, routeLogo, routeName, routeEndpoint }) => {
  return (
    <NavLink
      to={routeEndpoint}
      className={`group flex items-center text-sm  gap-3.5 font-medium p-2 bg-gray-200"  ${
        open && "bg-slate-600"
      }rounded-md disabled ${!open && "scale-0"}`}
    >
      <div
        style={{
          transitionDelay: `300ms`,
        }}
        className={`flex items-center gap-x-2 whitespace-pre duration-500 ${
          !open && "opacity-0 translate-x-28 overflow-hidden"
        }`}
      >
        {React.createElement(routeLogo, { size: "22" })}
        {routeName}
      </div>
    </NavLink>
  );
};

export default ProfileRoute;
