import React, { useContext } from "react";
import LogOutButton from "./LogOutButton";
import ProfileRoute from "./ProfileRoute";
import { AiOutlineHome } from "react-icons/ai";
import { HiMenuAlt3, HiOutlineSpeakerphone } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BsPencil } from "react-icons/bs";

import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { GLOBAL_CONTEXT } from "../../layer/AppLayer";

const Slider = ({ open, setOpen }) => {
  const { user } = useContext(GLOBAL_CONTEXT);
  const userName = user?.displayName;
  const userImage = user?.photoURL;
  const handleSignOut = () => {
    signOut(auth);
    setOpen(!open);
  };

  return (
    <section
      className={`bg-white shadow-md min-h-screen absolute top-0 right-0 z-50    ${
        open ? "w-[100vw] md:w-[20rem] px-4" : "w-0"
      } duration-500   `}
    >
      <div className="py-3 flex justify-start">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div
        className={`flex flex-col  justify-center items-center gap-y-2 ${
          !open && "scale-0"
        }`}
      >
        <img
          src={userImage}
          alt=""
          style={{
            transitionDelay: `${1 + 3}00ms`,
          }}
          className={`rounded-full border-4 p-1 border-[#57A3E1] duration-500 ${
            !open && "opacity-0 translate-x-28 overflow-hidden"
          }`}
        />
        <h2
          style={{
            transitionDelay: `${2 + 3}00ms`,
          }}
          className={`text-xl font-bold duration-500 ${
            !open && "opacity-0 translate-x-28 overflow-hidden"
          }`}
        >
          {userName}
        </h2>
      </div>
      <div className="mt-4 flex flex-col gap-4 relative capitalize">
        <ProfileRoute
          open={open}
          routeLogo={AiOutlineHome}
          routeName={"Home"}
          routeEndpoint={"/home"}
        />
        <ProfileRoute
          open={open}
          routeLogo={CgProfile}
          routeName={"My Profile"}
          routeEndpoint={"/profile"}
        />
        <ProfileRoute
          open={open}
          routeLogo={HiOutlineSpeakerphone}
          routeName={"My Events"}
          routeEndpoint={"/myEvents"}
        />
        <ProfileRoute
          open={open}
          routeLogo={BsPencil}
          routeName={"Create Events"}
          routeEndpoint={"/createEvents"}
        />
        <LogOutButton open={open} handleSignOut={handleSignOut} />
      </div>
    </section>
  );
};

export default Slider;
