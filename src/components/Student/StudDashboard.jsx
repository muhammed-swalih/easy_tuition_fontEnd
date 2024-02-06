import React, { useEffect } from "react";
import StudNavbar from "./StudNavbar";
import { IoMdOpen } from "react-icons/io";
import { useLocation } from "react-router-dom";

function StudDashboard() {
  const location = useLocation();
  const studentDetails = location ? location.state : "nothing";

  const { token, id, username } = studentDetails;

  useEffect(() => {
    console.log(studentDetails);
  }, []);

  return (
    <div className=" w-full min-h-screen py-4 px-4">
      <StudNavbar id={id} token={token} username={username} />
      <div className=" flex flex-col gap-5 justify-center">
        <div className=" w-full h-auto bg-violet-500 rounded-xl px-5 py-10 drop-shadow-xl">
          <div className=" flex flex-col gap-5">
            <div className=" flex flex-col gap-1">
              <div className=" flex gap-2 items-center text-white">
                <h1 className=" text-2xl">Hello,</h1>
                <h1 className=" text-2xl font-light">{username} 👋</h1>
              </div>
              <div>
                <h1 className=" text-sm text-white">
                  Nice to have you back, what an exiting day! Get ready and
                  continue to earn new, Have an a nice day
                </h1>
                <hr className=" mt-3 border border-1" />
              </div>
            </div>
            <div className=" flex flex-col gap-4 text-white">
              <div className=" flex flex-col gap-2">
                <div className=" flex flex-col gap-3">
                  <div className=" flex gap-3 items-center">
                    <div className=" w-10 h-10 rounded-full bg-orange-200"></div>
                    <div className=" flex flex-col  ">
                      <h1>Attendance</h1>
                      <h1 className=" mt-[-4px]">2/5</h1>
                    </div>
                  </div>
                </div>
                <hr className=" border border-1" />
              </div>
              <div className=" flex flex-col gap-2">
                <div className=" flex flex-col gap-3">
                  <div className=" flex gap-3 items-center">
                    <div className=" w-10 h-10 rounded-full bg-orange-200"></div>
                    <div className=" flex flex-col  ">
                      <h1>Assignments</h1>
                      <h1 className=" mt-[-4px]">2/5</h1>
                    </div>
                  </div>
                </div>
                <hr className=" border border-1" />
              </div>
              <div className=" flex flex-col gap-2">
                <div className=" flex flex-col gap-3">
                  <div className=" flex gap-3 items-center">
                    <div className=" w-10 h-10 rounded-full bg-orange-200"></div>
                    <div className=" flex flex-col  ">
                      <h1>Subjects</h1>
                      <h1 className=" mt-[-4px]">2/5</h1>
                    </div>
                  </div>
                </div>
                <hr className=" border border-1" />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className=" text-2xl">Today Class</h1>
          <div className=" w-full rounded-xl bg-slate-100 h-auto flex flex-col gap-3 px-4 py-6 drop-shadow-md">
            <div className="w-full px-4 py-4 bg-white rounded-xl drop-shadow-md flex items-center justify-between">
              <div className=" flex gap-4 items-center w-full">
                <div className=" w-14 h-14 bg-orange-500 rounded-xl"></div>
                <div className=" flex flex-col">
                  <h1 className=" ">Biology Class</h1>
                  <h1 className=" text-red-400">01:00PM to 02:00PM</h1>
                </div>
              </div>
              <div className=" ">
                <h1 className=" text-4xl">
                  <IoMdOpen />
                </h1>
              </div>
            </div>
            <div className="w-full px-4 py-4 bg-white rounded-xl drop-shadow-md flex items-center justify-between">
              <div className=" flex gap-4 items-center w-full">
                <div className=" w-14 h-14 bg-orange-500 rounded-xl"></div>
                <div className=" flex flex-col">
                  <h1 className=" ">Biology Class</h1>
                  <h1 className=" text-red-400">01:00PM to 02:00PM</h1>
                </div>
              </div>
              <div className=" ">
                <h1 className=" text-4xl">
                  <IoMdOpen />
                </h1>
              </div>
            </div>
            <div className="w-full px-4 py-4 bg-white rounded-xl drop-shadow-md flex items-center justify-between">
              <div className=" flex gap-4 items-center w-full">
                <div className=" w-14 h-14 bg-orange-500 rounded-xl"></div>
                <div className=" flex flex-col">
                  <h1 className=" ">Biology Class</h1>
                  <h1 className=" text-red-400">01:00PM to 02:00PM</h1>
                </div>
              </div>
              <div className=" ">
                <h1 className=" text-4xl">
                  <IoMdOpen />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudDashboard;
