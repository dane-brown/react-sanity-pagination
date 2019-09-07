import React from "react";

const PaginateStart = props => {
  return (
    <React.Fragment>
      {props.jumpStartButton === true ? (
        <li>
          <button
            className="paginateButton paginationStart"
            disabled={props.currentPage === 1 ? "disabled" : ""}
            onClick={() => props.changePage(1)}
          >
            {props.jumpStartButtonLabel ? props.jumpStartButtonLabel : "Start"}
          </button>
        </li>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default PaginateStart;
