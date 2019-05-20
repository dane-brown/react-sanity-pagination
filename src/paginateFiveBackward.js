import React from "react";

const PaginateFiveBackward = props => {
  return (
    <React.Fragment>
      {props.jumpFiveBackwardButton === true ? (
        <button
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
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default PaginateFiveBackward;
