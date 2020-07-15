import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItems } from '../../store/actions/item';
import { Helmet } from 'react-helmet';
import SlickSliderHomePage from '../../Components/SlickSliderHomePage/SlickSliderHomePage';
import Categories from '../../Components/Categories';
import './HomePage.scss';
import AllCards from '../../Components/allCards';
import ErrorPage from '../errorPage';
import Loading from '../../Components/loading';
class HomePage extends Component {
  state = {
    limit: 9,
    startItemId: null,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.lazyLoad)
    /// todo: remove this IMPORTANT
    window.asaa = (...args) => {
      this.setState(...args)
    }


    this.loadData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.loadData();
    }
  }
  lazyLoad = async () => {
    const scroll = (document.documentElement.scrollHeight - window.innerHeight) === window.scrollY;
    if (scroll) {
      this.setState({ limit: this.state.limit + 9 })
    }
  }

  loadData = () => {
    this.props.getItems([['available', '==', 'true']], this.state.limit, this.state.startItemId);
  };

  // 
  render() {
    const { items } = this.props;

    if (items.error) {
      return (
        <div>
          <ErrorPage />
        </div>
      );
    }
    return (
      <div className="App">
        <Helmet>
          <title>Хозяйственные товары в Ростове-на-Дону</title>
          <meta name="description" content="Хозяйственные товары в Ростове-на-Дону, Меню" />
          <meta
            name="keywords"
            content="Хозяйственные товары в Ростове-на-Дону, hoztovary, hoztovary161, 161, хозтовары 161,хозтовары, hoztovary161ru,"
          />
        </Helmet>
        <div className="gen_div container">
          <div className="title-homePage">
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

              {(items.isLoaded || !items.data) ? <div className='m-3'> <button type="button" className='btn btn-link addItems' onClick={() => this.setState({ limit: this.state.limit + 9 })}>Ещё</button></div> : <div className="m-4"><Loading /></div>}

            </div>
          </div>
        </div>
      </div >
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
    getItems: (query, limit, startItemId) => dispatch(fetchItems(query, limit, startItemId)),
  };
}

const enhance = compose(connect(mapStateToProps, mapDispatchToProps), withRouter);

export default enhance(HomePage);
