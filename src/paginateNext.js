import React from "react";

const PaginateNext = props => {
  return (
    <React.Fragment>
      {props.nextButton === true ? (
        <li>
          <button
            className="paginateButton paginationNext"
            disabled={props.currentPage === props.pages ? "disabled" : ""}
            onClick={() => props.changePage(props.currentPage + 1)}
          >
            {props.nextButtonLabel ? props.nextButtonLabel : ">"}
          </button>
        </li>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default PaginateNext;
