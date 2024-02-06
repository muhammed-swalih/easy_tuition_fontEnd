import React from "react";
import StudNavbar from "./StudNavbar";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function StudChat() {
  const location = useLocation();
  const studentDetails = location ? location.state : "nothing";

  const { id, token, username } = studentDetails;
  const navigate = useNavigate();

  const navToMessages = () => {
    navigate("/studMessages");
  };
  return (
    <div className=" w-full min-h-screen py-4 px-4">
      <StudNavbar id={id} token={token} username={username} />

      <div className=" flex flex-col gap-3">
        <div className=" flex flex-col ">
          <h1 className=" text-2xl font-medium">Chats</h1>
        </div>
        <div onClick={navToMessages} className=" flex flex-col gap-3">
          <div className=" w-full h-auto py-3 px-3 flex justify-between items-center border rounded-xl shadow-md bg-gray-50">
            <div className=" flex gap-4 items-center">
              <div className=" w-16 h-16 bg-orange-500 rounded-xl"></div>
              <div className=" flex flex-col justify-center">
                <div className=" flex flex-col">
                  <h1 className=" text-lg font-medium">Aleena</h1>
                  <h1 className=" mt-[-5px] text-gray-500">
                    Chemistry Teacher
                  </h1>
                </div>
                <h1 className=" text-gray-500">the problem is </h1>
              </div>
            </div>
            <h1 className=" text-sm text-violet-500">just now</h1>
          </div>
          <div className=" w-full h-auto py-3 px-3 flex justify-between items-center border rounded-xl shadow-md bg-gray-50">
            <div className=" flex gap-4 items-center">
              <div className=" w-16 h-16 bg-orange-500 rounded-xl"></div>
              <div className=" flex flex-col justify-center">
                <div className=" flex flex-col">
                  <h1 className=" text-lg font-medium">Aleena</h1>
                  <h1 className=" mt-[-5px] text-gray-500">
                    Chemistry Teacher
                  </h1>
                </div>
                <h1 className=" text-gray-500">the problem is </h1>
              </div>
            </div>
            <h1 className=" text-sm text-violet-500">just now</h1>
          </div>
          <div className=" w-full h-auto py-3 px-3 flex justify-between items-center border rounded-xl shadow-md bg-gray-50">
            <div className=" flex gap-4 items-center">
              <div className=" w-16 h-16 bg-orange-500 rounded-xl"></div>
              <div className=" flex flex-col justify-center">
                <div className=" flex flex-col">
                  <h1 className=" text-lg font-medium">Aleena</h1>
                  <h1 className=" mt-[-5px] text-gray-500">
                    Chemistry Teacher
                  </h1>
                </div>
                <h1 className=" text-gray-500">the problem is </h1>
              </div>
            </div>
            <h1 className=" text-sm text-violet-500">just now</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudChat;
