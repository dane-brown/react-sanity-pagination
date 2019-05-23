import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Pagination from "./pagination";
import client from "./sanity";
import "./themes/material.css";

const itemsToSend = [];
const App = () => {
  const postsPerPage = 3;
  const [items, setItems] = useState([]);

  // Fetch your all data initially
  useEffect(() => {
    client.fetch('*[_type == "dummyData"] | order(_createdAt) ').then(res => {
      itemsToSend.push(...res);
    });
  }, []);

  // Create your action which will be called on paginate
  const action = (page, range, items) => {
    console.log(`Page: ${page} 📃, Range: ${range} 🚀, Items: ${items} 🌀`);
    setItems(items);
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
        {items.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })}
      </div>

      {/* Props required: action, postsPerPage, postsLength */}
      <Pagination
        paginationStyle={"centerMode"}
        items={itemsToSend}
        action={action}
        postsPerPage={postsPerPage}
        nextButton={true}
        prevButton={true}
        nextButtonLabel={"👉🏻"}
        prevButtonLabel={"👈🏻"}
      />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("root"));
