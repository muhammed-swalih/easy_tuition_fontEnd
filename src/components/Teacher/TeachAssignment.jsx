import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
function TeachAssignment() {
  const navigate = useNavigate();
  const navToHostAss = () => {
    navigate("/createAss");
  };
  return (
    <div className=" w-full min-h-screen px-4 py-4">
      <Navbar />
      <div className=" mt-10 flex flex-col gap-10">
        <div className=" w-full flex justify-between items-center">
          <h1 className=" text-2xl font-medium">Assignment</h1>
          <div
            onClick={navToHostAss}
            className=" w-28 h-10 flex items-center justify-center text-white bg-violet-500 rounded-xl"
          >
            <h1>Host</h1>
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <div className=" w-full bg-gray-50 h-auto py-5 px-3 flex flex-col gap-2 rounded-2xl shadow-md">
            <div className=" flex gap-4 items-center">
              <div className=" w-16 h-16 bg-orange-500 rounded-2xl"></div>
              <div className=" flex flex-col">
                <h1 className=" font-medium text-xl">Nourin</h1>
                <h1>Biology student</h1>
                <h1 className=" mt-[-3px]">10th class</h1>
              </div>
            </div>
            <hr className=" border-gray-400 " />
            <div className=" flex justify-between">
              <div className=" flex flex-col ">
                <h1 className=" text-violet-500">Assignment Topic</h1>
                <h1>Liear Equation</h1>
              </div>
              <div className=" flex  flex-col items-end">
                <h1 className=" text-violet-500">Due date</h1>
                <h1>Jan, 6,2023</h1>
              </div>
            </div>
            <div className=" w-full h-12 text-white bg-violet-500 shadow-md rounded-2xl flex items-center justify-center">
              <h1>View Details</h1>
            </div>
          </div>
          <div className=" w-full bg-gray-50 h-auto py-5 px-3 flex flex-col gap-2 rounded-2xl shadow-md">
            <div className=" flex gap-4 items-center">
              <div className=" w-16 h-16 bg-orange-500 rounded-2xl"></div>
              <div className=" flex flex-col">
                <h1 className=" font-medium text-xl">Nourin</h1>
                <h1>Biology student</h1>
                <h1 className=" mt-[-3px]">10th class</h1>
              </div>
            </div>
            <hr className=" border-gray-400 " />
            <div className=" flex justify-between">
              <div className=" flex flex-col ">
                <h1 className=" text-violet-500">Assignment Topic</h1>
                <h1>Liear Equation</h1>
              </div>
              <div className=" flex  flex-col items-end">
                <h1 className=" text-violet-500">Due date</h1>
                <h1>Jan, 6,2023</h1>
              </div>
            </div>
            <div className=" w-full h-12 text-white bg-violet-500 shadow-md rounded-2xl flex items-center justify-center">
              <h1>View Details</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeachAssignment;
