import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import {  useNavigate } from "react-router-dom";
function StudMessages() {
  const navigate = useNavigate();

  const navBackToChats = () => {
    navigate("/studChat");
  };
  return (
    <div className=" w-full min-h-screen ">
      <div className="w-full h-40 bg-violet-500 flex justify-between items-center px-5 text-white">
        <GoChevronLeft
          onClick={navBackToChats}
          className=" text-4xl text-white"
        />
        <div className=" flex flex-col items-center">
          <h1 className=" text-2xl">Aleena</h1>
          <div className=" flex gap-1 items-center justify-center">
            <div className=" w-1 h-1 rounded-full bg-blue-400"></div>
            <h1>Online</h1>
          </div>
        </div>
        <PiDotsThreeVerticalBold className=" text-3xl " />
      </div>
      <div className=" w-full h-screen rounded-t-[40px] mt-[-40px] bg-white px-4 py-4">
        <div className="  h-full flex flex-col gap-8 mt-20">
          <div className=" flex flex-col w-1/2 gap-3">
            <h1 className="  px-2 py-1 shadow-md border rounded-xl">
              Hello need any help
            </h1>
            <h1 className="  px-2 py-1 shadow-md border rounded-xl">
              let me know if you need any help
            </h1>
          </div>
          <div className=" flex flex-col w-full gap-3 items-end">
            <h1 className="  px-2 py-1 shadow-md border rounded-xl bg-gray-100">
              Hello need any help
            </h1>
            <h1 className="  px-2 py-1 shadow-md border rounded-xl bg-gray-100">
              let me know if you need any help
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudMessages;
