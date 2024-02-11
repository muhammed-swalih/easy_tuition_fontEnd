import React, { useEffect, useState } from "react";
import StudNavbar from "./StudNavbar";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuItem, Rating, TextField } from "@mui/material";
import { IoPlay } from "react-icons/io5";
import axios from "axios";
import { FaFilter } from "react-icons/fa6";

function StudFilterTeachers() {
  const [cls, setClasses] = useState("");
  const [boardSelect, setboards] = useState("");
  const [subject, setSub] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const studentDetails = location ? location.state : "nothing";

  const [sortedTeacherIds, setSortedTeachersIds] = useState([]);
  const [sortedTeacherPersonal, setSortedTeacherPersonal] = useState([]);

  const [filterTeacherBio, setFilterTeacherBio] = useState([]);

  let sortedTeacher = [];

  const { id, token, username } = studentDetails;

  const navToTeacherDetails = (teacherPersonal, teacherIntro, teacherId) => {
    navigate("/studTeacherProfile", {
      state: {
        id: id,
        token: token,
        username: username,
        teacherId: teacherId,
        teacherPersonal: teacherPersonal,
        teacherIntro: teacherIntro,
        cls: cls,
        subjects: subject,
        board: boardSelect,
      },
    });
  };

  const getSortedTeachersId = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/teachCsb/filter",
        {
          cls: cls,
          boardSelect: boardSelect,
          subject: subject,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setSortedTeachersIds(response.data);

        response.data.map(async (items, index) => {
          try {
            const response = await axios.post(
              "http://localhost:3005/teachPersonal/filter",
              {
                ids: items,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              }
            );
            if (response.status === 200) {
              const isAlreadyExist = sortedTeacherPersonal.find(
                (item) => item._id === response.data._id
              );

              if (!isAlreadyExist) {
                setSortedTeacherPersonal((prevData) => [
                  ...prevData,
                  response.data,
                ]);
              }

              try {
                const response = await axios.get(
                  `http://localhost:3005/teachIntro/${items}`,
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );
                if (response.status === 200) {
                  const isAlreadyExist = filterTeacherBio.find(
                    (item) => item._id === response.data._id
                  );

                  if (!isAlreadyExist) {
                    setFilterTeacherBio((prevData) => [
                      ...prevData,
                      response.data,
                    ]);
                  }
                }
              } catch (error) {
                console.log(error.response.data);
              }
            }
          } catch (error) {
            console.log(error.response.data);
          }
        });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    console.log(filterTeacherBio);
  }, [filterTeacherBio]);

  return (
    <div className=" w-full min-h-screen px-4 py-4">
      <StudNavbar id={id} token={token} username={username} />
      <div className=" flex flex-col gap-3 my-2">
        <TextField
          onChange={(e) => {
            setClasses(e.target.value);
            setSortedTeacherPersonal([]);
          }}
          value={cls}
          label="Select the Class"
          fullWidth
          InputProps={{ style: { borderRadius: "10px" } }}
          select
        >
          <MenuItem value="Class 5">Class 5</MenuItem>
          <MenuItem value="Class 6">Class 6</MenuItem>
          <MenuItem value="Class 7">Class 7</MenuItem>
          <MenuItem value="Class 8">Class 8</MenuItem>
          <MenuItem value="Class 9">Class 9</MenuItem>
          <MenuItem value="Class 10">Class 10</MenuItem>
          <MenuItem value="Class +1">Class +1</MenuItem>
          <MenuItem value="Class +2">Class +2</MenuItem>
        </TextField>
        <TextField
          onChange={(e) => {
            setboards(e.target.value);
            setSortedTeacherPersonal([]);
          }}
          value={boardSelect}
          label="Select the boards"
          fullWidth
          InputProps={{ style: { borderRadius: "10px" } }}
          select
        >
          <MenuItem value="CBSE">CBSE</MenuItem>
          <MenuItem value="SCRT">SCRT</MenuItem>
          <MenuItem value="KERALA">KERALA</MenuItem>
          <MenuItem value="NERT">NERT</MenuItem>
        </TextField>
        <TextField
          onChange={(e) => {
            setSub(e.target.value);
            setSortedTeacherPersonal([]);
          }}
          value={subject}
          label="Select the Subjects"
          fullWidth
          InputProps={{ style: { borderRadius: "10px" } }}
          select
        >
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="malayalam">Malayalam</MenuItem>
          <MenuItem value="hindi">Hindi</MenuItem>
          <MenuItem value="Physics">Physics</MenuItem>
          <MenuItem value="Biology">Biology</MenuItem>
          <MenuItem value="Chemistry">Chemistry</MenuItem>
          <MenuItem value="Chemistry">Arabic</MenuItem>
        </TextField>
        {cls && boardSelect && subject ? (
          <div
            onClick={getSortedTeachersId}
            className=" w-full h-12 bg-blue-500 drop-shadow-lg text-white rounded-lg flex gap-2 items-center justify-center"
          >
            <h1 className=" text-2xl text-white">
              <FaFilter />
            </h1>
            <h1 className="text-lg">Filter now</h1>
          </div>
        ) : (
          ""
        )}

        <div className=" my-5 flex flex-col gap-5">
          {sortedTeacherPersonal.map((items, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col gap-3 w-full h-auto px-3 py-5 bg-gray-100 rounded-lg drop-shadow-lg "
              >
                <div className=" flex gap-3 items-center">
                  <div className=" w-20 h-20 bg-yellow-500 rounded-full">
                    <img
                      className=" w-full h-full object-cover rounded-full"
                      src={items.picUrl}
                      alt=""
                    />
                  </div>
                  <div className=" flex flex-col gap-[-3px]">
                    <h1 className=" text-lg font-medium">
                      {items.teacherId.username}
                    </h1>
                    <Rating value={5} readOnly />
                    <div className=" flex gap-2">
                      <h1>Lang:</h1>
                      <h1 className=" font-semibold flex gap-1 items-center">
                        <h1 className=" ">{items.primaryLang},</h1>{" "}
                        <h1>{items.secondaryLang}</h1>
                      </h1>
                    </div>
                  </div>
                </div>
                <hr className=" border-gray-300" />
                {filterTeacherBio[index] && (
                  <h1>{filterTeacherBio[index].intro}</h1>
                )}
                <hr className=" border-gray-300" />

                <div className=" flex justify-between w-full items-center">
                  <div className=" flex gap-1 items-center">
                    <h1>
                      <IoPlay />
                    </h1>

                    <a
                      href={
                        filterTeacherBio[index]
                          ? filterTeacherBio[index].picUrl
                          : ""
                      }
                      className=" text-blue-500"
                    >
                      Watch the Demo video
                    </a>
                  </div>
                  <div
                    onClick={() => {
                      navToTeacherDetails(
                        sortedTeacherPersonal[index],
                        filterTeacherBio[index],
                        items.teacherId._id
                      );
                    }}
                    className=" px-4 py-3 my-1 flex items-center justify-center bg-orange-500 rounded-lg"
                  >
                    <h1 className=" text-white">View Details</h1>
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

export default StudFilterTeachers;
