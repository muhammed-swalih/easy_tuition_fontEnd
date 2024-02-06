import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { RiAppsLine } from "react-icons/ri";
import { GoBook } from "react-icons/go";
import { PiStudentLight } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";
import { MdOutlinePayments } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { IoLaptopOutline } from "react-icons/io5";
import { GiBookshelf } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";

import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const navigate = useNavigate();
  const navToChats = () => {
    navigate("/teachChats");
  };

  const navToHome = () => {
    navigate("/teachDashboard");
  };

  const navToMyClass = () => {
    navigate("/teachMyClass");
  };

  const navToMyStud = () => {
    navigate("/myStudents");
  };

  const navToWebinar = () => {
    navigate("/TeachWebinar");
  };

  const navToAssignment = () => {
    navigate("/teachAssignment");
  };

  const navToProfile = () => {
    navigate("/teachProfile");
  };

  const navToStudy = () => {
    navigate("/studyMeterial");
  };

  const navToLogOut = () => {
    navigate("/");
  };

  return (
    <div>
      <div className=" w-full h-auto py-2 px-2 bg-gray-100 flex justify-between items-center rounded-xl">
        <IoIosMenu onClick={toggleSidebar} className=" text-4xl " />
        <div className=" flex gap-2 items-center ">
          <FaRegBell className=" text-lg" />
          <div
            onClick={navToProfile}
            className=" w-8 h-8 rounded-full bg-orange-400"
          ></div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-52 h-screen bg-violet-500 z-50 transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "" : "-translate-x-full"
        }`}
      >
        <div className="px-3 py-3 pt-10 flex justify-start items-start h-full text-white">
          <div className=" flex flex-col gap-10">
            <div className="w-full flex justify-end">
              <RxCross1
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className=" text-white text-2xl"
              />
            </div>
            <div className=" flex gap-3 items-center">
              <div className=" w-12 h-12 bg-black rounded-full ">
                <img
                  className=" w-full h-full object-cover rounded-full"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/41f700cc-351c-4e48-b542-29b266ebbf81/dfzuo8t-dc18578c-c23c-45ab-86cd-570b282d075b.png/v1/fill/w_1280,h_1920,q_80,strp/chinese_girl_in_traditional_chinese_dress_by_ai_mademasterpieces_dfzuo8t-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzQxZjcwMGNjLTM1MWMtNGU0OC1iNTQyLTI5YjI2NmViYmY4MVwvZGZ6dW84dC1kYzE4NTc4Yy1jMjNjLTQ1YWItODZjZC01NzBiMjgyZDA3NWIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kEDHyBXswYUdlJlt0pU1rjNCgMwMQT6B9x1om2o-p78"
                  alt=""
                />
              </div>
              <h1 className=" text-2xl">Nishila</h1>
            </div>
            <div className=" ">
              <h1 className=" text-2xl font-medium">Menu</h1>
              <hr className=" w-full border-white" />
            </div>
            <ul className=" list-none flex flex-col gap-4 ">
              <div onClick={navToHome} className=" flex gap-2 items-center">
                <h1>
                  <RiAppsLine className=" text-2xl" />
                </h1>
                <h1 className=" text-xl">Home</h1>
              </div>
              <div onClick={navToMyClass} className=" flex gap-2 items-center">
                <h1>
                  <GoBook className=" text-2xl" />
                </h1>
                <h1 className=" text-xl">My Class</h1>
              </div>
              <div onClick={navToMyStud} className=" flex gap-2 items-center">
                <h1>
                  <PiStudentLight className=" text-2xl" />
                </h1>
                <h1 className=" text-xl">Students</h1>
              </div>
              <div
                onClick={navToAssignment}
                className=" flex gap-2 items-center"
              >
                <h1>
                  <GrNotes className=" text-2xl" />
                </h1>
                <h1 className=" text-xl">Assignments</h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1>
                  <MdOutlinePayments className=" text-2xl" />
                </h1>
                <h1 className=" text-xl">Payments</h1>
              </div>
            </ul>
            <div className=" flex flex-col gap-5">
              <div>
                <h1 className=" text-2xl font-medium">Other</h1>
                <hr className=" w-full border-white" />
              </div>
              <div className="flex flex-col gap-4">
                <div onClick={navToChats} className=" flex gap-2 items-center">
                  <h1>
                    <LuMessagesSquare className=" text-2xl" />
                  </h1>
                  <h1 className=" text-xl">Messages</h1>
                </div>
                <div
                  onClick={navToWebinar}
                  className=" flex gap-2 items-center"
                >
                  <h1>
                    <IoLaptopOutline className=" text-2xl" />
                  </h1>
                  <h1 className=" text-xl">Webinar</h1>
                </div>
                <div onClick={navToStudy} className=" flex gap-2 items-center">
                  <h1>
                    <GiBookshelf className=" text-2xl" />
                  </h1>
                  <h1 className=" text-xl">Study metirial</h1>
                </div>
              </div>
            </div>
            <div onClick={navToLogOut} className=" flex gap-3 items-center">
              <h1>
                <CiLogout className=" text-2xl" />
              </h1>
              <h1 className=" text-2xl">Logout</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
