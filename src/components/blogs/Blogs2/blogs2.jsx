/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Blogs2 = () => {
  return (
    <section className="blog-list section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="head md-mb50">
              <h6 className="back-color">Stay Informed & Inspired</h6>
              <h3>Latest Insights & Trends.</h3>
              <p>
                Discover cutting-edge ideas, innovative solutions, and thought-provoking perspectives that shape our future.
              </p>
              <Link href="/articles">
                <a>
                  <span>Explore All Articles</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="/img/blog/b1.jpg" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/article-detailed/?id=1">
                      <a className="date">
                        <span>
                          <i>15</i> December
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="/article-detailed/?id=1">
                      <a className="tag">
                        <span>Architecture</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/article-detailed/?id=1">
                      <a>
                        The Future of Sustainable Architecture: Building Tomorrow&apos;s Cities
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".5s">
              <div className="img valign">
                <img src="/img/blog/b2.jpg" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/article-detailed/?id=2">
                      <a className="date">
                        <span>
                          <i>22</i> August
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="/article-detailed/?id=2">
                      <a className="tag">
                        <span>Mindfulness</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/article-detailed/?id=2">
                      <a>
                        The Art of Mindful Living: Finding Balance in a Digital World
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="/img/blog/b3.jpg" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/article-detailed/?id=3">
                      <a className="date">
                        <span>
                          <i>22</i> August
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="/article-detailed/?id=3">
                      <a className="tag">
                        <span>Healthcare</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/article-detailed/?id=3">
                      <a>
                        Revolutionizing Healthcare Through Telemedicine and AI
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs2;
