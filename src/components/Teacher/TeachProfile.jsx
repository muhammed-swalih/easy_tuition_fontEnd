import React from "react";
import Navbar from "./Navbar";

function TeachProfile() {
  return (
    <div className=" w-full min-h-screen px-4 py-4">
      <Navbar />
      <div className="  mt-10 flex flex-col gap-10 ">
        <div className=" w-full flex justify-center">
          <h1 className=" text-2xl ">My Profile</h1>
        </div>
        <div className=" w-full h-auto flex justify-center rounded-full">
          <div className=" w-40 h-40 bg-orange-500 rounded-full  border-4 border-gray-300"></div>
        </div>
        <div className=" flex flex-col gap-5  w-full">
          <div className=" flex flex-col gap-1 items-center">
            <h1 className=" text-xl font-medium">Bio</h1>
            <h1 className=" text-center">
              Nice to have you back,what an exiting day! Get ready and continue
              teaching, Have an a nice dayNice to have you back, what an exiting
              day!Get ready and continue teaching, Have an a nice day Nice to
              have you back,what an exiting day! Get ready and continue
              teaching, Have an a nice day
            </h1>
          </div>
          <div className="px-4 flex flex-col gap-1">
            <h1 className=" text-xl font-medium">Email</h1>
            <h1>faryhn@gmail.com</h1>
          </div>
          <div className="px-4 flex flex-col gap-1">
            <h1 className=" text-xl font-medium">Phone</h1>
            <h1>7736447760</h1>
          </div>
          <div className="px-4 flex flex-col gap-1">
            <h1 className=" text-xl font-medium">Bank details</h1>
            <div>
              <div className=" flex gap-1">
                <h1>Account no: </h1>
                <h1>0000000000000</h1>
              </div>
              <div className=" flex gap-1">
                <h1>Account holder name: </h1>
                <h1>shijas muhammed</h1>
              </div>
              <div className=" flex gap-1">
                <h1>Bank Name: </h1>
                <h1>Canara bank</h1>
              </div>
              <div className=" flex gap-1">
                <h1> IFSE: </h1>
                <h1>SBI0023</h1>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-5 px-4">
            <h1 className=" text-xl font-medium">Classes you teach</h1>
            <div className=" flex flex-col">
              <h1 className=" text-xl font-medium">Class 8</h1>
              <h1>CBSE</h1>
              <div className=" flex items-center gap-2">
                <h1>Physics</h1>
                <h1>Arabic</h1>
                <h1>English</h1>
              </div>
            </div>
            <div className=" flex flex-col">
              <h1 className=" text-xl font-medium">Class 8</h1>
              <h1>CBSE</h1>
              <div className=" flex items-center gap-2">
                <h1>Physics</h1>
                <h1>Arabic</h1>
                <h1>English</h1>
              </div>
            </div>
            <div className=" flex flex-col">
              <h1 className=" text-xl font-medium">Class 8</h1>
              <h1>CBSE</h1>
              <div className=" flex items-center gap-2">
                <h1>Physics</h1>
                <h1>Arabic</h1>
                <h1>English</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeachProfile;
