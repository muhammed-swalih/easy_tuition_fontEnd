import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
function TeacherBank() {
  const location = useLocation();

  const [accNo, setAccNo] = useState("");
  const [hodlerName, setHolderName] = useState("");
  const [bank, setBank] = useState("");
  const [ifsc, setIfsc] = useState("");

  const teacherDetails = location ? location.state : "nothing";

  const { id, token, username } = teacherDetails;

  const navigate = useNavigate();
  const navToIntro = () => {
    navigate("/teachIntro", {
      state: { id: id, token: token, username: username },
    });
  };

  const postBankDetails = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/teachBank",
        {
          teacherId: id,
          bankHolderName: hodlerName,
          bankName: bank,
          accNo: accNo,
          ifsc: ifsc,
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
        navToIntro();
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    console.log(teacherDetails);
  }, []);
  return (
    <div className=" w-full min-h-screen px-6 py-10 flex  justify-center">
      <div className=" w-full h-full flex flex-col gap-10">
        <div className=" flex flex-col gap-5">
          <div className=" w-32 h-32 flex items-center justify-center rounded-full bg-black"></div>
          <div>
            <h1 className=" text-3xl font-medium">Bank Details</h1>
            <h1 className=" text-gray-400">Please provide the bank details</h1>
          </div>
        </div>
        <div className=" flex w-full flex-col gap-2 ">
          <TextField
            onChange={(e) => setAccNo(e.target.value)}
            label="Account no"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <TextField
            onChange={(e) => setHolderName(e.target.value)}
            label="Holder name"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <TextField
            onChange={(e) => setBank(e.target.value)}
            label="Bank"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
          <TextField
            onChange={(e) => setIfsc(e.target.value)}
            label="IFCE"
            InputProps={{ style: { borderRadius: "10px" } }}
          />
        </div>
        <div
          onClick={postBankDetails}
          className=" w-full rounded-xl h-12 bg-violet-500 flex items-center justify-center"
        >
          <h1 className=" text-white text-lg">Next</h1>
        </div>
      </div>
    </div>
  );
}

export default TeacherBank;
