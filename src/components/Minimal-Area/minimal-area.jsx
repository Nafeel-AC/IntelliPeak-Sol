/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">About us.</h4>
              <p className="wow txt" data-splitting>
                IntelliPeak Solutions is a leading software agency delivering innovative solutions for startups and established businesses. 
                We transform ideas into seamless digital experiences that drive results.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Mission
                  </h6>
                  <p>
                    We aim to craft pixel-perfect digital experiences, blending innovation and design to bring ideas to life.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our Goals
                  </h6>
                  <p>
                    We strive to deliver innovative software solutions that empower creativity, efficiency, and seamless digital experiences.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Us?
                  </h6>
                  <p>
                    Our expertise in cutting-edge technology and design ensures solutions that are efficient, scalable, and visually striking—built to elevate your digital presence.
                  </p>
                </li>
              </ul>

              {/* <div className="mt-40">
                <h5 className="wow color-font" data-splitting>Contact Information</h5>
                <p className="wow txt" data-splitting>
                  Intelli Peak Solutions — Brazil
                  <br />
                  Email: <a href="mailto:contact@intellipeaks.com">contact@intellipeaks.com</a> • <a href="mailto:support@intellipeaks.com">support@intellipeaks.com</a>
                  <br />
                  Phone: <a href="tel:+17272199770">+1 (727) 219-9770</a>
                </p>
                <div className="map mt-20">
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "10px" }}>
                    <iframe
                      title="Intelli Peak Solutions - Brazil"
                      src="https://www.google.com/maps?q=Brazil&output=embed"
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
