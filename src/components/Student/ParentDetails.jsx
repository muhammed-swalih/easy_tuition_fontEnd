import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import { IconButton, InputAdornment } from "@mui/material";
import { MdOutlineFileUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
function ParentDetails() {
  const location = useLocation();
  const studentDetails = location ? location.state : "nothing";

  const { token, id, username } = studentDetails;

  const navigate = useNavigate();

  const navToCongrats = () => {
    navigate("/congrats", {
      state: { token: token, id: id, username: username },
    });
  };

  const [guaridian, setGuardian] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const postParentDetails = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/studParent",
        {
          studentId: id,
          parentName: name,
          guardian: guaridian,
          email: email,
          phone: phone,
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
        navToCongrats();
      }
    } catch (error) {
      console.log(error.response.data);
      alert(error.response.data);
      navToCongrats();
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
              Parent Details
            </h1>
            <h1 className=" text-xs text-gray-400">
              Please fill your Parent Details
            </h1>
          </div>
        </div>
        <div className=" flex flex-col gap-3 w-full">
          <TextField
            onChange={(e) => setGuardian(e.target.value)}
            label="choose guaridian"
            select
            InputProps={{ style: { borderRadius: "10px" } }}
          >
            <MenuItem value="Mother">Father</MenuItem>
            <MenuItem value="Father">Mother</MenuItem>
          </TextField>
          <TextField
            onChange={(e) => setName(e.target.value)}
            fullWidth
            label="Guardian name "
            type="text"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            label="Guardian Email"
            type="text"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <TextField
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            label="Guardian Phone"
            type="text"
            InputProps={{ style: { borderRadius: "10px" } }}
          />

          <div
            onClick={postParentDetails}
            className=" w-full rounded-xl h-12 bg-blue-500 flex items-center justify-center"
          >
            <h1 className=" text-white text-lg">Next</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentDetails;
