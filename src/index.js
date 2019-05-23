import React from "react";
import ReactDOM from "react-dom";
import Pagination from "./pagination";
import "./themes/material.css";

const App = () => {
  const action = (page, range) => {
    console.log("Home Action", page, range);
  };
  return (
    <div>
      <Pagination
        paginationStyle={"default"}
        action={action}
        postsPerPage={10}
        postsLength={65}
        nextButton={true}
        nextButtonLabel={""}
        prevButton={true}
        prevButtonLabel={""}
        jumpStartButton={true}
        jumpStartButtonLabel={""}
        jumpFiveForwardButton={true}
        jumpFiveForwardButtonLabel={""}
        jumpTenForwardButton={true}
        jumpTenForwardButtonLabel={""}
        jumpFiveBackwardButton={true}
        jumpFiveBackwardButtonLabel={""}
        jumpTenBackwardButton={true}
        jumpTenBackwardButtonLabel={""}
        jumpEndButton={true}
        jumpEndButtonLabel={""}
      />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("root"));
