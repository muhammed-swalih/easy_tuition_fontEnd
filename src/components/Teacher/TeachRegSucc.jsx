import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function TeachRegSucc() {
  const location = useLocation();
  const teacherDetails = location ? location.state : "nothing";
  const { token, id, username } = teacherDetails;
  const navigate = useNavigate();

  const navToRegFail = () => {
    navigate("/teachRegFail", {
      state: { token: token, id: id, username: username },
    });
  };

  useEffect(() => {
    console.log(teacherDetails);
  }, [teacherDetails]);

  return (
    <div className=" w-full min-h-screen px-6 py-10">
      <div className=" w-full h-full flex justify-center">
        <div className=" w-full flex justify-center h-auto">
          <div className=" flex flex-col items-center">
            <h1 className=" text-2xl font-medium text-violet-400">
              Teacher Registration Succesful
            </h1>
            <h1 className=" text-center text-gray-500">
              Thank you for joining our education platform as a teacher! We're
              excited to have you as part of our educational community.
            </h1>
          </div>
        </div>
      </div>
      <div className=" w-full my-10 h-64 bg-black"></div>
      <div className=" w-full flex flex-col gap-7">
        <div className="flex flex-col">
          <h1 className=" text-2xl ">What's Next?</h1>
          <h1 className=" text-gray-500 text-sm">
            Your registration request has been successfully submitted. Our
            administrators will review your application to ensure it aligns with
            our platform's guidelines and objectives.
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className=" flex flex-col gap-2">
            <h1 className=" text-2xl">In the Meaning:</h1>
            <h1 className=" text-sm text-gray-500">
              1. Explore Resources: Familiarize yourself with our platform's
              resources, including our courses, teaching tools, and community
              features.
            </h1>
          </div>
          <h1 className=" text-sm text-gray-500">
            2.Profile Completion: Consider completing your profile with a
            professional picture and a brief biography. A complete profile
            enhances your credibility and helps students get to know you better
          </h1>
          <h1 className=" text-sm text-gray-500">
            3.Content Creation: If you plan to create courses or educational
            content, start preparing your materials and syllabus.
          </h1>
        </div>
      </div>
      <div
        onClick={navToRegFail}
        className=" w-full rounded-xl h-12 bg-violet-500 flex items-center justify-center my-10"
      >
        <h1 className=" text-white text-lg">Next</h1>
      </div>
    </div>
  );
}

export default TeachRegSucc;
