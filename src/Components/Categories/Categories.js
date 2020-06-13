import React from 'react';
import './Categories.scss'
import OpenCategory from '../openCategory';


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
          <a className="categories_a">Category 1a</a>
          <OpenCategory />
        </li>
        <li className="categories_li">
          <a className="categories_a">Category 1a</a>
          <OpenCategory />
        </li>
        <li className="categories_li">
          <a className="categories_a">Category 1a</a>
          <OpenCategory />
        </li>
        <li className="categories_li">
          <a className="categories_a">Category 1a</a>
          <OpenCategory />
        </li>
        <li className="categories_li">
          <a className="categories_a">Category 1a</a>
          <OpenCategory />
        </li>
        <li className="categories_li">
          <a className="categories_a">Category 1a</a>
          <OpenCategory />
        </li>

      </ul>
    </div>
  );
}

export default Categories;