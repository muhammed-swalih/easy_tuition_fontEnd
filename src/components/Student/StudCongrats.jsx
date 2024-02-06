import React, { useEffect, useState } from "react";
import StudNavbar from "./StudNavbar";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function StudCongrats() {
  const location = useLocation();

  const studentDetails = location ? location.state : "nothing";

  const { id, token, username } = studentDetails;

  const navigate = useNavigate();

  const navToStudDashboard = () => {
    navigate("/studDashboard", {
      state: { id: id, token: token, username: username },
    });
  };

  useEffect(() => {
    console.log(studentDetails);
  }, []);
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" w-4/5 h-5/6  flex flex-col gap-10">
        <div className=" flex flex-col gap-1 items-center">
          <h1 className=" text-4xl text-blue-500 tracking-wide">
            Congratulations
          </h1>
          <h1 className=" text-sm text-center">
            Thank you for joining our education platform as a Student! We're
            excited to have you as part of our educational community.
          </h1>
        </div>
        <div className=" flex justify-center items-center w-full">
          <div className=" w-32 h-32 bg-black"></div>
        </div>
        <div
          onClick={navToStudDashboard}
          className=" w-full h-12 bg-blue-500 rounded-xl flex items-center justify-center"
        >
          <h1 className=" text-white text-md">Continue</h1>
        </div>
      </div>
    </div>
  );
}

export default StudCongrats;
