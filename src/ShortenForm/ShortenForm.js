import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./ShortenForm.css";
const shortenform = () => {
  return (
    <div class="form-section">
      <div className="container mt-5">
      <div class="row align-items-center">
        <div class="col-12">
          <form>
            <div class="row">
              <div class="col">
                <input
                  type="url"
                  class="form-control"
                  placeholder="Enter your url..."
                />
              </div>
              <div class="submit-container">
                <button class="btn btn-primary" type="submit">
                  Shorten
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};
export default shortenform;
