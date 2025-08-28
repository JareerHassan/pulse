import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="d-flex align-items-center w-50">
          <div className="input-group border rounded" style={{ height: "47px", minWidth: "300px" }}>
            <span className="input-group-text bg-transparent h-100 border-0"><i className="fas fa-search text-secondary"></i></span>
            <input type="text"
              className="form-control bg-transparent border-0"
              placeholder="Search" aria-label="Search"
              aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3">
              <a className="nav-link" href="#">
                <i className="fas fa-bell"></i>
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#">
                <i className="fas fa-user-circle"></i>
              </a>
            </li>
            <li className="nav-item">
              <span className="nav-link">John Doe</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

