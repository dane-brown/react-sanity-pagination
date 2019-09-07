# 🌵React Sanity Pagination

> React pagination for Sanity.io

[![NPM](https://img.shields.io/npm/v/react-sanity-pagination.svg)](https://www.npmjs.com/package/react-sanity-pagination) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
<a href="https://npmjs.com/react-sanity-pagination"><img src="https://img.shields.io/npm/dt/react-sanity-pagination.svg" alt="NPM Total Downloads"></a>

## Install

```bash
npm install --save react-sanity-pagination
```

## Demo

[![Edit React Sanity Pagination 🌵](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-sanity-pagination-0pzik?fontsize=14&hidenavigation=1&view=preview)

## Basic Usage

```jsx
import React, { useState, useEffect } from "react";
// Import Pagination
import Pagination from "react-sanity-pagination";
// Import Querying tool
import client from "./sanity";

// Create an array outside of your component, this is done so the initial data never changes
const itemsToSend = [];
const Example = () => {
  // Create a variable for the amount of posts you want per page
  const postsPerPage = 3;
  // Create state which will be updated every time you paginate
  const [items, setItems] = useState([]);

  // Fetch all data on load
  useEffect(() => {
    client.fetch('*[_type == "dummyData"] | order(_createdAt) ').then(res => {
      // Push your data to the static array
      itemsToSend.push(...res);
    });
  }, []);

  // Create an action which will be called on paginate
  // This will return the current Page, Range of items and the Items to render
  const action = (page, range, items) => {
    console.log(page, range, items);
    // Update State
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
      // Map through your data
      <div className="paginationContent">
        {items.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })}
      </div>
      // Assign your props // Required props: action, items, postsPerPage
      <Pagination
        items={itemsToSend}
        action={action}
        postsPerPage={postsPerPage}
      />
    </div>
  );
};

export default Example;
```

## Props

| Name                        | Required | Type                                   |
| --------------------------- | -------- | -------------------------------------- |
| action                      | Yes      | Function                               |
| postsPerPage                | Yes      | Number                                 |
| postsLength                 | Yes      | Number                                 |
| paginationStyle             | No       | ("default", "activePage", "centerMode) |
| nextButton                  | No       | Boolean                                |
| nextButtonLabel             | No       | String                                 |
| prevButton                  | No       | Boolean                                |
| prevButtonLabel             | No       | String                                 |
| jumpStartButton             | No       | Boolean                                |
| jumpStartButtonLabel        | No       | String                                 |
| jumpEndButton               | No       | Boolean                                |
| jumpEndButtonLabel          | No       | String                                 |
| jumpFiveForwardButton       | No       | Boolean                                |
| jumpFiveForwardButtonLabel  | No       | String                                 |
| jumpTenForwardButton        | No       | Boolean                                |
| jumpTenForwardButtonLabel   | No       | String                                 |
| jumpFiveBackwardButton      | No       | Boolean                                |
| jumpFiveBackwardButtonLabel | No       | String                                 |
| jumpTenBackwardButton       | No       | Boolean                                |
| jumpTenBackwardButtonLabel  | No       | String                                 |
| className  | No       | String                                 |

## Pagination Styles

### Default

![alt text](https://raw.githubusercontent.com/dane-brown/react-sanity-pagination/master/public/default.png)

### activePage

![alt text](https://raw.githubusercontent.com/dane-brown/react-sanity-pagination/master/public/activePage.png)

### centerMode

![alt text](https://raw.githubusercontent.com/dane-brown/react-sanity-pagination/master/public/centerMode.png)

## License

MIT © [dane-brown](https://github.com/dane-brown)
