# react-sanity-pagination

> React pagination for Sanity.io

[![NPM](https://img.shields.io/npm/v/react-sanity-pagination.svg)](https://www.npmjs.com/package/react-sanity-pagination) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-sanity-pagination
```

## Usage

```jsx
import React, { useState } from "react";

// Import Pagination
import Pagination from "react-sanity-pagination";

function Example() {
  const [paginationItems, setPaginationItems] = useState([])
  // Your action function returns two props {page, range}.
  // 1 - Page is the current active page.
  // 2 - Range is the range used in the Sanity.io selective query.
  const action = (page, range) => {
    // This function will be called when pagination is in action, using Sanity.io selectives you query your new data and update your state
    const query = `*[_type == "post"] | order(_createdAt desc) {_id, body, mainImage, slug, title, category}[${range}]`;
    // Use Sanity to fetch new data and then update your state!
    sanityClient.fetch(query).then(res => setPaginationItems(res));
  }
  return (
    // In order for pagination to work you need to provide 3 props.
    // 1 - Action which is stated prior.
    // 2 - postsPerPage - how many posts you want per page
    // 3 - postsLength - the length of your data that is going to be paginated. This can be done with Array.length
    <Pagination action={action} postsPerPage={3} postsLength={paginationItems.length} />;
  )
}

export default Example;
```

## License

MIT © [dane-brown](https://github.com/dane-brown)
