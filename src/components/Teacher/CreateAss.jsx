import React from "react";
import Navbar from "./Navbar";
import { TextField } from "@mui/material";

function CreateAss() {
  return (
    <div className=" w-full h-full py-4 px-4">
      <Navbar />
      <div className=" mt-10 flex flex-col gap-10">
        <h1 className=" text-2xl font-medium">Create Assignment</h1>
        <div className=" flex flex-col gap-3">
          <div className=" flex gap-3 items-center">
            <TextField
              type="date"
              InputProps={{ style: { borderRadius: "10px" } }}
            />
            <TextField
              label="from"
              type="time"
              InputProps={{ style: { borderRadius: "10px" } }}
            />
            <TextField
              label="To"
              type="time"
              InputProps={{ style: { borderRadius: "10px" } }}
            />
          </div>
          <TextField
            InputProps={{ style: { borderRadius: "10px" } }}
            label="Assignment name"
          />
          <textarea
            className="border border-1 border-gray-400 rounded-[10px] px-3"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Introduction"
          ></textarea>
        </div>
        <div className=" flex flex-col gap-3">
          <div className=" w-full bg-50 shadow-md rounded-2xl h-auto px-2 py-2">
            <div className=" flex justify-between">
              <div className=" flex gap-4 items-center">
                <div className=" w-16 h-16 bg-orange-500 rounded-2xl"></div>
                <div className=" flex flex-col">
                  <h1 className=" font-medium text-xl">Nourin</h1>
                  <h1>Biology student</h1>
                </div>
              </div>
              <div className=" w-20 text-white rounded-2xl px-4 flex items-center justify-center py-4 bg-violet-500">
                <h1 className=" text-lg">Add</h1>
              </div>
            </div>
          </div>
          <div className=" w-full bg-50 shadow-md rounded-2xl h-auto px-2 py-2">
            <div className=" flex justify-between">
              <div className=" flex gap-4 items-center">
                <div className=" w-16 h-16 bg-orange-500 rounded-2xl"></div>
                <div className=" flex flex-col">
                  <h1 className=" font-medium text-xl">Nourin</h1>
                  <h1>Biology student</h1>
                </div>
              </div>
              <div className=" w-20 text-white rounded-2xl px-4 flex items-center justify-center py-4 bg-violet-500">
                <h1 className=" text-lg">Add</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAss;
