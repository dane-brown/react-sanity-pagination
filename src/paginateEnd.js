import React from "react";

const PaginateEnd = props => {
  return (
    <React.Fragment>
      {props.jumpEndButton === true ? (
        <button
          disabled={props.currentPage === props.pages ? "disabled" : ""}
          onClick={() => props.changePage(props.pages)}
        >
          {props.jumpEndButtonLabel ? props.jumpEndButtonLabel : "End"}
        </button>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default PaginateEnd;
