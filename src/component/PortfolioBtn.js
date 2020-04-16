import React from "react";

function PortfolioBtn(props) {
  return (
    <button
      id="portfolio-btn"
      onClick={props.onClick}
      className={`btn btn-outline-primary mt-5`}
    >
      View My Work <i id="button-arrow" className="fas fa-arrow-right"></i>
    </button>
  );
}

export default PortfolioBtn;
