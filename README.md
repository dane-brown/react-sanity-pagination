# 🌵React Sanity Pagination

> React pagination for Sanity.io

[![NPM](https://img.shields.io/npm/v/react-sanity-pagination.svg)](https://www.npmjs.com/package/react-sanity-pagination) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
<a href="https://npmjs.com/react-sanity-pagination"><img src="https://img.shields.io/npm/dt/react-sanity-pagination.svg" alt="NPM Total Downloads"></a>

## Install

```bash
npm install --save react-sanity-pagination
```

## Prerequisite

This package requires the use of Sanity.io, the whole concept of how pagination works is using sanity's selective querying. EG: `sanity.fetch('[_type == "blog"][0...10]')`

## Demo

[![Edit React Sanity Pagination 🌵](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-sanity-pagination-0pzik?fontsize=14&hidenavigation=1&view=preview)

## Basic Usage

```jsx
import React, { useState } from "react";
// Import sanity
import sanityClient from './sanity';
// Import Pagination
import Pagination from "react-sanity-pagination";

function Example() {
  const postsPerPage = 3;
  const [dataLength, setDataLength] = useState(0);
  const [paginationItems, setPaginationItems] = useState([])

  // Fetch all your data initially
  useEffect(() => {
    sanityClient
      .fetch('*[_type == "dummyData"] | order(_createdAt) ')
      .then(res => {
        setDataLength(res.length);
        setPaginationItems(res.slice(0, postsPerPage));
      })
}, []);

  // Your action function returns two props {page, range}.
  // 1 - Page is the current active page.
  // 2 - Range is the range used in the Sanity.io selective query.
  const action = (page, range) => {
    // This function will be called on paginate, using Sanity.io selectives you query your new data and update your state
    sanityClient.fetch(`*[_type == "dummyData"] | order(_createdAt) [${range}]`).then(res => setPaginationItems(res));
  }
  return (
    // In order for pagination to work you need to provide 3 props.
    // 1 - Action which is stated prior.
    // 2 - postsPerPage - how many posts you want per page
    // 3 - postsLength - the length of your data that is going to be paginated. This can be done with Array.length
    <Pagination action={action} postsPerPage={postsPerPage} postsLength={dataLength} />;
  )
}

export default Example;
```

## Props

| Name                        | Required | Type     |
| --------------------------- | -------- | -------- |
| action                      | Yes      | Function |
| postsPerPage                | Yes      | Number   |
| postsLength                 | Yes      | Number   |
| nextButton                  | No       | Boolean  |
| nextButtonLabel             | No       | String   |
| prevButton                  | No       | Boolean  |
| prevButtonLabel             | No       | String   |
| jumpStartButton             | No       | Boolean  |
| jumpStartButtonLabel        | No       | String   |
| jumpEndButton               | No       | Boolean  |
| jumpEndButtonLabel          | No       | String   |
| jumpFiveForwardButton       | No       | Boolean  |
| jumpFiveForwardButtonLabel  | No       | String   |
| jumpTenForwardButton        | No       | Boolean  |
| jumpTenForwardButtonLabel   | No       | String   |
| jumpFiveBackwardButton      | No       | Boolean  |
| jumpFiveBackwardButtonLabel | No       | String   |
| jumpTenBackwardButton       | No       | Boolean  |
| jumpTenBackwardButtonLabel  | No       | String   |

## License

MIT © [dane-brown](https://github.com/dane-brown)
