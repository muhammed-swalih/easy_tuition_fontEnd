import { TextField, MenuItem } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function TeacherTimeSlot() {
  const location = useLocation();

  const teacherDetails = location ? location.state : "nothing";

  const { id, token, username, choosedClass } = teacherDetails;

  const navigate = useNavigate();

  const navTeachBank = () => {
    navigate("/teachBank", {
      state: { id: id, token: token, username: username },
    });
  };
  const [am, setAm] = useState([]);
  const [pm, setPm] = useState([]);

  const postTimeSlots = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/teachTimeSlot",
        {
          teacherId: id,
          am: am,
          pm: pm,
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
        navTeachBank();
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    console.log(am);
    console.log(pm);
  }, [am, pm]);
  return (
    <div className=" w-full min0-h-screen px-6 py-10 flex items-center justify-center">
      <div className=" w-full h-full flex flex-col gap-10">
        <div className=" flex flex-col gap-3">
          <div className=" w-32 h-32 bg-black rounded-full"></div>
          <h1 className=" text-3xl font-medium">Choose your time slots</h1>
          <h1 className=" text-gray-400">
            You can select any time slots for teaching the class, which will be
            conducted every day.
          </h1>
        </div>
        <div className=" flex flex-col gap-3">
          <div className=" flex gap-5 items-center">
            <h1 className=" text-xl font-medium">AM</h1>
            <TextField
              value={am}
              fullWidth
              select
              SelectProps={{ multiple: true }}
              label="Choose time in AM"
              onChange={(e) => setAm(e.target.value)}
            >
              <MenuItem value="07:00 Am - 08:00 Am">
                07:00 Am - 08:00 Am
              </MenuItem>
              <MenuItem value="08:00 Am - 09:00 Am">
                08:00 Am - 09:00 Am
              </MenuItem>
              <MenuItem value="09:00 Am - 10:00 Am">
                09:00 Am - 10:00 Am
              </MenuItem>
              <MenuItem value="10:00 Am - 11:00 Am">
                10:00 Am - 11:00 Am
              </MenuItem>
              <MenuItem value="11:00 Am - 12:00 Am">
                11:00 Am - 12:00 Am
              </MenuItem>
            </TextField>
          </div>
          <div className=" flex gap-5 items-center">
            <h1 className=" text-xl font-medium">PM</h1>
            <TextField
              value={pm}
              fullWidth
              select
              SelectProps={{ multiple: true }}
              label="Choose time in AM"
              onChange={(e) => setPm(e.target.value)}
            >
              <MenuItem value="12:00 Pm - 01:00 Pm">
                12:00 Pm - 01:00 Pm
              </MenuItem>
              <MenuItem value="01:00 Pm - 02:00 Pm">
                01:00 Pm - 02:00 Pm
              </MenuItem>
              <MenuItem value="02:00 Pm - 03:00 Pm">
                02:00 Pm - 03:00 Pm
              </MenuItem>
              <MenuItem value="03:00 Pm - 04:00 Pm">
                03:00 Pm - 04:00 Pm
              </MenuItem>
              <MenuItem value="04:00 Pm - 05:00 Pm">
                04:00 Pm - 05:00 Pm
              </MenuItem>
              <MenuItem value="05:00 Pm - 06:00 Pm">
                05:00 Pm - 06:00 Pm
              </MenuItem>
              <MenuItem value="06:00 Pm - 07:00 Pm">
                06:00 Pm - 07:00 Pm
              </MenuItem>
              <MenuItem value="07:00 Pm - 08:00 Pm">
                07:00 Pm - 08:00 Pm
              </MenuItem>
            </TextField>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <div className=" flex gap-2 items-center justify-center">
            <hr className=" w-1/4 border border-1 border-gray-500" />
            <h1 className=" text-lg">Selected Time</h1>
            <hr className=" w-1/4 border-gray-500 border border-1" />
          </div>
          <div className=" flex flex-col gap-10">
            <div className=" flex flex-col gap-5">
              {am.length !== 0 && <h1 className=" text-xl font-medium">AM</h1>}
              <div className=" flex flex-wrap gap-2 justify-start">
                {am.map((time, index) => {
                  return (
                    <div
                      key={index}
                      className="w-auto h-auto px-2 py-2 flex items-center rounded-lg justify-between border shadow-md"
                    >
                      <h1>{time}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" flex flex-col gap-5">
              {pm.length !== 0 && <h1 className=" text-xl font-medium">PM</h1>}
              <div className=" flex flex-wrap gap-2 justify-start">
                {pm.map((time, index) => {
                  return (
                    <div
                      key={index}
                      className="w-auto h-auto px-2 py-2 flex items-center rounded-lg justify-between border shadow-md"
                    >
                      <h1>{time}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            onClick={postTimeSlots}
            className="w-full py-2 flex items-center rounded-lg justify-center h-auto bg-blue-500"
          >
            <h1 className="text-white text-lg">Next</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherTimeSlot;
