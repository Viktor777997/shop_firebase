import React from 'react';
import './Categories.scss'


const Categories = () => {
    return (
        <div className="categories">
              <button className="btn btn-dark submenubtn category-open-btn">
                <span className="menuBtnName">
                  Menu
                      </span>
                <div>
                  <span className="firstLine"></span>
                  <span className="secondLine"></span>
                  <span className="thirdLine"></span>
                </div>

              </button>

              <ul className="categories_ul">
                <li className="categories_li">
                  <a className="categories_a">
                    Category 1a
                              </a>
                  <div className="open-category">
                    <ul className="categories_ul">
                      <li>
                        <a>
                          Category first
                                          </a>

                      </li>
                      <li >
                        <a>
                          Category 1a
                                          </a>
                      </li>
                      <li >
                        <a>
                          Category 1a
                                          </a>
                      </li>

                    </ul>
                  </div>
                </li>
                <li className="categories_li">
                  <a>
                    Category 1a
                              </a>
                  <div className="open-category">
                    <ul className="categories_ul">
                      <li>
                        <a>
                          Category first
                                          </a>

                      </li>
                      <li >
                        <a>
                          Category 1a
                                          </a>
                      </li>
                      <li >
                        <a>
                          Category 1a
                                          </a>
                      </li>

                    </ul>
                  </div>
                </li>
                <li className="categories_li">
                  <a>
                    Category 1a
                              </a>

                </li>
                <li className="categories_li">
                  <a>
                    Category 1a
                              </a>
                </li>
                <li className="categories_li">
                  <a>
                    Category 1a
                              </a>
                </li>
              </ul>
            </div>
    );
}

export default Categories;