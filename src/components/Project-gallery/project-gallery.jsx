/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectGallery = ({ gallery = [] }) => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
          {gallery.slice(0, 4).map((img, index) => (
            <a key={index} href={img} className="col-md-3 popimg">
              <img alt="" src={img} />
            </a>
          ))}
          {gallery.length > 4 && (
            <a href={gallery[4]} className="col-md-12 popimg">
              <img alt="" src={gallery[4]} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
