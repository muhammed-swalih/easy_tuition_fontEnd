import React, { useEffect, useState } from "react";

import { IoMdOpen } from "react-icons/io";
import { GiSandsOfTime } from "react-icons/gi";
import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function TeachDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const teacherDetails = location ? location.state : "nothing";
  const [checkExist, setCheckExist] = useState([]);
  const [alreadyInClass, setAlreadyInClass] = useState([]);
  const [reqIdOnly, setReqIdOnly] = useState([]);

  const { id, token, username } = teacherDetails;
  const [req, setReq] = useState([]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getRequestNotification = async () => {
    try {
      const response = await axios.get("http://localhost:3005/teachReq", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log(response.data);
        setReq(response.data);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const navToReqDetails = (reqDetails) => {
    navigate("/studReqDetails", {
      state: {
        id: id,
        token: token,
        username: username,
        reqDetails: reqDetails,
      },
    });
  };

  useEffect(() => {
    console.log(teacherDetails);
    getRequestNotification();
  }, []);
  return (
    <div className=" w-full px-4 py-4 min-h-screen">
      <div className=" flex flex-col gap-7">
        <div className=" flex flex-col gap-2">
          <Navbar id={id} token={token} username={username} />
          <div className=" w-full h-32 text-white bg-violet-500 rounded-xl px-3 py-3">
            <div className=" flex flex-col gap-2">
              <div className=" flex gap-2 items-end">
                <h1 className=" text-3xl font-medium">Hello,</h1>
                <h1 className=" text-3xl font-light">{username} 👋</h1>
              </div>
              <h1 className=" text-sm ">
                Nice to have you back, what an exiting day! Get ready and
                continue teaching, Have an a nice day
              </h1>
            </div>
          </div>
          <div className=" w-full h-auto py-3 px-3 flex flex-col gap-2 bg-gray-100 rounded-xl shadow-md">
            <div className=" w-full h-auto py-2 px-2 bg-white rounded-xl shadow flex items-center gap-3 justify-between">
              <div className=" flex gap-3 items-center">
                <div className=" w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center">
                  <img
                    className=" w-full h-full object-cover rounded-xl"
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/41f700cc-351c-4e48-b542-29b266ebbf81/dfzuoa7-7edfa2eb-cd65-4c20-b106-b6d1d0847f20.png/v1/fill/w_1280,h_1920,q_80,strp/chinese_girl_in_traditional_chinese_dress_by_ai_mademasterpieces_dfzuoa7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzQxZjcwMGNjLTM1MWMtNGU0OC1iNTQyLTI5YjI2NmViYmY4MVwvZGZ6dW9hNy03ZWRmYTJlYi1jZDY1LTRjMjAtYjEwNi1iNmQxZDA4NDdmMjAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.G5QUqG5fqMpSOq1iZXvXNFGGCck8NLYun45TdxmN3CY"
                    alt=""
                  />
                </div>
                <div className=" flex flex-col ">
                  <h1 className=" text-lg font-medium">Nourin</h1>
                  <h1 className=" text-gray-400 mt-[px] text-sm">
                    Biology class
                  </h1>
                  <h1 className=" text-red-400 mt-[-1px] text-sm">
                    01:00 PM : 02:00 PM
                  </h1>
                </div>
              </div>
              <div className=" px-3 py-3  rounded-xl flex items-center bg-green-500 justify-center">
                <IoMdOpen className=" text-2xl text-white" />
              </div>
            </div>
            <div className=" w-full h-auto py-2 px-2 bg-white rounded-xl shadow  flex items-center gap-3 justify-between">
              <div className=" flex gap-3 items-center">
                <div className=" w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center">
                  <img
                    className=" w-full h-full object-cover rounded-xl"
                    src="https://www.houseofwellness.com.au/wp-content/uploads/2023/01/vanilla-girl-make-up.jpg"
                    alt=""
                  />
                </div>
                <div className=" flex flex-col ">
                  <h1 className=" text-lg font-medium">Teresa Parwin</h1>
                  <h1 className=" text-gray-400 mt-[px] text-sm">
                    Biology class
                  </h1>
                  <h1 className=" text-red-400 mt-[-1px] text-sm">
                    01:00 PM : 02:00 PM
                  </h1>
                </div>
              </div>
              <div className=" px-3 py-3  rounded-xl flex items-center justify-center bg-violet-400">
                <GiSandsOfTime className=" text-2xl text-white" />
              </div>
            </div>
            <div className=" w-full h-auto py-2 px-2 bg-white rounded-xl shadow flex items-center gap-3 justify-between">
              <div className=" flex gap-3 items-center">
                <div className=" w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center">
                  <img
                    className=" w-full h-full object-cover rounded-xl"
                    src="https://pics.craiyon.com/2023-06-12/3d5f09e2a8c244af9c1085c3e6f9de42.webp"
                    alt=""
                  />
                </div>
                <div className=" flex flex-col ">
                  <h1 className=" text-lg font-medium">Aliya</h1>
                  <h1 className=" text-gray-400 mt-[px] text-sm">
                    Biology class
                  </h1>
                  <h1 className=" text-red-400 mt-[-1px] text-sm">
                    01:00 PM : 02:00 PM
                  </h1>
                </div>
              </div>
              <div className=" px-3 py-3  rounded-xl flex items-center justify-center bg-violet-400">
                <GiSandsOfTime className=" text-2xl text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-auto py-3 px-3 bg-gray-100 shadow-md rounded-xl flex flex-col gap-3">
          <h1 className=" text-2xl font-medium ">Notifications</h1>

          {req.map((items, index) => {
            return (
              <div key={index} className=" flex flex-col gap-2">
                <div className=" w-full h-auto py-5 px-5 bg-white rounded-xl shadow flex justify-between items-center">
                  <div className=" flex gap-5 items-center">
                    <div className=" flex flex-col">
                      <div className=" flex items-center gap-1">
                        <h1>You have a new request</h1>
                        <h1>from</h1>
                        <h1 className=" text-lg font-semibold text-violet-600">
                          {items.studentId.username}
                        </h1>
                      </div>

                      <h1 className=" text-sm text-gray-400">1 min</h1>
                      <h1
                        onClick={() => {
                          navToReqDetails(items);
                        }}
                        className=" text-blue-500 underline "
                      >
                        View Details
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TeachDashboard;
