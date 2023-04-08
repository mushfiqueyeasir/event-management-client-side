import React, { useContext } from "react";
import { GLOBAL_CONTEXT } from "../../layer/AppLayer";

const ProfileDropdown = ({ setOpen }) => {
  const { user } = useContext(GLOBAL_CONTEXT);
  const userImage = user?.photoURL
    ? user?.photoURL
    : "https://www.w3schools.com/howto/img_avatar.png";

  return (
    <div className=" dropdown dropdown-end flex items-center gap-x-3 ">
      <h2 className="hidden md:block font-bold text-white">
        {user.displayName}
      </h2>
      <div className="btn btn-ghost btn-circle avatar  scale-[1.3] p-[.10rem]  ">
        <button onClick={() => setOpen(true)} className="rounded-full">
          <img
            src={userImage}
            alt="userImage"
            className="rounded-full  scale-[1] "
          />
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
