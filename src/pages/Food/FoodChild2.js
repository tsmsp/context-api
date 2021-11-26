import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ContextComponent } from "../../store/ContextComponent";

const FoodChild2 = () => {
  const contextData = useContext(ContextComponent);
  const history = useHistory();
  return (
    <>
      {/* useContext사용 */}
      <div>
        <h1>Food Child2</h1>
        <p>This is Food child2</p>
        <p>my favorite food is {contextData.favoriteFood}</p>
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          go Home
        </button>
      </div>

      {/* Context Consumer사용 */}
      <ContextComponent.Consumer>
        {(value) => (
          <>
            <h1>Movie</h1>
            <p>This is Movie</p>
            <p>my favorite food is {value.favoriteMovie}</p>
            <button
              onClick={() => {
                history.push("/");
              }}
            >
              go Home
            </button>
          </>
        )}
      </ContextComponent.Consumer>
    </>
  );
};
export default FoodChild2;
