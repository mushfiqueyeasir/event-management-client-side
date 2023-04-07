import React from "react";
import "./loadingScreen.css";

const PostLoading = ({ small }) => {
  return (
    <div
      className={
        small
          ? ``
          : `fixed top-[45vh]  md:top-[43vh] lg:top-[40vh]  left-[35vw] md:left-[42vw] lg:left-[47vw]`
      }
    >
      <div
        className={`loader ${small ? "w-[4rem]" : "w-[8rem]"} ${
          small ? "h-[4rem]" : "h-[8rem]"
        } shadow-lg`}
      ></div>
    </div>
  );
};

export default PostLoading;
