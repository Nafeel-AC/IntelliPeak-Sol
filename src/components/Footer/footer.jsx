/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>Intelli Peak Solutions, Brazil</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
<<<<<<< HEAD
                    <p>
                      <a href="mailto:contact@intellipeaks.com">contact@intellipeaks.com</a>
                      <br />
                      <a href="mailto:support@intellipeaks.com">support@intellipeaks.com</a>
                    </p>
=======
                    <p>hello@IntelliPeak Solutions.mx</p>
>>>>>>> 52e5c8ce255e2fa0abfb8771a42b9f193cb2a20d
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p><a href="tel:+17272199770">+1 (727) 219-9770</a></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent Projects</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/project-details2/project-details2-dark">
                      <a>
                        <img src="/img/Group 1686551828.png" alt="Software Development Project" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/project-details2/project-details2-dark">
                      <a>
                        <p>
                          Modern E-commerce Platform with React & Node.js
                        </p>
                      </a>
                    </Link>
                    <Link href="/works/works-dark">
                      <a>
                        <span className="date">15 Dec 2023</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/project-details2/project-details2-dark">
                      <a>
                        <img src="/img/portfolio/2.jpg" alt="Mobile App" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/project-details2/project-details2-dark">
                      <a>
                        <p>
                          Cross-platform Mobile App for Healthcare
                        </p>
                      </a>
                    </Link>
                    <Link href="/works/works-dark">
                      <a>
                        <span className="date">28 Nov 2023</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Subscribe to our newsletter" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <h3 style={{ color: '#fff', fontSize: '28px', fontWeight: '700', marginBottom: '20px' }}>
<<<<<<< HEAD
                  INTELLI PEAK SOLUTIONS
=======
                  IntelliPeak Solutions
>>>>>>> 52e5c8ce255e2fa0abfb8771a42b9f193cb2a20d
                </h3>
                <p style={{ color: '#999', fontSize: '14px', lineHeight: '1.6', marginBottom: '30px' }}>
                  {`We deliver high-impact software—from web apps to mobile experiences—helping businesses scale and transform their digital presence across Brazil and worldwide.`}
                </p>
              </div>

              <div className="copy-right">
                <p>
<<<<<<< HEAD
                  © {new Date().getFullYear()}, Intelli Peak Solutions. Crafting digital solutions with passion in Brazil.
=======
                  © 2023, IntelliPeak Solutions. Crafting digital solutions with passion in Mexico.
>>>>>>> 52e5c8ce255e2fa0abfb8771a42b9f193cb2a20d
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
