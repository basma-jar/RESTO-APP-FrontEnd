import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Address: 1234 Main Street, City, State ZIP</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: findRST@example.com</li>
            </ul>
          </div>
          <div className="col-md-4">
          {<h5>Info</h5>}
            { <p>this app is created to help user find in very easy way the best restaurant for their need</p>}
           
          </div>
          <div className="col-md-4">
            {/* Add additional content here */}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">© 2023 FindRST. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;