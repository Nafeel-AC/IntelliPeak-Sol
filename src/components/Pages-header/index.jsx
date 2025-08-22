/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from 'react'

const PagesHeader = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont mt-100 mb-50 text-center">
              <h1 className="color-font fw-700">
                Our dedicated team of creatives is bursting with talent,
                experience and passion for what we do.
              </h1>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="img">
              {/* <img src="/img/slid/about.jpg" alt="" /> */}
              <video
                ref={videoRef}
                src="/img/slid/about.mp4"
                muted
                playsInline
                className="responsive-header-video"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="half sub-bg">
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
    </header>
  );
};


// Add styles for responsive video
// You can move this to a CSS/SCSS file if preferred
const style = `
.responsive-header-video {
  width: 100%;
  max-width: 1000px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 1300px) {
  .responsive-header-video {
    max-width: 80vw;
  }
}
`;

if (typeof window !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = style;
  document.head.appendChild(styleTag);
}

export default PagesHeader;