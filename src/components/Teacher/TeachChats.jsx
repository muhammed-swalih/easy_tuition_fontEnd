import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
function TeachChats() {
  const navigate = useNavigate();
  const navToMsg = () => {
    navigate("/teachMessages");
  };
  return (
    <div className=" w-full min-h-screen px-4 py-4 flex flex-col gap-5">
      <Navbar />
      <div className=" flex flex-col gap-3">
        <div className=" flex flex-col ">
          <h1 className=" text-2xl font-medium">Chats</h1>
        </div>
        <div className=" flex flex-col gap-3">
          <div
            onClick={navToMsg}
            className=" w-full h-auto py-3 px-3 flex justify-between items-center border rounded-xl shadow-md bg-gray-50"
          >
            <div className=" flex gap-4 items-center">
              <div className=" w-16 h-16 bg-orange-500 rounded-xl"></div>
              <div className=" flex flex-col justify-center">
                <div className=" flex flex-col">
                  <h1 className=" text-lg font-medium">Aleena</h1>
                  <h1 className=" mt-[-5px] text-gray-500">
                    Chemistry student
                  </h1>
                </div>
                <h1 className=" text-gray-500">the problem is </h1>
              </div>
            </div>
            <h1 className=" text-sm text-violet-500">just now</h1>
          </div>
          <div className=" w-full h-auto py-3 px-3 flex justify-between items-center border rounded-xl shadow-md bg-gray-50">
            <div className=" flex gap-4 items-center">
              <div className=" w-16 h-16 bg-orange-500 rounded-xl"></div>
              <div className=" flex flex-col justify-center">
                <div className=" flex flex-col">
                  <h1 className=" text-lg font-medium">Aleena</h1>
                  <h1 className=" mt-[-5px] text-gray-500">
                    Chemistry student
                  </h1>
                </div>
                <h1 className=" text-gray-500">the problem is </h1>
              </div>
            </div>
            <h1 className=" text-sm text-violet-500">just now</h1>
          </div>
          <div className=" w-full h-auto py-3 px-3 flex justify-between items-center border rounded-xl shadow-md bg-gray-50">
            <div className=" flex gap-4 items-center">
              <div className=" w-16 h-16 bg-orange-500 rounded-xl"></div>
              <div className=" flex flex-col justify-center">
                <div className=" flex flex-col">
                  <h1 className=" text-lg font-medium">Aleena</h1>
                  <h1 className=" mt-[-5px] text-gray-500">
                    Chemistry student
                  </h1>
                </div>
                <h1 className=" text-gray-500">the problem is </h1>
              </div>
            </div>
            <h1 className=" text-sm text-violet-500">just now</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeachChats;
