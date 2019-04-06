import React from "react";

const Navbar = ({totalCounters}) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar &nbsp; &nbsp;
          <span className="badge badge-pill bg-primary">
            {totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
