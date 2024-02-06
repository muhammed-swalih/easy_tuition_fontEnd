import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function StudOTP() {
  const location = useLocation();

  const studentDetails = location ? location.state : "nothing";

  const { token, id, username } = studentDetails;
  const navigate = useNavigate();

  const navToStudPersonal = () => {
    navigate("/studPersonal", {
      state: { token: token, id: id, username: username },
    });
  };
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div className=" w-full h-full flex flex-col gap-4 items-center justify-center px-6">
        <div className=" w-32 h-32 bg-black"></div>
        <h1 className=" text-2xl font-semibold tracking-wide">
          OTP Verification
        </h1>
        <div className="flex flex-col items-center">
          <h1 className=" text-xs text-gray-400">
            enter the verification code we send to
          </h1>
          <h1 className="text-xl">+91 7736447760</h1>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <h1 className=" text-gray-400 text-xs">Type 4 digits OTP number </h1>
          <div className=" flex gap-2 items-center">
            <input
              className=" w-14 h-14 border border-1 border-black rounded-xl"
              type="text"
            />
            <input
              className=" w-14 h-14 border border-1 border-black rounded-xl"
              type="text"
            />
            <input
              className=" w-14 h-14 border border-1 border-black rounded-xl"
              type="text"
            />
            <input
              className=" w-14 h-14 border border-1 border-black rounded-xl"
              type="text"
            />
          </div>
          <h1 className=" text-xs text-gray-400">
            Don't you receive the OTP?{" "}
            <span className=" text-blue-500 text-xs">Resend OTP</span>
          </h1>
        </div>
        <div
          onClick={navToStudPersonal}
          className=" w-full rounded-xl h-12 bg-blue-500 flex items-center justify-center"
        >
          <h1 className=" text-white text-lg">Sign in</h1>
        </div>
      </div>
    </div>
  );
}

export default StudOTP;
