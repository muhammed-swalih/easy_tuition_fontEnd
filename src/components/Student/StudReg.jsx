import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StudReg() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  let token;
  let id;
  let name;

  const navTeachOTP = () => {
    navigate("/studOTP", { state: { token: token, username: name, id: id } });
  };

  const postStudRegDetails = async () => {
    try {
      const response = await axios.post("http://localhost:3005/studAuth", {
        username: username,
        email: email,
        phone: phone,
        password: password,
      });

      if (response.status === 200) {
        console.log(response.data);
        token = response.data.token;
        id = response.data.id;
        name = response.data.username;

        navTeachOTP();
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const navigate = useNavigate();

  return (
    <div className=" w-full pb-5">
      <div className=" w-full h-screen flex flex-col gap-4 items-center justify-center px-6">
        <div className="w-32 h-32 bg-black"></div>
        <div className=" flex flex-col items-center">
          <h1 className=" text-2xl font-medium tracking-wide">
            Student Registration
          </h1>
          <h1 className=" text-gray-400 text-xs">
            let's get signed up, just a few simple details
          </h1>
        </div>
        <div className=" flex flex-col gap-2 w-full ">
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            label="username"
            type="text"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            label="Email"
            type="text"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <TextField
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            label="Phone"
            type="text"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            label="password"
            type="password"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="I accept the terms & conditions"
          />
        </div>
        <div
          onClick={postStudRegDetails}
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

export default StudReg;
