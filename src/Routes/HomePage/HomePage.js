import React, { Component } from 'react';
import $ from "jquery";
import './HomePage.scss';
import SlickSliderHomePage from '../../Components/SlickSliderHomePage/SlickSliderHomePage';
import Categories from '../../Components/Categories';



class HomePage extends Component {
  componentDidMount() {



    $(document).ready(function () {
      // $('.category-open-btn').click(function () {
      //   $('body').toggleClass('menu-btn-clicked');
      //   $('body').toggleClass(' hovred');
      //   $(".firstLine").toggleClass("firstLineX")
      //   $(".secondLine").toggleClass("secondLineX")
      //   $(".thirdLine").toggleClass("thirdLineX")
      // });
      // $('.categories_li').hover(function () {
      //   // over
      //   $('body').addClass(' hovred');
      // }, function () {
      //   $('body').removeClass(' hovred');
      // }
      // );

      // $('.general-slide').slick({
      //   infinite: true,
      //   // autoplay: true,
      //   autoplaySpeed: 1000,
      //   slidesToShow: 3,
      //   dots: true,
      //   slidesToScroll: 1,
      //   responsive: [
      //     {
      //       breakpoint: 992,
      //       settings: {
      //         slidesToShow: 3,
      //         slidesToScroll: 1,
      //         centerMode: false,
      //       }
      //     },
      //     {
      //       breakpoint: 777,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 1,
      //         centerMode: false,
      //       }
      //     },
      //     {
      //       breakpoint: 481,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1,
      //         centerMode: false,
      //       }
      //     },
      //   ]
      // });
    });

  }

  render() {
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
                <div className="card ">
                  <a href="">
                    <img className="card-img-top"
                      src="https://i.pinimg.com/736x/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"
                      alt="Card image cap"></img>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural
                      lead-in
                                      to additional conte.</p>
                    </div>
                  </a>
                </div>
                <div className="card ">
                  <a href="">
                    <img className="card-img-top"
                      src="https://i.pinimg.com/736x/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"
                      alt="Card image cap"></img>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural
                      lead-in
                                      to additional conte.</p>
                    </div>
                  </a>
                </div>
                <div className="card ">
                  <a href="">
                    <img className="card-img-top"
                      src="https://i.pinimg.com/736x/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"
                      alt="Card image cap"></img>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural
                      lead-in
                                      to additional conte.</p>
                    </div>
                  </a>
                </div>
                <div className="card ">
                  <a href="">
                    <img className="card-img-top"
                      src="https://i.pinimg.com/736x/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"
                      alt="Card image cap"></img>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural
                      lead-in
                                      to additional conte.</p>
                    </div>
                  </a>
                </div>
                <div className="card ">
                  <a href="">
                    <img className="card-img-top"
                      src="https://i.pinimg.com/736x/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"
                      alt="Card image cap"></img>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural
                      lead-in
                                      to additional conte.</p>
                    </div>
                  </a>
                </div>
                <div className="card ">
                  <a href="">
                    <img className="card-img-top"
                      src="https://i.pinimg.com/736x/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"
                      alt="Card image cap"></img>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural
                      lead-in
                                      to additional conte.</p>
                    </div>
                  </a>
                </div>
                <div className="card ">
                  <a href="">
                    <img className="card-img-top"
                      src="https://i.pinimg.com/736x/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"
                      alt="Card image cap"></img>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural
                      lead-in
                                      to additional conte.</p>
                    </div>
                  </a>
                </div>
                <div className="card ">
                  <a href="">
                    <img className="card-img-top"
                      src="https://i.pinimg.com/736x/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"
                      alt="Card image cap"></img>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural
                      lead-in
                                      to additional conte.</p>
                    </div>
                  </a>
                </div>
                <div className="card ">
                  <a href="">
                    <img className="card-img-top"
                      src="https://i.pinimg.com/736x/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"
                      alt="Card image cap"></img>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural
                      lead-in
                                      to additional conte.</p>
                    </div>
                  </a>
                </div>
                <div className="card ">
                  <a href="">
                    <img className="card-img-top"
                      src="https://i.pinimg.com/736x/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"
                      alt="Card image cap"></img>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural
                      lead-in
                                      to additional conte.</p>
                    </div>
                  </a>
                </div>
                <div className="card ">
                  <a href="">
                    <img className="card-img-top"
                      src="https://i.pinimg.com/736x/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"
                      alt="Card image cap"></img>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural
                      lead-in
                                      to additional conte.</p>
                    </div>
                  </a>
                </div>
                <div className="card ">
                  <a href="">
                    <img className="card-img-top"
                      src="https://i.pinimg.com/736x/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg"
                      alt="Card image cap"></img>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural
                      lead-in
                                      to additional conte.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }

}

export default HomePage;
