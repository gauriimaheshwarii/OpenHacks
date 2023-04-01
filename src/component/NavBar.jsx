import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="/">
            Nature Bridge
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons"></div>
            <a href="/login" className="btn btn-outline-dark">
              <i classNameName="fa fa-sign-in me-1"></i>Login
            </a>
            <a href="/register" className="btn btn-outline-dark m-2">
              <i classNameName="fa fa-user-plus me-1"></i>Register
            </a>
            <a href="/cart" className="btn btn-outline-dark">
              <i classNameName="fa fa-shopping-cart me-1"></i>Cart(0)
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
