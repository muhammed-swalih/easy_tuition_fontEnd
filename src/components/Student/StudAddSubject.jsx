import React from "react";
import StudNavbar from "./StudNavbar";
import { IoMdOpen } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
function StudAddSubject() {
  const navigate = useNavigate();
  const location = useLocation();
  const studentDetails = location ? location.state : "nothing";

  const { id, token, username } = studentDetails;

  const navToStudTeacher = () => {
    navigate("/studTeachers", {
      state: { id: id, token: token, username: username },
    });
  };
  return (
    <div className=" w-full min-h-screen px-4 py-4 ">
      <StudNavbar id={id} token={token} username={username} />
      <div className=" mt-10 flex flex-col gap-5">
        <div className=" w-full flex justify-between items-center">
          <h1 className=" text-2xl font-medium">Subjects</h1>
          <div
            onClick={navToStudTeacher}
            className=" w-auto h-10 flex items-center justify-center px-4 text-white bg-violet-500 rounded-xl"
          >
            <h1>Add subject</h1>
          </div>
        </div>
        <div className=" w-full h-auto px-4 py-4 flex flex-col gap-3 bg-gray-100 rounded-xl shadow-md">
          <div className=" w-full h-32 bg-orange-500 rounded-xl"></div>
          <div className=" flex justify-between items-end">
            <div className=" flex flex-col">
              <h1 className=" text-xl font-medium">Chemistry</h1>
              <h1 className=" text-gray-500">Preetha Miss</h1>
              <h1 className=" text-gray-500">01:00PM - 02:00PM</h1>
            </div>

            <h1 className=" text-4xl">
              <IoMdOpen />
            </h1>
          </div>
        </div>
        <div className=" w-full h-auto px-4 py-4 flex flex-col gap-3 bg-gray-100 rounded-xl shadow-md">
          <div className=" w-full h-32 bg-orange-500 rounded-xl"></div>
          <div className=" flex justify-between items-end">
            <div className=" flex flex-col">
              <h1 className=" text-xl font-medium">Chemistry</h1>
              <h1 className=" text-gray-500">Preetha Miss</h1>
              <h1 className=" text-gray-500">01:00PM - 02:00PM</h1>
            </div>

            <h1 className=" text-4xl">
              <IoMdOpen />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudAddSubject;
