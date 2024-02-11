import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
function StudReqDetails() {
  const location = useLocation();
  const teacherDetails = location ? location.state : "nothing";
  const { id, token, username, reqDetails } = teacherDetails;

  const createClass = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/teachReq/acceptClass",
        {
          reqId: reqDetails._id,
          teacher: id,
          student: reqDetails.studentId._id,
          studentPersonal: reqDetails.studPersonal._id,
          studentSchool: reqDetails.studSchool._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        alert("you are accepted the student request");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    console.log(teacherDetails);
  }, []);
  return (
    <div className="px-4 py-4 w-full min-h-screen">
      <Navbar id={id} token={token} username={username} />
      <div className=" w-full flex justify-center ">
        <div className=" flex flex-col gap-4 items-center">
          <div className=" w-40 h-40 bg-orange-500 rounded-3xl border-8 border-200">
            <img
              className=" w-full h-full object-cover rounded-2xl"
              src={reqDetails.studPersonal.picUrl}
              alt=""
            />
          </div>
          <div className=" flex flex-col items-center">
            <h1 className=" text-4xl">{reqDetails.studentId.username}</h1>
            <div className=" flex gap-1 items-center text-gray-500 text-sm">
              <h1>{reqDetails.subjects}</h1>
              <h1>Student</h1>
              <h1>-</h1>
              <h1>{reqDetails.cls}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10 flex flex-col gap-5">
        <div className=" w-full h-auto px-5 py-5 bg-gray-100 drop-shadow-lg flex flex-col gap-3">
          <h1 className=" text-xl font-semibold">Personal Details</h1>
          <div>
            <div className=" flex items-center gap-1">
              <h1>Gender :</h1>
              <h1>{reqDetails.studPersonal.gender}</h1>
            </div>
            <div className=" flex items-center gap-1">
              <h1>Primary Language :</h1>
              <h1>{reqDetails.studPersonal.primaryLang}</h1>
            </div>
            <div className=" flex items-center gap-1">
              <h1>Secondary Language :</h1>
              <h1>{reqDetails.studPersonal.secondaryLang}</h1>
            </div>
            <div className=" flex items-center gap-1">
              <h1>State :</h1>
              <h1>{reqDetails.studPersonal.state}</h1>
            </div>
            <div className=" flex items-center gap-1">
              <h1>Time Slot :</h1>
              <h1>{reqDetails.time}</h1>
            </div>
          </div>
        </div>
        <div className=" w-full h-auto px-5 py-5 bg-gray-100 drop-shadow-lg flex flex-col gap-3">
          <h1 className=" text-xl font-semibold">School Details</h1>
          <div>
            <h1>{reqDetails.studSchool.schoolName}</h1>
            <h1>{reqDetails.studSchool.schoolAdrs}</h1>
          </div>
        </div>
        <div className=" flex w-full gap-5 justify-between">
          <div
            onClick={createClass}
            className=" w-1/2 py-2 flex items-center justify-center bg-green-500 drop-shadow-lg rounded-xl"
          >
            <h1 className=" text-white font-medium text-lg">Accept</h1>
          </div>
          <div className=" w-1/2 py-2 flex items-center justify-center bg-red-400 drop-shadow-lg rounded-xl">
            <h1 className=" text-white font-medium text-lg">Reject</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudReqDetails;
