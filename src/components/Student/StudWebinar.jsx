import React from "react";
import StudNavbar from "./StudNavbar";
import { useLocation } from "react-router-dom";
function StudWebinar() {
  const location = useLocation();
  const studentDetails = location ? location.state : "nothing";

  const { id, token, username } = studentDetails;
  return (
    <div className=" w-full min-h-screen px-4 py-4">
      <StudNavbar id={id} token={token} username={username} />
      <div className=" mt-10 flex flex-col gap-5">
        <div className=" w-full flex justify-between items-center">
          <h1 className=" text-2xl font-medium">Webinar</h1>
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
              <h1>Enroll now</h1>
            </div>
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
              <h1>Enroll now</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudWebinar;
