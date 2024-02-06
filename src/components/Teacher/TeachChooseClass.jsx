import React, { useEffect, useState } from "react";
import { TextField, InputAdornment, MenuItem } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

function TeachChooseClass() {
  const [classes, setClasses] = useState([]);
  const [classDetails, setClassDetails] = useState([]);

  const location = useLocation();
  const teacherDetails = location ? location.state : "nothing";

  const { id, token, username } = teacherDetails;

  const postChoosedClasses = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/teachCsb",
        {
          teacherId: id,
          csbDetails: classDetails,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        navTotimeSlot();
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(classDetails);
  //   console.log(teacherDetails);
  // }, [classDetails]);

  const selectBoards = (index, selectedBoards) => {
    const updatedClassDetails = [...classDetails];
    updatedClassDetails[index] = {
      ...updatedClassDetails[index],
      class: classes[index],
      boards: selectedBoards.map((board) => ({
        board: board,
        subjects: [],
      })),
    };
    setClassDetails(updatedClassDetails);
  };

  const newSelectBoards = (index, selectedboards) => {
    const copyingClassDetails = [...classDetails];
    copyingClassDetails[index] = {
      ...copyingClassDetails[index],
      class: classes[index],
      boards: selectBoards.map((boards) => ({
        boards: boards,
        subjects: [],
      })),
    };
  };

  const selectSubjects = (index, boardIndex, selectedSubjects) => {
    const updatedClassDetails = [...classDetails];
    updatedClassDetails[index].boards[boardIndex].subjects = selectedSubjects;
    setClassDetails(updatedClassDetails);
  };

  const navTotimeSlot = () => {
    navigate("/teachTime", {
      state: {
        id: id,
        token: token,
        username: username,
        choosedClass: classes,
      },
    });
  };
  return (
    <div className="w-full h-auto flex items-center justify-center px-6 py-10">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="w-full h-1/2 flex items-center justify-center">
          <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
            <div className="w-24 h-24 bg-black rounded-xl"></div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl font-medium tracking-wide">
                Choose your requirements
              </h1>
              <h1 className="text-xs text-gray-400">
                Select the class you are interested to teach
              </h1>
            </div>

            <TextField
              onChange={(e) => setClasses(e.target.value)}
              value={classes}
              label="Select the Class"
              fullWidth
              InputProps={{ style: { borderRadius: "10px" } }}
              select
              SelectProps={{
                multiple: true,
              }}
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
          </div>
        </div>
        {classes.map((items, index) => {
          return (
            <div key={index} className="flex flex-col gap-5 py-5">
              <div className="flex flex-col gap-4 w-full h-auto py-8 px-3 bg-slate-100 rounded-2xl drop-shadow-md">
                <h1 className="text-lg">{items}</h1>
                <div className="w-full px-3 py-4 bg-white rounded-2xl drop-shadow-md flex flex-col gap-3">
                  <TextField
                    onChange={(e) => selectBoards(index, e.target.value)}
                    value={
                      classDetails[index]?.boards.map((board) => board.board) ||
                      []
                    }
                    label="Select the boards"
                    fullWidth
                    InputProps={{ style: { borderRadius: "10px" } }}
                    select
                    SelectProps={{
                      multiple: true,
                    }}
                  >
                    <MenuItem value="CBSE">CBSE</MenuItem>
                    <MenuItem value="SCRT">SCRT</MenuItem>
                    <MenuItem value="KERALA">KERALA</MenuItem>
                    <MenuItem value="NERT">NERT</MenuItem>
                  </TextField>
                </div>
                {classDetails[index]?.boards?.map((board, boardIndex) => {
                  return (
                    <div
                      key={boardIndex}
                      className="w-full px-3 py-4 bg-white rounded-2xl drop-shadow-md flex flex-col gap-3"
                    >
                      <h1 className="text-xl font-medium">{board.board}</h1>
                      <TextField
                        onChange={(e) =>
                          selectSubjects(index, boardIndex, e.target.value)
                        }
                        value={board.subjects || []}
                        label="Select the subjects"
                        fullWidth
                        InputProps={{ style: { borderRadius: "10px" } }}
                        select
                        SelectProps={{
                          multiple: true,
                        }}
                      >
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="malayalam">Malayalam</MenuItem>
                        <MenuItem value="hindi">Hindi</MenuItem>
                        <MenuItem value="Physics">Physics</MenuItem>
                        <MenuItem value="Biology">Biology</MenuItem>
                        <MenuItem value="Chemistry">Chemistry</MenuItem>
                        <MenuItem value="Chemistry">Arabic</MenuItem>
                      </TextField>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div
          onClick={postChoosedClasses}
          className=" w-full h-12 bg-violet-500 rounded-2xl flex items-center justify-center text-white text-lg"
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default TeachChooseClass;
