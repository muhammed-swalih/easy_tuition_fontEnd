import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { MdOutlineFileUpload } from "react-icons/md";
import { MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
function StudPersonal() {
  const location = useLocation();
  const studentDetails = location ? location.state : "nothing";

  const { token, id, username } = studentDetails;

  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [pLang, setPlang] = useState("");
  const [sLang, setSlang] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [dist, setDist] = useState("");
  const [picUrl, setPicUrl] = useState("");

  const navigate = useNavigate();

  const navToSchoolDetails = () => {
    navigate("/schoolDetails", {
      state: { token: token, id: id, username: username },
    });
  };
  const formData = new FormData();
  formData.append("studentId", id);
  formData.append("gender", gender);
  formData.append("dob", date);
  formData.append("primaryLang", pLang);
  formData.append("secondaryLang", sLang);
  formData.append("address", address);
  formData.append("state", state);
  formData.append("district", dist);
  formData.append("pincode", pincode);
  formData.append("img", picUrl);

  const postStudPersonalDetails = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/studPersonal",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        navToSchoolDetails();
      }
    } catch (error) {
      console.log(error.response.data);
      alert(error.response.data);
      navToSchoolDetails();
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
              Personal Information
            </h1>
            <h1 className=" text-xs text-gray-400">
              Please fill your personal details
            </h1>
          </div>
        </div>
        <div className=" flex flex-col gap-3 w-full">
          <TextField
            onChange={(e) => setGender(e.target.value)}
            fullWidth
            select
            label="Gender"
            InputProps={{ style: { borderRadius: "10px" } }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>

          <TextField
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            label=""
            type="date"
            InputProps={{ style: { borderRadius: "10px" } }}
          />

          <TextField
            onChange={(e) => setPlang(e.target.value)}
            label="Primary Language"
            select
            InputProps={{ style: { borderRadius: "10px" } }}
          >
            <MenuItem value="EN">English</MenuItem>
            <MenuItem value="ML">Malayalam</MenuItem>
            <MenuItem value="HI">Hindi</MenuItem>
            <MenuItem value="TM">Tamil</MenuItem>
          </TextField>

          <TextField
            onChange={(e) => setSlang(e.target.value)}
            label="Secondary Language"
            select
            InputProps={{ style: { borderRadius: "10px" } }}
          >
            <MenuItem value="EN">English</MenuItem>
            <MenuItem value="ML">Malayalam</MenuItem>
            <MenuItem value="HI">Hindi</MenuItem>
            <MenuItem value="TM">Tamil</MenuItem>
          </TextField>

          <TextField
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            label="Address"
            type="text"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <TextField
            onChange={(e) => setState(e.target.value)}
            label="State"
            select
            InputProps={{ style: { borderRadius: "10px" } }}
          >
            <MenuItem value="KL">Kerala</MenuItem>
            <MenuItem value="KR">Karnataka</MenuItem>
            <MenuItem value="TN">Tamil Nadu</MenuItem>
            <MenuItem value="JP">jaipur</MenuItem>
          </TextField>
          <TextField
            onChange={(e) => setDist(e.target.value)}
            label="District"
            select
            InputProps={{ style: { borderRadius: "10px" } }}
          >
            <MenuItem value="KL">Palakkad</MenuItem>
            <MenuItem value="KR">Kozhikkod</MenuItem>
            <MenuItem value="TN">Kollam</MenuItem>
            <MenuItem value="JP">Kottayam</MenuItem>
          </TextField>
          <div className=" flex gap-3">
            <TextField
              onChange={(e) => setPincode(e.target.value)}
              fullWidth
              label="Pincode"
              type="text"
              InputProps={{ style: { borderRadius: "10px" } }}
            />
            <TextField
              onChange={(e) => setPicUrl(e.target.files[0])}
              fullWidth
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
          </div>
          <div
            onClick={postStudPersonalDetails}
            className=" w-full rounded-xl h-12 bg-blue-500 flex items-center justify-center"
          >
            <h1 className=" text-white text-lg">Next</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudPersonal;
