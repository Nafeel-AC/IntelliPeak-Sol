import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Video2 = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  return (
    <section
      className="video bg-img parallaxie"
      style={{ backgroundImage: "url(/img/bg-vid.jpg)" }}
    >
      {/* Custom modal video player for local video */}
      {isOpen && typeof window !== "undefined" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{ position: "relative", maxWidth: "90vw", maxHeight: "80vh" }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                fontSize: 20,
                cursor: "pointer",
                zIndex: 1001,
              }}
              aria-label="Close video"
            >
              &times;
            </button>
            <video controls autoPlay width="100%" style={{ maxHeight: "70vh", borderRadius: 8 }}>
              <source src="/video/1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      <a
        className="vid valign"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <div className="vid-butn">
          <span className="icon">
            <i className="pe-7s-play"></i>
          </span>
        </div>
      </a>
      <div className="container">
        <div className="stauts">
          <div className="item">
            <h4>
              3<span>K</span> +
            </h4>
            <h6>Happy Clients</h6>
          </div>
          <div className="item">
            <h4>
              14<span>K</span> +
            </h4>
            <h6>Success Projects</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video2;
