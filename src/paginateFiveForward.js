import React from "react";

const PaginateFiveForward = props => {
  return (
    <React.Fragment>
      {props.jumpFiveForwardButton === true ? (
        <button
          className="paginationFiveForwrard"
          disabled={props.currentPage > props.pages - 5 ? "disabled" : ""}
          onClick={() =>
            props.changePage(
              props.currentPage === 1
                ? props.currentPage + 4
                : props.currentPage + 5
            )
          }
        >
          {props.jumpFiveForwardButtonLabel
            ? props.jumpFiveForwardButtonLabel
            : ">>"}
        </button>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default PaginateFiveForward;
