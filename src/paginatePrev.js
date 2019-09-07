import React from "react";

const PaginatePrev = props => {
  return (
    <React.Fragment>
      {props.prevButton === true ? (
        <li>
          <button
            className="paginateButton paginationPrev"
            disabled={props.currentPage === 1 ? "disabled" : ""}
            onClick={() => props.changePage(props.currentPage - 1)}
          >
            {props.prevButtonLabel ? props.prevButtonLabel : "<"}
          </button>
        </li>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default PaginatePrev;
