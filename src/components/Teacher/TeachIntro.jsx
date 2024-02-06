import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineFileUpload } from "react-icons/md";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "axios";
function TeachIntro() {
  const location = useLocation();
  const teacherDetails = location ? location.state : "nothing";

  const { token, id, username } = teacherDetails;

  const [intro, setIntro] = useState("");
  const [introVideo, setIntroVideo] = useState();

  const postTeacherIntro = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/teachIntro",
        {
          teacherId: id,
          intro: intro,
          img: introVideo,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        navToSuccReg();
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const navigate = useNavigate();
  const navToSuccReg = () => {
    navigate("/teachRegSucc", {
      state: { id: id, token: token, username: username },
    });
  };

  useEffect(() => {
    console.log(teacherDetails);
  }, []);
  return (
    <div className=" w-full min-h-screen flex justify-center py-10 px-6">
      <div className=" w-full flex flex-col gap-10">
        <div className=" flex flex-col gap-3 ">
          <div className=" h-32 w-32 rounded-full bg-black"></div>
          <div>
            <h1 className=" text-2xl tracking-wide font-medium ">
              Introduction
            </h1>
            <h1 className=" text-gray-400 ">Explain about yourself</h1>
          </div>
        </div>
        <textarea
          onChange={(e) => setIntro(e.target.value)}
          className="border border-1 border-gray-300 rounded-3xl px-3 py-3"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Introduction"
        ></textarea>
        <div className=" flex flex-col gap-5">
          <div className=" ">
            <h1 className=" text-2xl">Demo Video</h1>
            <h1 className=" text-gray-400 text-sm">
              select any topic and explain it in two minutes
            </h1>
          </div>
          <TextField
            onChange={(e) => setIntroVideo(e.target.files[0])}
            type="file"
            InputProps={{
              style: { borderRadius: "10px", width: "200px" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <MdOutlineFileUpload />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div
          onClick={postTeacherIntro}
          className=" w-full rounded-xl h-12 bg-violet-500 flex items-center justify-center"
        >
          <h1 className=" text-white text-lg">Sign in</h1>
        </div>
      </div>
    </div>
  );
}

export default TeachIntro;
