import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Pagination from "./pagination";
import client from "./sanity";
import "./themes/material.css";

const App = () => {
  const postsPerPage = 4;
  const [dataLength, setDataLength] = useState(0);
  const [data, setData] = useState([]);

  // Fetch Initial Data from Sanity
  // Assign length & slice first range of items to your variables for initial load.
  useEffect(() => {
    client
      .fetch('*[_type == "dummyData"] | order(_createdAt) ')
      .then(res => {
        setDataLength(res.length);
        setData(res.slice(0, postsPerPage));
        console.log("fetching initial");
      })
      .catch(err => {
        console.error("Oh no, error occured: ", err);
      });
  }, []);

  // Create your action which will be called on paginate
  const action = (page, range) => {
    console.log(page, range);
    // Use the range provided to query your next set of data
    client
      .fetch(`*[_type == "dummyData"] | order(_createdAt) [${range}]`)
      .then(res => setData(res));
  };

  return (
    <div className="App">
      <h1>
        React Sanity Pagination Example{" "}
        <span aria-label="🌵" role="img">
          🌵
        </span>
      </h1>

      {/* Map Your Items */}
      <div className="paginationContent">
        {data.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })}
      </div>

      {/* Props required: action, postsPerPage, postsLength */}
      <Pagination
        paginationStyle={"default"}
        action={action}
        postsPerPage={postsPerPage}
        postsLength={dataLength}
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
