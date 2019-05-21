import React, { useState } from "react";
import PaginatePrev from "./paginatePrev";
import PaginateNext from "./paginateNext";
import PaginateFiveForward from "./paginateFiveForward";
import PaginateTenForward from "./paginateTenForward";
import PaginateFiveBackward from "./paginateFiveBackward";
import PaginateTenBackward from "./paginateTenBackward";
import PaginateEnd from "./paginateEnd";
import PaginateStart from "./paginateStart";

import "./themes/material.css";

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
    return (
      <button
        className={page === currentPage ? "active" : ""}
        onClick={() => changePage(page, range)}
      >
        {page}
      </button>
    );
  };

  const changePage = (page, range) => {
    setCurrentPage(page);
    const firstNumber = postsPerPage * (page - 1);
    const secondNumber = firstNumber + postsPerPage;
    const newRange = `${firstNumber}...${secondNumber}`;
    setRange(newRange);
    if (page !== currentPage) {
      props.action(page, newRange);
    } else {
      // Returning nothing because already on page 🕵️‍!
    }
  };

  // Assign Buttons
  for (let i = 0; i < pages; i++) {
    buttons.push(<PaginateButton page={i} key={i} action={props.action} />);
  }
  // Return Pagination
  return (
    <React.Fragment>
      {postsLength > 1 ? (
        <ul
          className={
            "pagePagination " +
            (props.theme === "Material" ? "material-theme" : "")
          }
        >
          <PaginateStart
            jumpStartButton={props.jumpStartButton}
            jumpStartButtonLabel={props.jumpStartButtonLabel}
            currentPage={currentPage}
            changePage={changePage}
            pages={pages}
          />
          <PaginateTenBackward
            jumpTenBackwardButton={props.jumpTenBackwardButton}
            jumpTenBackwardButtonLabel={props.jumpTenBackwardButtonLabel}
            currentPage={currentPage}
            changePage={changePage}
            pages={pages}
          />
          <PaginateFiveBackward
            jumpFiveBackwardButton={props.jumpFiveBackwardButton}
            jumpFiveBackwardButtonLabel={props.jumpFiveBackwardButtonLabel}
            currentPage={currentPage}
            changePage={changePage}
            pages={pages}
          />
          <PaginatePrev
            prevButton={props.prevButton}
            currentPage={currentPage}
            changePage={changePage}
            prevButtonLabel={props.prevButtonLabel}
          />
          {buttons}
          <PaginateNext
            nextButton={props.nextButton}
            currentPage={currentPage}
            changePage={changePage}
            pages={pages}
            nextButtonLabel={props.nextButtonLabel}
          />
          <PaginateFiveForward
            jumpFiveForwardButton={props.jumpFiveForwardButton}
            jumpFiveForwardButtonLabel={props.jumpFiveForwardButtonLabel}
            currentPage={currentPage}
            changePage={changePage}
            pages={pages}
          />
          <PaginateTenForward
            jumpTenForwardButton={props.jumpTenForwardButton}
            jumpTenForwardButtonLabel={props.jumpTenForwardButtonLabel}
            currentPage={currentPage}
            changePage={changePage}
            pages={pages}
          />
          <PaginateEnd
            jumpEndButton={props.jumpEndButton}
            jumpEndButtonLabel={props.jumpEndButtonLabel}
            currentPage={currentPage}
            changePage={changePage}
            pages={pages}
          />
        </ul>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default Pagination;
