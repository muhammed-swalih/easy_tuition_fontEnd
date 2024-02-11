import React, { useEffect, useState } from "react";
import StudNavbar from "./StudNavbar";
import { useLocation } from "react-router-dom";
import { MenuItem, Rating, TextField } from "@mui/material";
import { FaGraduationCap } from "react-icons/fa";
import { HiMiniLanguage } from "react-icons/hi2";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import axios from "axios";

function StudTeacherProfile() {
  const location = useLocation();
  const studentDetailsAndTeacherId = location ? location.state : "nothing";

  const [chooseTimeAm, setChooseTimeAm] = useState("");
  const [chooseTimePm, setChooseTimePm] = useState("");

  const [teacherAm, setTeacherAm] = useState([]);
  const [teacherPm, setTeacherPm] = useState([]);

  const [studentPersonalId, setStudentPeronalId] = useState([]);
  const [studSchoolId, setStudSchoolId] = useState([]);

  const {
    id,
    username,
    token,
    teacherId,
    teacherIntro,
    teacherPersonal,
    cls,
    board,
    subjects,
  } = studentDetailsAndTeacherId;

  const getTeacherAvailableTime = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3005/teachTimeSlot/${teacherId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        setTeacherAm(response.data.am);
        setTeacherPm(response.data.pm);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getStudPersonal = async () => {
    try {
      const response = await axios.get("http://localhost:3005/studPersonal", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        // console.log(response.data);
        setStudentPeronalId(response.data._id);
        console.log(response.data._id);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getStudeSchoolId = async () => {
    try {
      const response = await axios.get("http://localhost:3005/studSchool", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        // console.log(response.data);
        setStudSchoolId(response.data._id);
        console.log(response.data._id);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const sendRequest = async () => {
    let time;
    if (chooseTimeAm !== "" && chooseTimePm === "") {
      time = chooseTimeAm;
    } else if (chooseTimeAm === "" && chooseTimePm !== "") {
      time = chooseTimePm;
    }
    try {
      const response = await axios.post(
        "http://localhost:3005/teachReq",
        {
          teacherId: teacherId,
          studPersonal: studentPersonalId,
          studSchool: studSchoolId,
          studentId: id,
          board: board,
          time: time,
          subjects: subjects,
          cls: cls,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        alert("your request has been sended");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    console.log(studentDetailsAndTeacherId);
    getTeacherAvailableTime();
    getStudPersonal();
    getStudeSchoolId();
  }, [studentPersonalId, studSchoolId]);

  return (
    <div className="px-4 py-4 w-full min-h-screen">
      <StudNavbar id={id} token={token} username={username} />
      <div className=" flex w-full flex-col gap-5 py-8">
        <div className=" flex items-center  gap-10">
          <div className=" w-36 h-36 rounded-3xl drop-shadow-lg bg-white  border-8 border-gray-200">
            <img
              className=" w-full h-full object-cover rounded-2xl"
              src={teacherPersonal.picUrl}
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <div className="">
              <h1 className=" text-4xl">
                {teacherPersonal.teacherId.username}
              </h1>
              <Rating value={5} readOnly />
            </div>
            <div className="text-white text-lg drop-shadow-lg rounded-lg bg-orange-500 px-5 py-2 flex items-center justify-center">
              <div onClick={sendRequest} className=" flex gap-2 items-center">
                <h1>Enroll now</h1>

                <h1 className=" text-white font-semibold">
                  <IoSend />
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <h1 className=" text-xl font-semibold">About</h1>
          <h1>{teacherIntro.intro}</h1>
        </div>
        <div className=" flex gap-2 items-center">
          <h1 className=" text-7xl">
            <FaGraduationCap />
          </h1>
          <div className=" ">
            <h1>Education qualification</h1>
            <h1 className=" text-xl font-semibold">BCA</h1>
          </div>
        </div>
        <div className=" flex gap-2 items-center">
          <h1 className=" text-7xl">
            <HiMiniLanguage />
          </h1>
          <div className=" ">
            <h1>Languages known</h1>
            <div className=" flex gap-1">
              <h1 className=" text-xl font-semibold">
                {teacherPersonal.primaryLang} ,
              </h1>
              <h1 className=" text-xl font-semibold">
                {teacherPersonal.secondaryLang}
              </h1>
            </div>
          </div>
        </div>
        <hr className=" border-gray-300" />
        <div className=" flex flex-col gap-5">
          <h1 className=" text-xl font-semibold">Available time</h1>
          {/* textArea */}
          <div className=" flex flex-col gap-2">
            <TextField
              onChange={(e) => {
                setChooseTimeAm(e.target.value);
                setChooseTimePm("");
              }}
              value={chooseTimeAm}
              label="Choose your time in AM"
              fullWidth
              InputProps={{ style: { borderRadius: "10px" } }}
              select
            >
              {teacherAm.map((items, index) => {
                return (
                  <MenuItem key={index} value={items}>
                    {items}
                  </MenuItem>
                );
              })}
            </TextField>
            <TextField
              onChange={(e) => {
                setChooseTimePm(e.target.value);
                setChooseTimeAm("");
              }}
              value={chooseTimePm}
              label="Choose your time in PM"
              fullWidth
              InputProps={{ style: { borderRadius: "10px" } }}
              select
            >
              {teacherPm.map((items, index) => {
                return (
                  <MenuItem key={index} value={items}>
                    {items}
                  </MenuItem>
                );
              })}
            </TextField>
          </div>
        </div>
        <hr className=" border-gray-300" />
        <div className=" flex flex-col gap-5">
          <h1 className=" text-xl font-semibold">Demo video</h1>
          <div className=" w-full h-60 rounded-2xl relative">
            <img
              className=" w-full h-full object-cover rounded-2xl"
              src="https://fospath.com/wp-content/uploads/2022/09/how-to-be-successful-with-online-classes.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
              <a href={teacherIntro.picUrl}>
                <h1 className="text-black text-6xl font-bold">
                  <MdOutlinePlayCircleFilled />
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudTeacherProfile;
