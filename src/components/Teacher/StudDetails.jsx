import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { GoChevronLeft } from "react-icons/go";
import { useNavigate, useLocation } from "react-router-dom";
function StudDetails() {
  const navigate = useNavigate();

  const location = useLocation();
  const teacherDetails = location ? location.state : "nothing";
  const { id, token, username, req } = teacherDetails;

  const navBackToMyStud = () => {
    navigate("/myStudents", {
      state: { id: id, token: token, username: username },
    });
  };

  useEffect(() => {
    console.log(teacherDetails);
  }, []);
  return (
    <div className=" px-4 py-4 w-full min-h-screen">
      <Navbar id={id} token={token} username={username} />
      <div className=" mt-10 w-full h-full flex flex-col gap-5">
        <div className=" flex justify-between items-center">
          <GoChevronLeft onClick={navBackToMyStud} className=" text-3xl" />
          <div></div>
          <div></div>
        </div>
        <div className=" w-full flex justify-center">
          <div className=" flex flex-col gap-3 items-center">
            <div className=" w-32 h-32  border-8 border-gray-200 bg-orange-500 rounded-3xl">
              <img
                className=" w-full h-full object-cover rounded-2xl"
                src={req.studPersonal.picUrl}
                alt=""
              />
            </div>
            <div className="">
              <h1 className=" text-center text-xl ">
                {req.studentId.username}
              </h1>
              <div className=" flex items-center gap-1">
                <h1>{req.subjects}</h1>
                <h1>student</h1>
                <h1>-</h1>
                <h1>{req.cls}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-2 mt-10 bg-gray-100 px-4 py-4 rounded-xl shadow-md">
          <h1 className=" text-lg font-medium">Personal Details</h1>
          <div className="">
            <div className=" flex gap-2 items-center">
              <h1 className=" flex flex-shrink-0">Gender:</h1>
              <h1>{req.studPersonal.gender}</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <h1 className=" flex flex-shrink-0">Primary language:</h1>
              <h1>{req.studPersonal.primaryLang}</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <h1 className=" flex flex-shrink-0">Seconday language:</h1>
              <h1>{req.studPersonal.secondaryLang}</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <h1 className=" flex flex-shrink-0">State:</h1>
              <h1>{req.studPersonal.state}</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <h1 className=" flex flex-shrink-0">Time Slot:</h1>
              <h1>{req.time}</h1>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-2 bg-gray-100 px-4 py-4 rounded-xl shadow-md">
          <h1 className=" text-lg font-medium">School</h1>
          <div className="">
            <div className=" flex flex-col gap-3">
              <div>
                <h1 className=" flex flex-shrink-0">
                  {req.studSchool.schoolName}
                </h1>
                <h1>{req.studSchool.schoolAdrs}</h1>
              </div>
              <div className=" w-32 h-40  rounded-xl">
                <img
                  className=" w-full h-full object-cover rounded-xl"
                  src={req.studSchool.picUrl}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudDetails;
