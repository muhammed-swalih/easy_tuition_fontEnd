import React from "react";
import Navbar from "./Navbar";
import { BiSolidEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function TeachStudyMeterial() {
  const navigate = useNavigate();

  const navToCreateStudy = () => {
    navigate("/createMeterial");
  };
  return (
    <div className=" w-full min-h-screen px-4 py-4">
      <Navbar />
      <div className=" mt-10 flex flex-col gap-5">
        <div className=" w-full flex justify-between items-center">
          <h1 className=" text-2xl font-medium">Study Material</h1>
          <div
            onClick={navToCreateStudy}
            className=" w-32 h-12 bg-violet-500 rounded-2xl flex text-white items-center justify-center"
          >
            <h1>Create</h1>
          </div>
        </div>
        <div className=" w-full h-auto px-4 py-4 flex flex-col gap-3 bg-gray-100 rounded-xl shadow-md">
          <div className=" w-full h-32 bg-orange-500 rounded-xl"></div>
          <div className=" flex justify-between gap-5 w-full ">
            <h1 className=" text-2xl">Linear Equation</h1>
            <div className=" flex gap-2 items-center text-2xl">
              <h1 className=" text-green-700">
                <BiSolidEdit />
              </h1>
              <h1 className=" text-red-500">
                <AiOutlineDelete />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeachStudyMeterial;
