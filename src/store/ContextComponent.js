import React, { createContext } from "react";

export const ContextComponent = createContext();

const ContextTitle = (props) => {
  const infos = {
    favoriteFood: "apple",
    favoriteMovie: "superman"
  };

  return (
    <ContextComponent.Provider value={infos}>
      {props.children}
    </ContextComponent.Provider>
  );
};

export default ContextTitle;
