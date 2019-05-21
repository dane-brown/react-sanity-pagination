import React from "react";

const PaginateTenForward = props => {
  return (
    <React.Fragment>
      {props.jumpTenForwardButton === true ? (
        <button
          className="paginationTenForward"
          disabled={props.currentPage > props.pages - 10 ? "disabled" : ""}
          onClick={() =>
            props.changePage(
              props.currentPage === 1
                ? props.currentPage + 9
                : props.currentPage + 10
            )
          }
        >
          {props.jumpTenForwardButtonLabel
            ? props.jumpTenForwardButtonLabel
            : ">>>"}
        </button>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default PaginateTenForward;
