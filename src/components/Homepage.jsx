import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import logo from "../assets/ET ASSESTS WEBP/logo_easytuition.in.webp";
function Homepage() {
  return (
    <div className=" px-4 py-4 min-h-screen bg-[#F8FAFF]">
      <div className=" flex justify-between">
        <div>
          <img width={140} src={logo} alt="" />
        </div>
        <div className=" flex items-center gap-2">
          <div className=" px-2 h-10 flex items-center  justify-center text-white bg-blue-500 rounded-md">
            Join today
          </div>
          <h1 className=" text-3xl">
            <IoMenuSharp />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
