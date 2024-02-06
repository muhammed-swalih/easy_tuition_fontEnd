import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function TeachRegister() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  let registeredUserToken;
  let teacherId ;
  const navTeachOTP = () => {
    navigate("/teacherOTP", {
      state: { username: username, token: registeredUserToken, id:teacherId },
    });
  };

  const log = {
    username,
    email,
    phone,
    password,
  };

  useEffect(() => {
    console.log(log);
  }, [log]);

  const postRegDataOfTeacher = async () => {
    try {
      const response = await axios.post("http://localhost:3005/teachAuth", {
        username,
        email,
        phone,
        password,
      });

      if (response.status === 200) {
        console.log(response.data);
        registeredUserToken = response.data.token;
        teacherId = response.data.id
        navTeachOTP();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-full pb-5">
      <div className=" w-full h-screen flex flex-col gap-4 items-center justify-center px-6">
        <div className="w-32 h-32 bg-black rounded-2xl"></div>
        <div className=" flex flex-col items-center">
          <h1 className=" text-2xl font-medium tracking-wide">
            Teacher Registration
          </h1>
          <h1 className=" text-gray-400 text-xs">
            let's get signed up, just a few simple details
          </h1>
        </div>
        <div className=" flex flex-col gap-2 w-full ">
          <TextField
            fullWidth
            label="username"
            type="text"
            InputProps={{ style: { borderRadius: "10px" } }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            fullWidth
            label="email"
            type="email"
            InputProps={{ style: { borderRadius: "10px" } }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="phone"
            type="phone"
            InputProps={{ style: { borderRadius: "10px" } }}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            fullWidth
            label="password"
            type="password"
            InputProps={{ style: { borderRadius: "10px" } }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="I accept the terms & conditions"
          />
        </div>
        <div
          onClick={postRegDataOfTeacher}
          className=" w-full rounded-xl h-12 bg-blue-500 flex items-center justify-center"
        >
          <h1 className=" text-white text-lg">Sign in</h1>
        </div>
      </div>
      <h1 className="  text-sm flex justify-center items-end mt-[-40px]">
        Don't know how to register?{" "}
        <span className=" font-semibold underline">Watch Tutorial</span>
      </h1>
    </div>
  );
}

export default TeachRegister;
