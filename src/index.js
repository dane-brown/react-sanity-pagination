import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [range, setRange] = useState("0...5");
  const buttons = [];
  const postsLength = this.props.postsLength;
  const postsPerPage = 5;
  const pages = Math.ceil(postsLength / postsPerPage);

  // Paginate Function to determine query range
  const PaginateButton = () => {
    const page = this.props.page + 1;

    const changePage = (page, range) => {
      setCurrentPage(page);
      // const formula = (page - 1) * postsPerPage;
      const firstNumber = postsPerPage * (page - 1);
      const secondNumber = firstNumber + postsPerPage;
      const newRange = `${firstNumber}...${secondNumber}`;
      setRange(newRange);
      if (page !== currentPage) {
        this.props.action(page, newRange);
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
    buttons.push(
      <PaginateButton page={i} key={i} action={this.props.action} />
    );
  }
  // Return Pagination
  return (
    <React.Fragment>
      {postsLength > 1 ? <ul className="pagePagination">{buttons}</ul> : ""}
    </React.Fragment>
  );
};

export default Pagination;
