import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItems } from '../../store/actions/item';
import SlickSliderHomePage from '../../Components/SlickSliderHomePage/SlickSliderHomePage';
import Categories from '../../Components/Categories';
import './HomePage.scss';
import Loading from '../../Components/loading';
import AllCards from '../../Components/allCards';
import ErrorPage from '../errorPage';

class HomePage extends Component {

  state = {
    limit: 3,
  }

  componentDidMount() {

    this.props.getItems([['available', '==', 'true']], this.state.limit);

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.props.getItems([['available', '==', 'true']], this.state.limit);
    }
  }

  render() {

    const { items } = this.props;

    if (!items.isLoaded || !items.data) {
      return (
        <Loading />
      )
    }


    if (items.error) {
      return <div>
        <ErrorPage />
      </div>
    }
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
              <AllCards items={items} />
              <button type="button" className="btn btn-primary" onClick={() => this.setState({ limit: this.state.limit + 3 })}>Primary</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.item.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: (query, limit) => dispatch(fetchItems(query, limit)),
    getSlideItems: query => dispatch(fetchItems(query)),
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
