import React from "react";
import Navbar from "./Navbar";
import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
function StudDetails() {
  const navigate = useNavigate();
  const navBackToMyStud = () => {
    navigate("/myStudents");
  };
  return (
    <div className=" px-4 py-4 w-full min-h-screen">
      <Navbar />
      <div className=" mt-10 w-full h-full flex flex-col gap-5">
        <div className=" flex justify-between items-center">
          <GoChevronLeft onClick={navBackToMyStud} className=" text-3xl" />
          <div></div>
          <div></div>
        </div>
        <div className=" w-full flex justify-center">
          <div className=" flex flex-col gap-3 items-center">
            <div className=" w-32 h-32  border-8 border-gray-200 bg-orange-500 rounded-2xl"></div>
            <div className="">
              <h1 className=" text-center text-xl ">Aleena Joseph</h1>
              <h1 className=" text-gray-500 text-sm">
                Biology Student - 8th Class
              </h1>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-2 mt-10 bg-gray-100 px-4 py-4 rounded-xl shadow-md">
          <h1 className=" text-lg font-medium">Personal Details</h1>
          <div className="">
            <div className=" flex gap-2 items-center">
              <h1 className=" flex flex-shrink-0">Gender:</h1>
              <h1>Female</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <h1 className=" flex flex-shrink-0">Age:</h1>
              <h1>18</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <h1 className=" flex flex-shrink-0">Primary language:</h1>
              <h1>Malayalam</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <h1 className=" flex flex-shrink-0">Seconday language:</h1>
              <h1>English</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <h1 className=" flex flex-shrink-0">State:</h1>
              <h1>Kerala</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <h1 className=" flex flex-shrink-0">Time Slot:</h1>
              <h1>01:00 PM- 02:00 PM</h1>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-2 bg-gray-200 px-4 py-4 rounded-xl shadow-md">
          <h1 className=" text-lg font-medium">Easy Tuition Academy</h1>
          <div className="">
            <div className=" flex gap-2 items-center">
              <h1 className=" flex flex-shrink-0">Classes Completed:</h1>
              <h1>30</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <h1 className=" flex flex-shrink-0">Attendance:</h1>
              <h1>85%</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <h1 className=" flex flex-shrink-0">Absence:</h1>
              <h1>2</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <h1 className=" flex flex-shrink-0">Class postponed:</h1>
              <h1>4</h1>
            </div>
            <div className=" flex gap-2 items-center">
              <h1 className=" flex flex-shrink-0">Assignments Assigned:</h1>
              <h1>3</h1>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-2 bg-gray-300 px-4 py-4 rounded-xl shadow-md">
          <h1 className=" text-lg font-medium">School</h1>
          <div className="">
            <div className=" flex flex-col">
              <h1 className=" flex flex-shrink-0">
                Mes higher secondary school
              </h1>
              <h1>Mannarkad, palakkd, india</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudDetails;
