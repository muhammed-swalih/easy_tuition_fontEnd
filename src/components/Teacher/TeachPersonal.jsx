import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { MdOutlineFileUpload } from "react-icons/md";
import { MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
function TeachPersonal() {
  const location = useLocation();
  const loggedTeacher = location ? location.state : "nothin";
  const navigate = useNavigate();

  const { token, username, id } = loggedTeacher;

  const [dob, setDob] = useState("");
  const [pLang, setPLang] = useState("");
  const [sLang, setSLang] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [picUrl, setPicUrl] = useState("");

  const navCollegeDetails = () => {
    navigate("/teachCollege", {
      state: { username: username, id: id, token: token },
    });
  };

  const formData = new FormData();
  formData.append("teacherId", id);
  formData.append("dob", dob);
  formData.append("primaryLang", pLang);
  formData.append("secondaryLang", sLang);
  formData.append("address", address);
  formData.append("state", state);
  formData.append("pincode", pincode);
  formData.append("img", picUrl);
  const postPersonalInfo = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/teachPersonal",
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
        navCollegeDetails();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const log = {
    id,
    dob,
    pLang,
    sLang,
    address,
    state,
    pincode,
    picUrl,
  };

  useEffect(() => {
    console.log(token, username, id);
    console.log(log);
  }, [log]);

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
            fullWidth
            label=""
            type="date"
            InputProps={{ style: { borderRadius: "10px" } }}
            onChange={(e) => setDob(e.target.value)}
          />

          <TextField
            label="Primary Language"
            select
            InputProps={{ style: { borderRadius: "10px" } }}
            onChange={(e) => setPLang(e.target.value)}
            value={pLang}
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Malayalam">Malayalam</MenuItem>
            <MenuItem value="Hindi">Hindi</MenuItem>
            <MenuItem value="Tamil">Tamil</MenuItem>
          </TextField>

          <TextField
            label="Secondary Language"
            value={sLang}
            select
            InputProps={{ style: { borderRadius: "10px" } }}
            onChange={(e) => setSLang(e.target.value)}
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Malayalam">Malayalam</MenuItem>
            <MenuItem value="Hindi">Hindi</MenuItem>
            <MenuItem value="Tamil">Tamil</MenuItem>
          </TextField>

          <TextField
            fullWidth
            label="Address"
            type="text"
            InputProps={{ style: { borderRadius: "10px" } }}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            label="State"
            value={state}
            select
            InputProps={{ style: { borderRadius: "10px" } }}
            onChange={(e) => setState(e.target.value)}
          >
            <MenuItem value="Kerala">Kerala</MenuItem>
            <MenuItem value="Karnataka">Karnataka</MenuItem>
            <MenuItem value="Tamil nadu">Tamil Nadu</MenuItem>
            <MenuItem value="Jaipur">jaipur</MenuItem>
          </TextField>
          <div className=" flex gap-3">
            <TextField
              fullWidth
              label="Pincode"
              type="text"
              InputProps={{ style: { borderRadius: "10px" } }}
              onChange={(e) => setPincode(e.target.value)}
            />
            <TextField
              fullWidth
              name="file"
              type="file"
              onChange={(e) => setPicUrl(e.target.files[0])}
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
            onClick={postPersonalInfo}
            className=" w-full rounded-xl h-12 bg-blue-500 flex items-center justify-center"
          >
            <h1 className=" text-white text-lg">Next</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeachPersonal;
