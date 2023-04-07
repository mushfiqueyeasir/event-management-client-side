import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

const LogOutButton = ({ open, handleSignOut }) => {
  return (
    <button
      type="button"
      onClick={handleSignOut}
      to="/myEvents"
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
        {React.createElement(AiOutlineLogout, { size: "22" })}
        Logout
      </div>
    </button>
  );
};

export default LogOutButton;
