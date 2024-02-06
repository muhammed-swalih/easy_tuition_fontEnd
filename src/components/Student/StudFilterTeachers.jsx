import React, { useEffect, useState } from "react";
import StudNavbar from "./StudNavbar";
import { useLocation } from "react-router-dom";
import { MenuItem, Rating, TextField } from "@mui/material";
import { IoPlay } from "react-icons/io5";

function StudFilterTeachers() {
  const [classes, setClasses] = useState([]);

  const [boards, setboards] = useState([]);
  const [sub, setSub] = useState([]);
  const [am, setAm] = useState([]);
  const [pm, setPm] = useState([]);

  const location = useLocation();
  const studentDetails = location ? location.state : "nothing";

  const { id, token, username } = studentDetails;

  useEffect(() => {
    console.log(studentDetails);
  }, [])

  return (
    <div className=" w-full min-h-screen px-4 py-4">
      <StudNavbar id={id} token={token} username={username} />
      <div className=" flex flex-col gap-3 my-2">
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
        <TextField
          onChange={(e) => setboards(e.target.value)}
          value={boards}
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
        <TextField
          onChange={(e) => setSub(e.target.value)}
          value={sub}
          label="Select the Subjects"
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
        <TextField
          onChange={(e) => setAm(e.target.value)}
          value={am}
          label="Select Time in AM"
          fullWidth
          InputProps={{ style: { borderRadius: "10px" } }}
          select
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="07:00 Am - 08:00 Am">07:00 Am - 08:00 Am</MenuItem>
          <MenuItem value="08:00 Am - 09:00 Am">08:00 Am - 09:00 Am</MenuItem>
          <MenuItem value="09:00 Am - 10:00 Am">09:00 Am - 10:00 Am</MenuItem>
          <MenuItem value="10:00 Am - 11:00 Am">10:00 Am - 11:00 Am</MenuItem>
          <MenuItem value="11:00 Am - 12:00 Am">11:00 Am - 12:00 Am</MenuItem>
        </TextField>
        <TextField
          onChange={(e) => setAm(e.target.value)}
          value={pm}
          label="Select Time in PM"
          fullWidth
          InputProps={{ style: { borderRadius: "10px" } }}
          select
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="12:00 Pm - 01:00 Pm">12:00 Pm - 01:00 Pm</MenuItem>
          <MenuItem value="01:00 Pm - 02:00 Pm">01:00 Pm - 02:00 Pm</MenuItem>
          <MenuItem value="02:00 Pm - 03:00 Pm">02:00 Pm - 03:00 Pm</MenuItem>
          <MenuItem value="03:00 Pm - 04:00 Pm">03:00 Pm - 04:00 Pm</MenuItem>
          <MenuItem value="04:00 Pm - 05:00 Pm">04:00 Pm - 05:00 Pm</MenuItem>
          <MenuItem value="05:00 Pm - 06:00 Pm">05:00 Pm - 06:00 Pm</MenuItem>
          <MenuItem value="06:00 Pm - 07:00 Pm">06:00 Pm - 07:00 Pm</MenuItem>
          <MenuItem value="07:00 Pm - 08:00 Pm">07:00 Pm - 08:00 Pm</MenuItem>
        </TextField>
        <div className=" w-full h-12 bg-blue-500 drop-shadow-lg text-white rounded-xl flex items-center justify-center">
          <h1 className="text-lg">Filter</h1>
        </div>

        <div className=" my-5 flex flex-col gap-5">
          <div className=" flex flex-col gap-3 w-full h-auto px-3 py-5 bg-gray-100 rounded-2xl drop-shadow-lg ">
            <div className=" flex gap-3 items-center">
              <div className=" w-20 h-20 bg-yellow-500 rounded-full"></div>
              <div className=" flex flex-col gap-[-3px]">
                <h1 className=" text-lg font-medium">Teacher Name</h1>
                <Rating value={5} readOnly />
                <h1>Lang(English,Malayalam)</h1>
              </div>
            </div>
            <h1 className=" ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              corporis dolore hic debitis modi? Tempore consequuntur,
            </h1>

            <div className=" flex justify-between w-full items-center">
              <div className=" flex gap-1 items-center">
                <h1>
                  <IoPlay />
                </h1>

                <a className=" text-blue-500">Watch the Demo video</a>
              </div>
              <div className=" px-4 py-3 my-1 flex items-center justify-center bg-orange-500 rounded-2xl">
                <h1 className=" text-white">View Details</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudFilterTeachers;
