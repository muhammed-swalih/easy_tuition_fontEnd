import React from "react";
import ReactDOM from "react-dom/client";
import "../../index.css";
import LiveMain from "./LiveMain";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LivePage() {
  return (
    <div>
      <ToastContainer
        toastClassName={() =>
          "relative flex py-4 px-3 rounded overflow-hidden cursor-pointer bg-white shadow-lg"
        }
        bodyClassName={() => "text-black text-base font-normal"}
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeButton={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <LiveMain />
    </div>
  );
}

export default LivePage;