import React, { useState } from "react";

function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = props.postsPerPage;
  const [range, setRange] = useState(`0...${postsPerPage}`);
  const buttons = [];
  const postsLength = props.postsLength;
  const pages = Math.ceil(postsLength / postsPerPage);

  // Paginate Function to determine query range
  const PaginateButton = props => {
    const page = props.page + 1;

    const changePage = (page, range) => {
      setCurrentPage(page);
      // const formula = (page - 1) * postsPerPage;
      const firstNumber = postsPerPage * (page - 1);
      const secondNumber = firstNumber + postsPerPage;
      const newRange = `${firstNumber}...${secondNumber}`;
      setRange(newRange);
      if (page !== currentPage) {
        props.action(page, newRange);
      } else {
        console.log("Returning nothing because already on page 🕵️‍!");
      }
    };
    return (
      <li
        className={page === currentPage ? "active" : ""}
        onClick={() => changePage(page, range)}
      >
        {page}
      </li>
    );
  };

  // Assign Buttons
  for (let i = 0; i < pages; i++) {
    buttons.push(<PaginateButton page={i} key={i} action={props.action} />);
  }
  // Return Pagination
  return (
    <React.Fragment>
      {postsLength > 1 ? <ul className="pagePagination">{buttons}</ul> : ""}
    </React.Fragment>
  );
}

export default Pagination;
