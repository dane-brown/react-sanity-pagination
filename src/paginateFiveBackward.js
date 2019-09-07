import React from "react";

const PaginateFiveBackward = props => {
  return (
    <React.Fragment>
      {props.jumpFiveBackwardButton === true ? (
        <li>
          <button
            className="paginateButton paginationFiveBackward"
            disabled={props.currentPage < 5 ? "disabled" : ""}
            onClick={() =>
              props.changePage(
                props.currentPage === 5
                  ? props.currentPage - 4
                  : props.currentPage - 5
              )
            }
          >
            {props.jumpFiveBackwardButtonLabel
              ? props.jumpFiveBackwardButtonLabel
              : "<<"}
          </button>
        </li>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default PaginateFiveBackward;
