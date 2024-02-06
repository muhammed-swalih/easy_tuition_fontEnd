import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import { IconButton, InputAdornment } from "@mui/material";
import { MdOutlineFileUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
function SchoolDetails() {
  const location = useLocation();
  const studentDetails = location ? location.state : "nothing";

  const { token, id, username } = studentDetails;

  const navigate = useNavigate();
  const navToParentDetails = () => {
    navigate("/parentDetails", {
      state: { token: token, id: id, username: username },
    });
  };

  const [schoolName, setSchoolName] = useState("");
  const [schoolAds, setSchoolAds] = useState("");
  const [stdClass, setClass] = useState("");
  const [picUrl, setPicUrl] = useState("");

  const formData = new FormData();
  formData.append("studentId", id);
  formData.append("schoolName", schoolName);
  formData.append("schoolAdrs", schoolAds);
  formData.append("classes", stdClass);
  formData.append("img", picUrl);

  const postSchoolDetails = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/studSchool",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        navToParentDetails();
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data);
      navToParentDetails();
    }
  };

  useEffect(() => {
    console.log(studentDetails);
  }, []);
  return (
    <div className=" w-full h-screen px-6 flex items-center justify-center">
      <div className=" w-full h-full flex flex-col items-start justify-center gap-10">
        <div className=" flex flex-col gap-1 ">
          <div className=" w-24 h-24 bg-black rounded-2xl"></div>
          <div>
            <h1 className=" text-xl tracking-wide font-medium">
              School Details
            </h1>
            <h1 className=" text-xs text-gray-400">
              Please fill your school details
            </h1>
          </div>
        </div>
        <div className=" flex flex-col gap-3 w-full">
          <TextField
            onChange={(e) => setSchoolName(e.target.value)}
            fullWidth
            label="School name "
            type="text"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <TextField
            onChange={(e) => setSchoolAds(e.target.value)}
            fullWidth
            label="School Address"
            type="text"
            InputProps={{ style: { borderRadius: "10px" } }}
          />

          <TextField
            onChange={(e) => setClass(e.target.value)}
            label="Class"
            select
            InputProps={{ style: { borderRadius: "10px" } }}
          >
            <MenuItem value="five">5</MenuItem>
            <MenuItem value="six">6</MenuItem>
            <MenuItem value="seven">7</MenuItem>
            <MenuItem value="eight">8</MenuItem>
          </TextField>
          <TextField
            onChange={(e) => setPicUrl(e.target.files[0])}
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
          <div
            onClick={postSchoolDetails}
            className=" w-full rounded-xl h-12 bg-blue-500 flex items-center justify-center"
          >
            <h1 className=" text-white text-lg">Next</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolDetails;
