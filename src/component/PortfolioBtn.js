import React from "react";

function PortfolioBtn(props) {
  return (
    <div className="text-center">
      <button
        id="portfolio-btn"
        onClick={props.onClick}
        className={`btn btn-outline-primary mt-5`}
      >
        View My Work <i id="button-arrow" className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default PortfolioBtn;
