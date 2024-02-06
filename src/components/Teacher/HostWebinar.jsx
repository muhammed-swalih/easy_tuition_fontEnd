import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const CustomTextField = ({ label, type }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <TextField
      label={focused ? label : type}
      type={type}
      InputProps={{ style: { borderRadius: "10px" } }}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

function HostWebinar() {
  return (
    <div className=" w-full min-h-screen py-4 px-4">
      <Navbar />
      <div className=" flex flex-col gap-8 mt-5">
        <h1 className=" text-3xl">Host a webinar </h1>
        <div className=" flex flex-col gap-4">
          <div className=" flex justify-between items-center gap-4">
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
            label="Topic name"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <textarea
            className="border border-1 border-gray-400 rounded-[10px] px-3"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Introduction"
          ></textarea>
          <div className=" flex flex-col gap-1">
            <h1>Amount to be cancelled</h1>
            <TextField
              label="amount"
              InputProps={{
                style: { borderRadius: "10px", width: "150px" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <MdOutlineCurrencyRupee />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <h1>25% will be charged as commission</h1>
            <FormControlLabel
              control={<Checkbox />}
              label="I accept the terms & conditions"
            />
          </div>
          <div className=" w-full h-14 bg-violet-500 text-white flex items-center justify-center rounded-2xl">
            <h1>Host</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostWebinar;
