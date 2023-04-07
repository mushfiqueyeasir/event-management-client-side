import React, { useState } from "react";
import  './Join.css'
import Login from "./Login";
import SignUp from "./SignUp";

const Join = () => {
  const  [login,setLogin]=useState(true);
  const swapJoinPage=()=>{
    login?
    setLogin(false)
    :
    setLogin(true)
  }

  return (
    <div>
      {login?
      <Login swapJoinPage={swapJoinPage}/>
      :
      <SignUp swapJoinPage={swapJoinPage}/>
      }

    </div>
  );
};

export default Join;
