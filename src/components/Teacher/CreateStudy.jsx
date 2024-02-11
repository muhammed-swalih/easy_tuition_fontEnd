import React from "react";
import Navbar from "./Navbar";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { MdOutlineFileUpload } from "react-icons/md";
import { useLocation } from "react-router-dom";

function CreateStudy() {
  const location = useLocation();

  const teacherDetails = location ? location.state : "nothing";

  const { id, token, username } = teacherDetails;
  return (
    <div className=" w-full min-h-screen px-4 py-4">
      <Navbar id={id} token={token} username={username} />
      <div className=" pt-10 flex flex-col gap-5">
        <h1 className=" text-3xl font-normal">Create study meterial</h1>
        <div className=" flex flex-col gap-5">
          <TextField
            label="Topic name"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <textarea
            className="border border-1 border-gray-400 rounded-[10px] px-3"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Content"
          ></textarea>
          <TextField
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
          <div className=" flex h-12 w-full items-center justify-center bg-violet-500 rounded-2xl">
            <h1 className=" text-white text-lg">Create</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStudy;
