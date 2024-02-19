import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
function MyStudents() {
  const location = useLocation();
  const teacherDetails = location ? location.state : "nothing";

  const { id, token, username } = teacherDetails;
  const [myStudents, setMyStudents] = useState([]);
  const navigate = useNavigate();

  const getMyStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3005/teachReq/acceptedClassesFromStudent",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        setMyStudents(response.data);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const navToDetails = (req) => {
    navigate("/studDetails", {
      state: {
        id: id,
        token: token,
        username: username,
        req: req,
      },
    });
  };

  useEffect(() => {
    getMyStudents();
  }, []);
  return (
    <div className=" w-full min-h-screen px-4 py-4">
      <Navbar id={id} token={token} username={username} />
      <div className="  flex flex-col gap-5">
        <h1 className=" text-2xl font-medium">My students</h1>
        <div className=" flex gap-3 items-center">
          <div className=" w-1/2 py-3 rounded-xl bg-violet-500 text-white px-3">
            <div className="">
              <h1 className="">Total students</h1>
              <h1 className=" text-3xl font-semiboldz">{myStudents.length}</h1>
            </div>
          </div>
        </div>
        {myStudents.map((items, index) => {
          return (
            <div
              key={index}
              className=" px-3 py-3 w-full flex flex-col gap-3 shadow-md bg-gray-100 rounded-xl"
            >
              <div className=" flex gap-4 items-center ">
                <div className=" w-16 h-16 bg-orange-500 rounded-xl">
                  <img
                    className=" w-full h-full object-cover rounded-xl "
                    src={items.reqId.studPersonal.picUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-col ">
                  <h1 className=" text-lg font-medium">
                    {items.student.username}
                  </h1>
                  <div className=" text-gray-500">
                    <h1>{items.reqId.subjects}</h1>
                    <h1 className=" mt-[-4px]">{items.reqId.cls}</h1>
                  </div>
                </div>
              </div>
              <hr className=" border-gray-300" />
              <div className=" flex justify-between gap-1 items-center">
                <div className=" flex flex-col">
                  <h1>Time Slot</h1>
                  <h1>{items.reqId.time}</h1>
                </div>
              </div>
              <div
                onClick={() => {
                  navToDetails(items.reqId);
                }}
                className=" py-2 px-2 rounded-xl flex items-center justify-center bg-violet-500 text-white"
              >
                <h1>View details</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyStudents;
