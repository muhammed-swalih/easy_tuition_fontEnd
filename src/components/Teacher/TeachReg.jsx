import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function TeachReg() {
  const location = useLocation();

  const teacherDetails = location ? location.state : "nothing";

  const { id, token, username } = teacherDetails;

  const navigate = useNavigate();
  const navToDash = () => {
    navigate("/teachDashboard", {
      state: { id: id, token: token, username: username },
    });
  };
  return (
    <div className=" w-full min-h-screen px-6 py-10 ">
      <div className=" w-full h-full flex flex-col gap-5 justify-start">
        <div className=" flex flex-col ">
          <h1 className=" text-2xl font-medium text-red-500">
            We felt bad! :(
          </h1>
          <h1 className=" text-sm text-gray-500">
            We regret to inform you that your recent registration request on
            Easy Tutions has been rejected
          </h1>
          <div className=" w-full h-64 bg-black my-3 rounded-2xl"></div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <h1 className=" text-xl">Reason for Rejection</h1>
          <h1 className=" text-gray-500 text-sm">
            We appreciate your understanding and the effort you put into your
            registration. While this application may not have been successful,
            it does not diminish your qualifications and dedication as an
            educator.
          </h1>
        </div>
        <div className="w-full flex flex-col gap-3">
          <h1 className=" text-xl">Thank you!</h1>
          <h1 className=" text-gray-500 text-sm">
            We appreciate your understanding and the effort you put into your
            registration. While this application may not have been successful,
            it does not diminish your qualifications and dedication as an
            educator. We wish you all the best in your teaching endeavors and
            hope that your journey in education continues to be rewarding.
          </h1>
        </div>

        <div
          onClick={navToDash}
          className=" w-full rounded-xl h-12 bg-violet-500 flex items-center justify-center"
        >
          <h1 className=" text-white text-lg">Sign in</h1>
        </div>
      </div>
    </div>
  );
}

export default TeachReg;
