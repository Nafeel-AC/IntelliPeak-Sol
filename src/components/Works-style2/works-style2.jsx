/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import data from "./data.json";

const WorksStyle2 = ({ grid, hideFilter, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);

  const getCategoryClasses = (categories) => {
    return categories.map(cat => {
      switch(cat) {
        case 'web': return 'web';
        case 'design': return 'design';
        case 'software': return 'software';
        default: return '';
      }
    }).join(' ');
  };

  return (
    <>
      <style jsx>{`
        .item-img {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
        }
        
        .item-img .imago {
          display: block;
          width: 100%;
          height: 250px;
          overflow: hidden;
        }
        
        .item-img .imago img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: all 0.4s ease;
        }
        
        .item-img .imago:hover img {
          transform: scale(1.1);
        }
        
        .item-img-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: all 0.4s ease;
        }
        
        .item-img .imago:hover .item-img-overlay {
          opacity: 1;
        }
      `}</style>
      <section
        className={`${
          grid ? (grid === 3 ? "three-column" : null) : null
        } portfolio section-padding pb-70`}
      >
        {!hideFilter && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head text-center">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Portfolio
                  </h6>
                  <h3 className="wow color-font">
                    Our Recent Web Design &amp; <br /> Some Past Projects.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={"container"}>
          <div className="row">
            {!hideFilter && (
              <div
                className={`filtering ${
                  filterPosition === "center"
                    ? "text-center"
                    : filterPosition === "left"
                    ? "text-left"
                    : "text-right"
                } col-12`}
              >
                <div className="filter">
                  {data.filters.map((filter) => (
                    <span 
                      key={filter.id}
                      data-filter={filter.filter} 
                      className={filter.active ? "active" : ""}
                    >
                      {filter.label}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="gallery full-width">
              {data.portfolioItems.map((item) => (
                <div
                  key={item.id}
                  className={`${
                    grid === 3
                      ? "col-lg-4 col-md-6"
                      : grid === 2
                      ? "col-md-6"
                      : "col-12"
                  } items ${getCategoryClasses(item.categories)} wow fadeInUp`}
                  data-wow-delay={item.delay}
                >
                  <div className="item-img">
                    <Link href={`${item.link}?id=${item.projectId}`}>
                      <a className="imago wow">
                        <img src={item.image} alt={item.alt} />
                        <div className="item-img-overlay"></div>
                      </a>
                    </Link>
                  </div>
                  <div className="cont">
                    <h6>{item.title.small}</h6>
                    <span>
                      <Link href={`${item.link}?id=${item.projectId}`}>
                        {item.title.big}
                      </Link>,
                      <Link href={`/project-display`}>
                        {item.categories[0] === 'web' ? 'Web Development' : 
                         item.categories[0] === 'design' ? 'UI/UX Design' :
                         item.categories[0] === 'software' ? 'Software Solutions' : 'Web Design'}
                      </Link>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksStyle2;
