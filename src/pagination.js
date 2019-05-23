import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { updateURL } from "./helpers/index";
import PaginatePrev from "./paginatePrev";
import PaginateNext from "./paginateNext";
import PaginateFiveForward from "./paginateFiveForward";
import PaginateTenForward from "./paginateTenForward";
import PaginateFiveBackward from "./paginateFiveBackward";
import PaginateTenBackward from "./paginateTenBackward";
import PaginateEnd from "./paginateEnd";
import PaginateStart from "./paginateStart";

function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = props.postsPerPage;
  const [range, setRange] = useState(`0...${postsPerPage}`);
  const buttons = [];
  const postsLength = props.postsLength;
  const pages = Math.ceil(postsLength / postsPerPage);

  // Set page if parameter is there
  useEffect(() => {
    const url = window.location.href;
    if (url.indexOf("?page=") !== -1) {
      // console.log(url.indexOf("?page="));
      const param = url.substring(url.indexOf("?page="));
      const page = Number(param.replace("?page=", ""));

      // Update Content
      setTimeout(() => {
        const firstNumber = postsPerPage * (page - 1);
        const secondNumber = firstNumber + postsPerPage;
        const newRange = `${firstNumber}...${secondNumber}`;
        setCurrentPage(page);
        setRange(newRange);
        if (page !== currentPage) {
          updateURL(page);
          props.action(page, newRange);
        } else {
          // Returning nothing because already on page 🕵️‍!
        }
        console.log("Fetching initial pagination");
      }, 300);
    }
  }, []);

  // Paginate Function to determine query range
  const PaginateButton = props => {
    const page = props.page;
    return (
      <React.Fragment>
        {props.paginationStyle === "activePage" ? (
          <React.Fragment>
            {page === currentPage ? (
              <button
                className={page === currentPage ? "active" : ""}
                onClick={() => changePage(page, range)}
              >
                {page}
              </button>
            ) : (
              ""
            )}
          </React.Fragment>
        ) : (
          <button
            className={page === currentPage ? "active" : ""}
            onClick={() => changePage(page, range)}
          >
            {page}
          </button>
        )}
      </React.Fragment>
    );
  };

  const changePage = (page, range) => {
    const firstNumber = postsPerPage * (page - 1);
    const secondNumber = firstNumber + postsPerPage;
    const newRange = `${firstNumber}...${secondNumber}`;
    setCurrentPage(page);
    setRange(newRange);
    if (page !== currentPage) {
      updateURL(page);
      props.action(page, newRange);
    } else {
      // Returning nothing because already on page 🕵️‍!
    }
  };

  // Assign Buttons
  for (let i = 0; i < pages; i++) {
    buttons.push(
      <React.Fragment key={i + 1}>
        <PaginateButton
          page={i + 1}
          action={props.action}
          paginationStyle={props.paginationStyle}
        />
      </React.Fragment>
    );
  }
  // Return Pagination
  return (
    <React.Fragment>
      {postsLength > 1 ? (
        <ul className="pagePagination">
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

Pagination.propTypes = {
  paginationStyle: PropTypes.string,
  action: PropTypes.func,
  postsPerPage: PropTypes.number,
  postsLength: PropTypes.number,
  nextButton: PropTypes.bool,
  nextButtonLabel: PropTypes.string,
  prevButton: PropTypes.bool,
  prevButtonLabel: PropTypes.string,
  jumpStartButton: PropTypes.bool,
  jumpStartButtonLabel: PropTypes.string,
  jumpFiveForwardButton: PropTypes.bool,
  jumpFiveForwardButtonLabel: PropTypes.string,
  jumpTenForwardButton: PropTypes.bool,
  jumpTenForwardButtonLabel: PropTypes.string,
  jumpFiveBackwardButton: PropTypes.bool,
  jumpFiveBackwardButtonLabel: PropTypes.string,
  jumpTenBackwardButton: PropTypes.bool,
  jumpTenBackwardButtonLabel: PropTypes.string,
  jumpEndButton: PropTypes.bool,
  jumpEndButtonLabel: PropTypes.string
};

export default Pagination;
