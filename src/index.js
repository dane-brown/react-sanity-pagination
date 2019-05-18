import React from "react";
import ReactDOM from "react-dom";
import Pagination from "./pagination";

const App = () => {
  const action = () => {
    console.log("working");
  };
  return (
    <div>
      This is the app <span />
      <Pagination action={action} postsPerPage={3} postsLength={30} />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("root"));
