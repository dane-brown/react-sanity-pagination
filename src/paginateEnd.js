import React from "react";

const PaginateEnd = props => {
  return (
    <React.Fragment>
      {props.jumpEndButton === true ? (
        <li>
          <button
            className="paginateButton paginationEnd"
            disabled={props.currentPage === props.pages ? "disabled" : ""}
            onClick={() => props.changePage(props.pages)}
          >
            {props.jumpEndButtonLabel ? props.jumpEndButtonLabel : "End"}
          </button>
        </li>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default PaginateEnd;
