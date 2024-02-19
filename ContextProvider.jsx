// import { useState } from "react";
// import { MyContext } from "./Context";

// const [ids, setIds] = useState("this is from my context ");

// const updateId = (newId) => {
//   setIds(newId);
// };

// export const MyProvider = ({ children }) => {
//   return (
//     <MyContext.Provider value={{ ids }}>
//       {(children, updateId)}
//     </MyContext.Provider>
//   );
// };

import React, { useState } from "react";
import { MyContext } from "./Context";

export function ContextProvider({ children }) {
  const [ids, setIds] = useState("this is my id");

  const updateId = (newId) => {
    setIds(newId);
  };

  return (
    <MyContext.Provider value={{ ids, updateId }}>
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;
