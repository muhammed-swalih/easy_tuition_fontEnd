import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { MenuItem, InputAdornment, IconButton } from "@mui/material";
import { MdOutlineFileUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
function TeachCollege() {
  const location = useLocation();
  const teacherDetails = location ? location.state : "nothing";
  const navigate = useNavigate();

  const { token, id, username } = teacherDetails;

  const [collegeName, setCollegeName] = useState("");
  const [colAddress, setCollegeAddress] = useState("");
  const [courses, setCourse] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [joined, setJoinedYear] = useState("");
  const [passOutYear, setGraduate] = useState("");
  const [collegeId, setIdProof] = useState("");

  const formData = new FormData();
  formData.append("teacherId", id);
  formData.append("collegeName", collegeName);
  formData.append("colAddress", colAddress);
  formData.append("courses", courses);
  formData.append("currentYear", currentYear);
  formData.append("joined", joined);
  formData.append("passOutYear", passOutYear);
  formData.append("img", collegeId);

  const postCollegeDetails = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/teachCollege",
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
        navChooseClasss();
      }
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data != null) alert(error.response.data);
    }
  };

  const navChooseClasss = () => {
    navigate("/teachChooseClass", {
      state: { token: token, id: id, username: username },
    });
  };

  const log = {
    collegeName,
    colAddress,
    courses,
    joined,
    currentYear,
    passOutYear,
    collegeId,
  };

  useEffect(() => {
    console.log(log);
  }, [log]);
  return (
    <div className="w-full h-screen px-6 flex items-center justify-center ">
      <div className=" w-full h-full flex flex-col items-start justify-center gap-10">
        <div className=" flex flex-col gap-1 ">
          <div className=" w-24 h-24 bg-black rounded-2xl"></div>
          <div>
            <h1 className=" text-xl tracking-wide font-medium">
              College Details
            </h1>
            <h1 className=" text-xs text-gray-400">
              Please fill your personal details
            </h1>
          </div>
        </div>
        <div className=" flex flex-col gap-3 w-full">
          <TextField
            onChange={(e) => setCollegeName(e.target.value)}
            fullWidth
            label="College Name"
            type="text"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <TextField
            onChange={(e) => setCollegeAddress(e.target.value)}
            fullWidth
            label="College Address"
            type="text"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <TextField
            label="course"
            select
            InputProps={{ style: { borderRadius: "10px" } }}
            onChange={(e) => setCourse(e.target.value)}
            value={courses}
          >
            <MenuItem value="BCA">BCA</MenuItem>
            <MenuItem value="BCOM">bcom</MenuItem>
            <MenuItem value="BBA">BBA</MenuItem>
            <MenuItem value="BSC">bsc</MenuItem>
          </TextField>
          <TextField
            onChange={(e) => setCurrentYear(e.target.value)}
            fullWidth
            label="Current Year"
            type="text"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <TextField
            onChange={(e) => setJoinedYear(e.target.value)}
            fullWidth
            label="Joined Year"
            type="text"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <TextField
            onChange={(e) => setGraduate(e.target.value)}
            fullWidth
            label="Graduate Year"
            type="text"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <TextField
            onChange={(e) => setIdProof(e.target.files[0])}
            fullWidth
            name="file"
            type="file"
            InputProps={{
              style: { borderRadius: "10px" },
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
            onClick={postCollegeDetails}
            className=" w-full rounded-xl h-12 bg-blue-500 flex items-center justify-center"
          >
            <h1 className=" text-white text-lg">Next</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeachCollege;
