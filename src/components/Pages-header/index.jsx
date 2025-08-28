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
            <div className="img video-wrapper">
              {/* <img src="/img/slid/about.jpg" alt="" /> */}
              <video
                ref={videoRef}
                src="/img/slid/about.mp4"
                muted
                playsInline
                className="responsive-header-video"
              ></video>
              <div className="video-diffusion-overlay"></div>
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
.video-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.responsive-header-video {
  width: 100%;
  max-width: 1000px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
}

.video-diffusion-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 2;
  box-shadow: inset 0 0 80px 20px rgba(0, 0, 0, 0.8);
  background: radial-gradient(
    ellipse at center,
    transparent 30%,
    rgba(32, 32, 32, 0.2) 70%,
    rgba(0, 0, 0, 0.5) 100%
  );
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