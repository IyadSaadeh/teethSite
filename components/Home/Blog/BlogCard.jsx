import Link from 'next/link'
import React from 'react'

const BlogCard = ({data}) => {
  return (
    <div
               
                className="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: "465px" }}
              >
                <div>
                  <div
                    className="slider-item"
                    
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="blog-card">
                      <div className="post-media">
                        <Link href={data.link}>
                          <img
                            src={data.img1}
                            alt="icon"
                          ></img>
                        </Link>
                      </div>
                      <div className="post-info">
                        <ul className="post-meta">
                          <li className="author">
                            <Link href={data.link}>
                              <img
                                src={data.autorImg}
                                alt="icon"
                              ></img>
                              {data.autor} 
                            </Link>
                          </li>
                          <li className="date">
                            <i className="far fa-calendar-alt"></i>{data.date}
                          </li>
                        </ul>
                        <h5 className="post-title">
                          <Link href={data.link}>
                          {data.title}
                          </Link>
                        </h5>
                        <Link
                          className="btn btn-outline-primary btn-sm"
                          href={data.link}
                        >
                          Read More
                          
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default BlogCard