import React from "react";

function PortfolioBtn(props) {
  return (
    <div className="text-center">
      <button onClick={props.onClick} className={`btn btn-primary`}>
        Portfolio
      </button>
    </div>
  );
}

export default PortfolioBtn;
