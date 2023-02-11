import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="section-center error">
      <h2>Oops ..Dead End</h2>
      <Link to={"/"}>Bact to Home</Link>
    </div>
  );
};

export default Error;
