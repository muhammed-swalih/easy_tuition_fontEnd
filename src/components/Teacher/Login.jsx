import React, { useEffect, useState } from "react";
import bg from "../../assets/bg.webp";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  let token;
  let id;
  let username;
  let email;

  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [teacherDetails, setTaecherDetails] = useState([]);

  const navigate = useNavigate();

  const navToDashBoard = () => {
    navigate("/teachDashboard", {
      state: { email: email, username: username, id: id, token: token },
    });
  };

  const navigateTeachReg = () => {
    navigate("/teacherRegister");
  };

  const postTeacherLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/teachAuth/login",
        {
          email: mail,
          password: password,
        }
      );

      if (response.status === 200) {
        setTaecherDetails(response.data);
        token = response.data.token;
        id = response.data.id;
        username = response.data.username;
        email = response.data.email;
        console.log(response.data);

        navToDashBoard();
      }
    } catch (error) {
      console.log(error.response.data);
      alert(error.response.data);
      navigateTeachReg();
    }
  };

  const navToStudReg = () => {
    navigate("/studReg");
  };

  useEffect(() => {
    console.log(token);
  }, [teacherDetails]);

  return (
    <div className=" w-full h-screen flex flex-col ">
      <div className=" w-full h-3/5 bg-purple-500">
        <img className=" w-full h-full object-cover" src={bg} alt="" />
      </div>
      <div className=" w-full h-2/5 bg-white rounded-t-3xl mt-[-20px] py-5">
        <div className=" w-full h-full flex flex-col items-center gap-5 px-6">
          <h1 className=" text-black text-3xl">Hi there!</h1>
          <div className=" flex flex-col gap-3 w-full">
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              label="email"
              type="email"
              InputProps={{ style: { borderRadius: "10px" } }}
            />
            <div className=" w-full">
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                label="password"
                type="password"
                InputProps={{ style: { borderRadius: "10px" } }}
                fullWidth
              />
              <div className=" w-full flex justify-end">
                <h1 className=" text-sm">forgot your password</h1>
              </div>
            </div>
            <div
              onClick={postTeacherLogin}
              className=" w-full rounded-xl h-12 bg-violet-500 flex items-center justify-center"
            >
              <h1 className=" text-white text-lg">Sign in</h1>
            </div>
            <div className=" flex flex-col gap-1 items-center w-full">
              <h1>
                Don't have an account?{" "}
                <span className=" text-blue-500">sign up</span>
              </h1>
              <div className=" flex gap-5 items-center text-blue-500">
                <h1 onClick={navigateTeachReg} className=" text-sm underline">
                  Teacher
                </h1>
                <h1 onClick={navToStudReg} className=" text-sm underline">
                  Student
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
