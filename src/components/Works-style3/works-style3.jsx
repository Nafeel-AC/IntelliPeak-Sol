/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import data from "./data.json";

const WorksStyle3 = () => {
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
    <section className="portfolio-cr section-padding pb-50">
      <div className="container">
        <div className="row">
          <div className="filtering text-center col-12">
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

          <div className="gallery-mons full-width">
            {data.portfolioItems.map((item) => (
              <div 
                key={item.id}
                className={`items ${getCategoryClasses(item.categories)} ${item.width === 'width2' ? 'width2' : ''} wow fadeInUp`} 
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
                <div className={`cont ${item.width !== 'width2' ? 'flex' : ''}`}>
                  <h6 className="color-font">{item.title}</h6>
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

export default WorksStyle3;
