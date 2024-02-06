import React from "react";
import StudNavbar from "./StudNavbar";
import { useLocation } from "react-router-dom";

function StudClass() {
  const location = useLocation();
  const studentDetails = location ? location.state : "nothing";

  const { id, token, username } = studentDetails;

  return (
    <div className=" w-full min-h-screen px-4 py-4 ">
      <StudNavbar id={id} token={token} username={username} />
      <div className=" flex flex-col gap-5 mt-5">
        <h1 className=" text-2xl font-medium">My Class</h1>
        <div className=" flex flex-col gap-2">
          <h1 className=" text-gray-500 text-sm">Today july 29, tuesday</h1>
          <div className=" flex flex-col gap-5">
            <div className=" flex flex-col gap-2 px-4 py-4 border shadow-md rounded-xl bg-gray-50">
              <div>
                <h1 className=" text-xl font-medium">Biology Class</h1>
                <h1 className=" text-sm text-gray-500">10:00 PM - 11:00 PM</h1>
              </div>
              <div className=" flex gap-3 items-center">
                <div className=" w-auto h-auto px-4 py-2 flex items-center justify-center rounded-xl bg-violet-500 text-white">
                  <h1>Postpond</h1>
                </div>
                <div className=" w-auto h-auto px-4 py-2 flex items-center justify-center rounded-xl bg-green-500 text-white">
                  <h1>Join</h1>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-2 px-4 py-4 border shadow-md rounded-xl bg-gray-50">
              <div>
                <h1 className=" text-xl font-medium">Biology Class</h1>
                <h1 className=" text-sm text-gray-500">10:00 PM - 11:00 PM</h1>
              </div>
              <div className=" flex gap-3 items-center">
                <div className=" w-auto h-auto px-4 py-2 flex items-center justify-center rounded-xl bg-violet-500 text-white">
                  <h1>Postpond</h1>
                </div>
                <div className=" w-auto h-auto px-4 py-2 flex items-center justify-center rounded-xl bg-green-500 text-white">
                  <h1>Join</h1>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-2 px-4 py-4 border shadow-md rounded-xl bg-gray-50">
              <div>
                <h1 className=" text-xl font-medium">Biology Class</h1>
                <h1 className=" text-sm text-gray-500">10:00 PM - 11:00 PM</h1>
              </div>
              <div className=" flex gap-3 items-center">
                <div className=" w-auto h-auto px-4 py-2 flex items-center justify-center rounded-xl bg-violet-500 text-white">
                  <h1>Postpond</h1>
                </div>
                <div className=" w-auto h-auto px-4 py-2 flex items-center justify-center rounded-xl bg-green-500 text-white">
                  <h1>Join</h1>
                </div>
              </div>
            </div>
            <hr className=" border-gray-300 my-3" />
          </div>
          <div className=" flex flex-col gap-5">
            <h1 className=" text-gray-500 text-sm">Tomorrow</h1>
            <div className=" flex flex-col gap-2 px-4 py-4 border shadow-md rounded-xl bg-gray-50">
              <div>
                <h1 className=" text-xl font-medium">Biology Class</h1>
                <h1 className=" text-sm text-gray-500">10:00 PM - 11:00 PM</h1>
              </div>
              <div className=" flex gap-3 items-center">
                <div className=" w-auto h-auto px-4 py-2 flex items-center justify-center rounded-xl bg-violet-500 text-white">
                  <h1>Postpond</h1>
                </div>
                <div className=" w-auto h-auto px-4 py-2 flex items-center justify-center rounded-xl bg-green-500 text-white">
                  <h1>Join</h1>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-2 px-4 py-4 border shadow-md rounded-xl bg-gray-50">
              <div>
                <h1 className=" text-xl font-medium">Biology Class</h1>
                <h1 className=" text-sm text-gray-500">10:00 PM - 11:00 PM</h1>
              </div>
              <div className=" flex gap-3 items-center">
                <div className=" w-auto h-auto px-4 py-2 flex items-center justify-center rounded-xl bg-violet-500 text-white">
                  <h1>Postpond</h1>
                </div>
                <div className=" w-auto h-auto px-4 py-2 flex items-center justify-center rounded-xl bg-green-500 text-white">
                  <h1>Join</h1>
                </div>
              </div>
            </div>

            <hr className=" border-gray-300 my-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudClass;
