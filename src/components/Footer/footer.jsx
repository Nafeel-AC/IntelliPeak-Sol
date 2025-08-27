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
                    <p>
                      <a href="mailto:contact@intellipeaks.com">contact@intellipeaks.com</a>
                      <br />
                      <a href="mailto:support@intellipeaks.com">support@intellipeaks.com</a>
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
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
                    <Link href="/project-detailed?id=3">
                      <a>
                        <img src="/img/portfolio/project2/listing3/bg3.jpg" alt="Creative Portfolio" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/project-detailed?id=3">
                      <a>
                        <p>
                          Creative Portfolio
                        </p>
                      </a>
                    </Link>
                    <Link href="/works/works-dark">
                      <a>
                        <span className="date">3 November 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/project-detailed?id=5">
                      <a>
                        <img src="/img/portfolio/project2/listing5/bg5.jpg" alt="ASI Web Solutions" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/project-detailed?id=5">
                      <a>
                        <p>
                          ASI Web Solutions
                        </p>
                      </a>
                    </Link>
                    <Link href="/works/works-dark">
                      <a>
                        <span className="date">24 December 2022</span>
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
                  INTELLI PEAK SOLUTIONS
                </h3>
                <p style={{ color: '#999', fontSize: '14px', lineHeight: '1.6', marginBottom: '30px' }}>
                  {`We deliver high-impact software—from web apps to mobile experiences—helping businesses scale and transform their digital presence across Brazil and worldwide.`}
                </p>
              </div>

              <div className="copy-right">
                <p>
                  © {new Date().getFullYear()}, Intelli Peak Solutions. Crafting digital solutions with passion in Brazil.
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
