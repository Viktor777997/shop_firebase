import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItems } from '../../store/actions/item';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import SlickSliderHomePage from '../../Components/SlickSliderHomePage/SlickSliderHomePage';
import Categories from '../../Components/Categories';
import './HomePage.scss';

class HomePage extends Component {
  componentDidMount() {
    this.props.getItems([['available', '==', true]]);
    $(document).ready(function() {
      $('.category-open-btn').click(function() {
        $('body').toggleClass('menu-btn-clicked');
        $('body').toggleClass(' hovred');
        $('.firstLine').toggleClass('firstLineX');
        $('.secondLine').toggleClass('secondLineX');
        $('.thirdLine').toggleClass('thirdLineX');
      });
      $('.categories_li').hover(
        function() {
          // over
          $('body').addClass(' hovred');
        },
        function() {
          $('body').removeClass(' hovred');
        }
      );
    });
    $(document).click(function(e) {
      let target = e.target;
      if (
        !$(target).is('.categories') &&
        !$(target)
          .parents()
          .is('.categories')
      ) {
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
    const { data } = this.props.items;
    return (
      <div className="App">
        <div className="gen_div container">
          <h1>Title</h1>

          <div className="general-div">
            <Categories />

            <div className="slide-and-random-cards">
              <div className="general-slide">
                <SlickSliderHomePage />
              </div>
              <div className="random_cards ">
                {data.map(item => (
                  <div className="card " key={item.id}>
                    <Link to={`/card/${item.id}`}>
                      <img className="card-img-top" src={item.images[0]} alt="Card cap" />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state)
  return {
    items: state.item.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: query => dispatch(fetchItems(query)),
  };
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
);

export default enhance(HomePage);
