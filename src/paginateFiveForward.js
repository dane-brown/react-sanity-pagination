import React from "react";

const PaginateFiveForward = props => {
  return (
    <React.Fragment>
      {props.jumpFiveForwardButton === true ? (
        <li>
          <button
            className="paginateButton paginationFiveForwrard"
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
        </li>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default PaginateFiveForward;
