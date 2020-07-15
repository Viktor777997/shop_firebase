import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItems } from '../../store/actions/item';
import { Helmet } from "react-helmet";
import SlickSliderHomePage from '../../Components/SlickSliderHomePage/SlickSliderHomePage';
import Categories from '../../Components/Categories';
import './HomePage.scss';
import Loading from '../../Components/loading';
import AllCards from '../../Components/allCards';
import ErrorPage from '../errorPage';
class HomePage extends Component {

  state = {
    limit: 5,
    titleOfLastPerson: 3,
  }

  componentDidMount() {

    this.loadData()

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.loadData()
    }
  }

  loadData = () => {
    this.props.getItems([['available', '==', 'true']], this.state.limit, this.state.titleOfLastPerson);
  }

  render() {

    const { items } = this.props;
    console.log(items)
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
        <Helmet >
          <title>Хозяйственные товары в Ростове-на-Дону</title>
          <meta name="description" content="Хозяйственные товары в Ростове-на-Дону, Меню" />
          <meta name="keywords" content="Хозяйственные товары в Ростове-на-Дону, hoztovary, hoztovary161, 161, хозтовары 161,хозтовары, hoztovary161ru," />
        </Helmet>
        <div className="gen_div container">
          <div className='title-homePage'>
            <h2>Меню</h2>

            <h1>Хозяйственные товары в Ростове-на-Дону</h1>
          </div>
          <div className="general-div">
            <Categories />

            <div className="slide-and-random-cards">
              <div className="general-slide">
                <SlickSliderHomePage />
              </div>
              <AllCards items={items} />
              {/* <button type="button" className="btn btn-primary" onClick={() => this.setState({ limit: this.state.limit + 3 })}>Primary</button> */}
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
    getItems: (query, limit, titleOfLastPerson) => dispatch(fetchItems(query, limit, titleOfLastPerson)),
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
