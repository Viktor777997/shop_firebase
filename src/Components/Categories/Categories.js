import React, { Component } from 'react';
import './Categories.scss'
import OpenCategory from '../openCategory';
import $ from 'jquery';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchCategories } from '../../store/actions/category';

class Categories extends Component {

  componentDidMount() {
    this.props.getCategories([['categoryMother', '==', ''], ['available', '==', 'true']])
    $(document).ready(function () {
      $('.category-open-btn').click(function () {
        $('body').toggleClass('menu-btn-clicked');
        $('body').toggleClass(' hovred');
        $('.firstLine').toggleClass('firstLineX');
        $('.secondLine').toggleClass('secondLineX');
        $('.thirdLine').toggleClass('thirdLineX');

      });
      $('.categories_li').hover(
        function () {
          // over
          $('body').addClass(' hovred');
        },
        function () {
          $('body').removeClass(' hovred');
        }
      );
    });
    $(document).click(function (e) {
      let target = e.target;
      if ((!$(target).is('.categories') && !$(target).parents().is('.categories')) || $(target).is('.opened_categories_a')) {
        $('body').removeClass(' hovred');
        $('body').removeClass(' menu-btn-clicked');
        $('.categories_li').removeClass(' li_clicked');
        $('.firstLine').removeClass('firstLineX');
        $('.secondLine').removeClass('secondLineX');
        $('.thirdLine').removeClass('thirdLineX');
      }
    });
  }

  render() {
    const { categories } = this.props;
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
        <div className="categories-items">

          <ul className="categories_ul">
            {
              categories.data.map(item => (
                <li className="categories_li" key={item.id}>
                  <a className="categories_a" >{item.title}</a>
                  <OpenCategory motherId={item.id} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    categories: state.category.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: query => dispatch(fetchCategories(query)),
  };
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
);

export default enhance(Categories);