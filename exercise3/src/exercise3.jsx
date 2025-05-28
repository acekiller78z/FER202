
import React from "react";
import './Exercise3.css'; 

const Exercise3 = () => {
  return (
    <>
      {/* Header */}
      <div className="p-5 mb-4 bg-light">
        <div className="container">
          <h1 className="display-5 fw-bold">Let's test the grid!</h1>
        </div>
      </div>

      {/* Navigation */}
      <ul className="nav mb-4">
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <span className="nav-link disabled">Disabled</span>
        </li>
      </ul>

      {/* Grid */}
      <div className="container mb-4 ">
        <div className="row ">
          <div className="col box">First col</div>
          <div className="col box">Second col</div>
        </div>
        <div className="row  ">
          <div className="col box">col</div>
          <div className="col box">col</div>
          <div className="col box">col</div>
        </div>
        <div className="row ">
          <div className="col box">col</div>
          <div className="col box">col</div>
          <div className="col box">col</div>
          <div className="col box">col</div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        Created by ABC!
      </div>
    </>
  );
};

export default Exercise3;
