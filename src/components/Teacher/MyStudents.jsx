import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
function MyStudents() {
  const navigate = useNavigate();

  const navToDetails = () => {
    navigate("/studDetails");
  };
  return (
    <div className=" w-full min-h-screen px-4 py-4">
      <Navbar />
      <div className=" mt-10 flex flex-col gap-5">
        <h1 className=" text-2xl font-medium">My students</h1>
        <div className=" flex gap-3 items-center">
          <div className=" w-1/2 py-3 rounded-xl bg-violet-500 text-white px-3">
            <div className="">
              <h1 className="">Total students</h1>
              <h1>4</h1>
            </div>
          </div>
          <div className=" w-1/2 py-3 rounded-xl  text-black bg-gray-100  shadow-md px-3">
            <div className="">
              <h1 className="">Total students</h1>
              <h1>4</h1>
            </div>
          </div>
        </div>
        <div className=" px-3 py-3 w-full flex flex-col gap-3 shadow-md bg-gray-100 rounded-xl">
          <div className=" flex gap-4 items-center ">
            <div className=" w-16 h-16 bg-orange-500 rounded-xl"></div>
            <div className="flex flex-col ">
              <h1 className=" text-lg font-medium">Nourin</h1>
              <div className=" text-gray-500">
                <h1>Biology student</h1>
                <h1 className=" mt-[-4px]">10th Class </h1>
              </div>
            </div>
          </div>
          <hr className=" border-gray-300" />
          <div className=" flex justify-between gap-1 items-center">
            <div className=" flex flex-col">
              <h1>Time Slot</h1>
              <h1>01:00 PM - 02:00 PM</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <div className=" h-12 w-[1px] bg-gray-300"></div>
              <div className=" flex flex-col">
                <h1>Attendance</h1>
                <h1>85%</h1>
              </div>
            </div>
            <div className=" flex gap-2 items-center">
              <div className=" h-12 w-[1px] bg-gray-300"></div>
              <div className=" flex flex-col">
                <h1>Assignments</h1>
                <h1>2</h1>
              </div>
            </div>
          </div>
          <div
            onClick={navToDetails}
            className=" py-2 px-2 rounded-xl flex items-center justify-center bg-violet-500 text-white"
          >
            <h1>View details</h1>
          </div>
        </div>
        <div className=" px-3 py-3 w-full flex flex-col gap-3 shadow-md bg-gray-100 rounded-xl">
          <div className=" flex gap-4 items-center ">
            <div className=" w-16 h-16 bg-orange-500 rounded-xl"></div>
            <div className="flex flex-col ">
              <h1 className=" text-lg font-medium">Nourin</h1>
              <div className=" text-gray-500">
                <h1>Biology student</h1>
                <h1 className=" mt-[-4px]">10th Class </h1>
              </div>
            </div>
          </div>
          <hr className=" border-gray-300" />
          <div className=" flex justify-between gap-1 items-center">
            <div className=" flex flex-col">
              <h1>Time Slot</h1>
              <h1>01:00 PM - 02:00 PM</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <div className=" h-12 w-[1px] bg-gray-300"></div>
              <div className=" flex flex-col">
                <h1>Attendance</h1>
                <h1>85%</h1>
              </div>
            </div>
            <div className=" flex gap-2 items-center">
              <div className=" h-12 w-[1px] bg-gray-300"></div>
              <div className=" flex flex-col">
                <h1>Assignments</h1>
                <h1>2</h1>
              </div>
            </div>
          </div>
          <div
            onClick={navToDetails}
            className=" py-2 px-2 rounded-xl flex items-center justify-center bg-violet-500 text-white"
          >
            <h1>View details</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyStudents;
