import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
function TeachWebinar() {
  const navigate = useNavigate();

  const navToHostWebinar = () => {
    navigate("/hostWebinar");
  };
  return (
    <div className=" px-4 py-4 w-full min-h-screen">
      <Navbar />
      <div className=" mt-10 flex flex-col gap-10">
        <div className=" w-full flex justify-between items-center">
          <h1 className=" text-2xl font-medium">Webinar</h1>
          <div
            onClick={navToHostWebinar}
            className=" w-28 h-10 flex items-center justify-center text-white bg-violet-500 rounded-xl"
          >
            <h1>Host</h1>
          </div>
        </div>
        <div className=" w-full h-auto px-4 py-4 flex flex-col gap-3 bg-gray-100 rounded-xl shadow-md">
          <div className=" w-full h-32 bg-orange-500 rounded-xl"></div>
          <div className=" flex justify-between items-end">
            <div className=" flex flex-col">
              <h1 className=" text-xl font-medium">Sakshphere idea’s</h1>
              <h1 className=" text-gray-500">Scheduled on : 25-10-2023</h1>
              <h1 className=" text-gray-500">Students Joined : 50</h1>
            </div>
            <div className=" w-28 h-10 rounded-xl flex items-center justify-center bg-violet-500 text-white">
              <h1>Details</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeachWebinar;
