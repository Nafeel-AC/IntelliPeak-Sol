/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer2 = () => {
  return (
    <footer className="app-footer" data-overlay-dark="0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="item-clumn our md-mb50">
              <a href="#0" className="logo-brand mb-50">
                <img src="/img/logo-gr.png" alt="" />
              </a>
              <p>
                Sed ut perspiciatis undmnis iste natus error sit voluptatem
                accusantium dolore udantiuy totam rem aperiam.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links md-mb50">
              <h5 className="title">Resources</h5>
              <ul>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Our Products</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Blogs & Guides</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Premium Support</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Need a Career ?</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="item-clumn links sm-mb50">
              <h5 className="title">Links</h5>
              <ul>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Support</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Privacy</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="#0">Setting</a>
                </li>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <a href="0">My Account</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links">
              <h5 className="title mb-30">Contact</h5>
              <div className="info">
                <span>Email Address</span>
                <h6>
                  <a href="#0">support@gmail.com</a>
                </h6>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <p>© 2022 IntelliPeak Solutions. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-blur"></div>
      <div className="circle-blur two"></div>
    </footer>
  );
};

export default Footer2;
