import React from "react";

const ErrorHandler = () => {
  return (
    <div className="card w-75 m-auto">
      <div className="card-body">
        <h5 className="card-title text-danger">
          Error
          <i className="fas fa-exclamation-triangle"></i>
        </h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>
  );
};

export default ErrorHandler;
