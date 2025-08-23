import React from "react";
import Link from "next/link";

const ProjectDetails2Header = ({ projectHeaderData }) => {
  return (
    <section
      className="page-header proj-det bg-img parallaxie valign"
      style={{ backgroundImage: `url(${projectHeaderData.projectHeaderImage})` }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont">
              <h6>{projectHeaderData.title.small}</h6>
              <h2>{projectHeaderData.title.big}</h2>
              
              {/* Live Project Button */}
              {projectHeaderData.clientURLLink && (
                <div className="mt-30">
                  <a
                    href={projectHeaderData.clientURLLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="butn butn-md butn-bord radius-30"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
                      border: 'none',
                      color: 'white',
                      padding: '12px 24px',
                      fontSize: '14px',
                      fontWeight: '700',
                      textDecoration: 'none',
                      display: 'inline-block',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                      borderRadius: '40px',
                      position: 'relative',
                      overflow: 'hidden',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px) scale(1.03)';
                      e.target.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.6), 0 0 0 2px rgba(255, 255, 255, 0.2), 0 0 20px rgba(102, 126, 234, 0.4)';
                      e.target.style.background = 'linear-gradient(135deg, #4facfe 0%, #f093fb 25%, #f5576c 50%, #764ba2 75%, #667eea 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)';
                      e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)';
                    }}
                  >
                    {/* Animated background overlay */}
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                      transition: 'left 0.5s ease',
                      pointerEvents: 'none'
                    }} 
                    onMouseEnter={(e) => {
                      e.target.style.left = '100%';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.left = '-100%';
                    }}
                    />
                    
                    <i className="fas fa-rocket" style={{ 
                      marginRight: '8px',
                      fontSize: '14px',
                      filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.3))'
                    }}></i>
                    View Live Project
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <Link href={projectHeaderData.clientURLLink}>
                  <a>{projectHeaderData.clientURLName}</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>{projectHeaderData.date}</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                {projectHeaderData.categories.map((cat, index) => (
                  <Link href={cat.link} key={cat.id}>
                    <a>
                      {cat.name}
                      {projectHeaderData.categories.length != index + 1
                        ? " ,"
                        : ""}
                    </a>
                  </Link>
                ))}
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                {projectHeaderData.tags.map((tag, index) => (
                  <Link href={tag.link} key={tag.id}>
                    <a>
                      {tag.name}
                      {projectHeaderData.tags.length != index + 1 ? " ," : ""}
                    </a>
                  </Link>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Header;
