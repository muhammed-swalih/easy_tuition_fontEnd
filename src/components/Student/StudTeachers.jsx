import React, { useEffect, useState } from "react";
import StudNavbar from "./StudNavbar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Rating } from "@mui/material";
import { LuIndianRupee } from "react-icons/lu";
import { IoPlay } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { FaFilter } from "react-icons/fa6";

function StudTeachers() {
  const navigate = useNavigate();

  const location = useLocation();
  const studentDetails = location ? location.state : "nothing";

  const [teachers, setTeachers] = useState([]);
  const [teacherIntro, setTeacherIntro] = useState([]);
  const { id, token, username } = studentDetails;
  const [time, setTime] = useState([]);

  const navToTeacherDetails = (teacherPersonal, teacherIntro, teacherId) => {
    navigate("/studTeacherProfile", {
      state: {
        id: id,
        token: token,
        username: username,
        teacherId: teacherId,
        teacherPersonal: teacherPersonal,
        teacherIntro: teacherIntro,
      },
    });
  };

  const getAllTeachers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3005/teachPersonal/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        setTeachers(response.data);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getAllIntro = async () => {
    try {
      const response = await axios.get("http://localhost:3005/teachIntro/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log(response.data);
        console.log(response.data);
        setTeacherIntro(response.data);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getTimeSlot = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3005/teachTimeSlot/allTime",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        setTime(response.data);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    console.log(studentDetails);
    getAllTeachers();
    getAllIntro();
    getTimeSlot();
  }, []);

  const navToFilter = () => {
    navigate("/studFilter", {
      state: { id: id, token: token, username: username },
    });
  };
  return (
    <div className=" w-full h-auto px-4 py-4">
      <StudNavbar id={id} token={token} username={username} />
      <div className=" flex w-full items-center justify-between my-5">
        <h1 className=" text-3xl py-3">Teachers</h1>
        <div
          onClick={navToFilter}
          className=" px-5 py-2 rounded-lg bg-blue-500 flex items-center justify-center"
        >
          <div className=" flex gap-2 items-center">
            <h1 className=" text-2xl text-white">
              <FaFilter />
            </h1>
            <h1 className=" text-lg text-white">Filter teachers</h1>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-5">
        {teachers.map((teacher, index) => {
          return (
            <div key={index} className=" flex flex-col gap-10   ">
              <div className=" flex flex-col bg-gray-100 gap-2 w-full rounded-lg drop-shadow-lg h-auto py-8 px-5">
                <div className=" flex gap-3 items-center">
                  <div className=" w-20 h-20 rounded-full bg-orange-500">
                    <img
                      className="w-full h-full object-cover rounded-full"
                      src={teacher ? teacher.picUrl : ""}
                      alt=""
                    />
                  </div>
                  <div className=" flex flex-col">
                    <h1 className=" text-xl">
                      {teacher ? teacher.teacherId.username : ""}
                    </h1>
                    <Rating value={5} readOnly size="small" />
                    <h1>
                      Language ({teacher ? teacher.primaryLang : ""},
                      {teacher ? teacher.secondaryLang : ""})
                    </h1>
                  </div>
                </div>

                <hr className=" border-gray-300" />
                <div className=" flex justify-between w-full items-center">
                  <div className=" flex gap-1 items-center">
                    <h1>
                      <IoPlay />
                    </h1>

                    <a
                      className=" text-blue-500"
                      href={teacherIntro ? teacherIntro[index].picUrl : ""}
                    >
                      Watch the Demo video
                    </a>
                  </div>
                  <div
                    onClick={() => {
                      navToTeacherDetails(
                        teachers[index],
                        teacherIntro[index],
                        teacher.teacherId._id
                      );
                    }}
                    className=" px-4 py-3 my-1 flex items-center justify-center bg-orange-500 rounded-lg"
                  >
                    <h1 className=" text-white">View Details</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudTeachers;
