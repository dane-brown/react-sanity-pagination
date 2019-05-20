import React from "react";

const PaginateStart = props => {
  return (
    <React.Fragment>
      {props.jumpStartButton === true ? (
        <button
          disabled={props.currentPage === 1 ? "disabled" : ""}
          onClick={() => props.changePage(1)}
        >
          {props.jumpStartButtonLabel ? props.jumpStartButtonLabel : "Start"}
        </button>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default PaginateStart;
