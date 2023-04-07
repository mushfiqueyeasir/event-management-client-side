import React, { useContext } from "react";
import { GLOBAL_CONTEXT } from "../../layer/AppLayer";

const ProfileDropdown = ({ setOpen }) => {
  const { user } = useContext(GLOBAL_CONTEXT);
  const userImage = user?.photoURL;

  return (
    <div className=" dropdown dropdown-end">
      <div className="btn btn-ghost btn-circle avatar">
        <button onClick={() => setOpen(true)} className="rounded-full">
          <img src={userImage} alt="userImage" className="rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
