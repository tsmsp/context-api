import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ContextComponent } from "../../store/ContextComponent";

const MovieChild100 = () => {
  const contextData = useContext(ContextComponent);
  const history = useHistory();
  return (
    <>
      <h1>Movie child100</h1>
      <p>this is movie child 100</p>
      <p>my favorite movie is {contextData.favoriteMovie}</p>
      <p>my favorite movie is {contextData.favoriteFruit}</p>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        go Home
      </button>
    </>
  );
};

export default MovieChild100;
