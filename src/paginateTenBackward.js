import React from "react";

const PaginateTenBackward = props => {
  return (
    <React.Fragment>
      {props.jumpTenBackwardButton === true ? (
        <li>
          <button
            className="paginateButton paginationTenBackward"
            disabled={props.currentPage < 10 ? "disabled" : ""}
            onClick={() =>
              props.changePage(
                props.currentPage === 10
                  ? props.currentPage - 9
                  : props.currentPage - 10
              )
            }
          >
            {props.jumpTenBackwardButtonLabel
              ? props.jumpTenBackwardButtonLabel
              : "<<<"}
          </button>
        </li>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default PaginateTenBackward;
