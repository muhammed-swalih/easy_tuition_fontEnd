import React, { useEffect, useState } from "react";
import { TextField, MenuItem } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function TeachSubjectBoards() {
  const location = useLocation();
  const teacherDetails = location ? location.state : "nothing";

  const { id, token, username, choosedClass } = teacherDetails;

  const navigate = useNavigate();

  const navTeachTimeSlot = () => {
    navigate("/teachTime", {
      state: {
        id: id,
        token: token,
        username: username,
        choosedClass: choosedClass,
      },
    });
  };
  const [expanded, setExpanded] = useState(null);

  const [subject, setSubjects] = useState([]);

  const removeSubjects = (indexToRemove) => {
    const updatedArray = subject.filter((_, index) => index !== indexToRemove);

    setSubjects(updatedArray);
  };

  const [scrtClick, setScrtClick] = useState(false);
  const [cbseClick, setCbseClick] = useState(false);
  const [icseclicked, setIcseClicked] = useState(false);
  const [niosClicked, setNiosClicked] = useState(false);

  useEffect(() => {
    console.log(teacherDetails);
  }, [subject]);

  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="w-full h-screen px-6 py-6 flex justify-start items-start">
      <div className=" w-full h-full flex flex-col gap-5 pt-10">
        <h1 className=" text-2xl font-medium tracking-wide">
          The Class you teach
        </h1>
        <div className="flex flex-col gap-2">
          {choosedClass.map((items, index) => {
            return (
              <div className=" flex flex-col gap-2">
                <div
                  key={index}
                  className={
                    expanded === index
                      ? "w-full h-auto rounded-t-xl border-t border-1 border-gray-400 border-l border-1 border-r flex items-center justify-start px-3"
                      : "w-full h-14 rounded-xl border border-1 border-gray-400 border-l border-1 border-r flex items-center justify-start px-3"
                  }
                >
                  <div
                    onClick={() => handleExpand(index)}
                    className="flex justify-between items-center w-full"
                  >
                    <h1>{items}</h1>
                    <h1>
                      {expanded === index ? (
                        <IoIosArrowUp onClick={() => handleExpand(index)} />
                      ) : (
                        <IoIosArrowDown onClick={() => handleExpand(index)} />
                      )}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}

          <div
            className={
              expanded !== null
                ? " mt-[-8px] w-full h-auto border-b border-l border-r border-1 border-gray-400 rounded-b-xl px-3 py-5 flex-1 flex flex-col gap-5"
                : "hidden"
            }
          >
            <div>
              <hr className=" border-gray-400" />
              <h1 className=" mt-2">Boards you teach</h1>
            </div>
            <div className=" flex flex-col gap-2">
              <div className=" flex w-full justify-between gap-2">
                <div
                  onClick={() => {
                    setScrtClick(!scrtClick);
                  }}
                  className={
                    scrtClick
                      ? " w-1/2 h-14 shadow-md border rounded-lg flex items-center justify-center px-2 text-xl bg-blue-500 text-white"
                      : "w-1/2 h-14 shadow-md border rounded-lg flex items-center justify-center px-2 text-xl "
                  }
                >
                  SCRT
                </div>
                <div
                  onClick={() => {
                    setCbseClick(!cbseClick);
                  }}
                  className={
                    cbseClick
                      ? " w-1/2 h-14 shadow-md border rounded-lg flex items-center justify-center px-2 text-xl bg-blue-500 text-white"
                      : "w-1/2 h-14 shadow-md border rounded-lg flex items-center justify-center px-2 text-xl "
                  }
                >
                  CBSE
                </div>
              </div>
              <div className=" flex w-full justify-between gap-2">
                <div
                  onClick={() => {
                    setIcseClicked(!icseclicked);
                  }}
                  className={
                    icseclicked
                      ? " w-1/2 h-14 shadow-md border rounded-lg flex items-center justify-center px-2 text-xl bg-blue-500 text-white"
                      : "w-1/2 h-14 shadow-md border rounded-lg flex items-center justify-center px-2 text-xl "
                  }
                >
                  ICSE
                </div>
                <div
                  onClick={() => {
                    setNiosClicked(!niosClicked);
                  }}
                  className={
                    niosClicked
                      ? " w-1/2 h-14 shadow-md border rounded-lg flex items-center justify-center px-2 text-xl bg-blue-500 text-white"
                      : "w-1/2 h-14 shadow-md border rounded-lg flex items-center justify-center px-2 text-xl "
                  }
                >
                  NIOS
                </div>
              </div>
              <hr className=" mt-1 border-gray-400" />
              <h1>Subjects</h1>
              <div className="">
                <TextField
                  value={subject}
                  fullWidth
                  select
                  label="Choose the Subjects"
                  SelectProps={{ multiple: true }}
                  onChange={(e) => setSubjects(e.target.value)}
                >
                  <MenuItem value="arts">Arts</MenuItem>
                  <MenuItem value="science">Science</MenuItem>
                  <MenuItem value="maths">Maths</MenuItem>
                  <MenuItem value="commerce">Commerce</MenuItem>
                </TextField>
              </div>
              <div className=" mt-2 flex flex-wrap justify-start gap-1">
                {subject.map((sub, index) => {
                  return (
                    <div
                      key={index}
                      className=" shadow-md w-auto px-2 py-1 items-center justify-center flex h-auto border rounded-lg"
                    >
                      <div className=" w-full flex justify-between gap-4 items-center ">
                        <h1>{sub}</h1>
                        <h1>
                          <RxCross2 onClick={() => removeSubjects(index)} />
                        </h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={navTeachTimeSlot}
          className="w-full py-2 flex items-center rounded-lg justify-center h-auto bg-blue-500"
        >
          <h1 className="text-white text-lg">Next</h1>
        </div>
      </div>
    </div>
  );
}

export default TeachSubjectBoards;
