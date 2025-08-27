/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import data from "./data.json";

const Portfolio = ({ grid, filterPosition }) => {
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
    <section className="portfolio section-padding pb-70">
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
      <div className={`${grid === 3 ? "container-fluid" : "container"}`}>
        <div className="row">
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

          <div className="gallery full-width">
            {data.portfolioItems.map((item) => (
              <div
                key={item.id}
                className={`${
                  grid === 3
                    ? "col-lg-4 col-md-6"
                    : grid === 2
                    ? "col-md-6 lg-mr"
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
                  <h6>{item.title}</h6>
                  <span>
                    {item.categories.map((category, index) => (
                      <React.Fragment key={category}>
                        <a href="#0">
                          {category === 'web' ? 'Web Development' : 
                           category === 'design' ? 'UI/UX Design' :
                           category === 'software' ? 'Software Solutions' : category}
                        </a>
                        {index < item.categories.length - 1 && ', '}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
