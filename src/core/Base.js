import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-#343a40 text-white p-4",
  children,
}) => {
  return (
    <div style={{ minHeight: "100vh", position: "relative", paddingBottom: "100px" }}>
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron bg-#343a40 text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer bg-#343a40 mt-auto py-3" style={{ position: "absolute", bottom: "-10", width: "100%" }}>
        <div className="container-fluid bg-success text-white text-center py-3">
          <h4>If you got any questions, reach me out at instagram at Sohail.iit_kgp</h4>
          {/* <button className="btn btn-warning btn-lg">Contact Us</button> */}
          <div className="container">
            <span className="text-warning">
              An Amazing Django React WebPage
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Base;
