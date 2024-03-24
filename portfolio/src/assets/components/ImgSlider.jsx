import React from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const ImgSlider = () => {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <section className="portfolio-slide-wrapper">
        <div className="container">
          <h2 className="com-title text-center">My Portfolio</h2>
          <p className="com-para text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <OwlCarousel className="owl-theme" {...options} >
            <div className="item">
              <img src={require(`../images/slide_1.png`)} alt="" width="400px" height="220px" />
            </div>
            <div className="item">
              <img src={require(`../images/slide_2.png`)} alt="" width="400px" height="220px" />
            </div>
            <div className="item">
              <img src={require(`../images/slide_3.png`)} alt="" width="400px" height="220px" />
            </div>
            <div className="item">
              <img src={require(`../images/slide_4.png`)} alt="" width="400px" height="220px" />
            </div>
            <div className="item">
              <img src={require(`../images/slide_5.png`)} alt="" width="400px" height="220px" /></div>
          </OwlCarousel>

          <OwlCarousel className="owl-theme" {...options}>
            <div className="item card">

              <p className="para w-100 text-center">Hotpots</p>
              <h3 className="title w-100 text-center">From 799</h3>
            </div>
            <div className="item card">

              <p className="para w-100 text-center">Copper pots</p>
              <h3 className="title w-100 text-center">From 1263</h3>
            </div>
            <div className="item card">

              <p className="para w-100 text-center">Mixer & Grinder</p>
              <h3 className="title w-100 text-center">From 1349</h3>
            </div>
            <div className="item card">

              <p className="para w-100 text-center">Juicer</p>
              <h3 className="title w-100 text-center">shop now</h3>
            </div>
            <div className="item card">

              <p className="para w-100 text-center">Tea Pots Sets</p>
              <h3 className="title w-100 text-center">From 499</h3>
            </div>
            <div className="item card">

              <p className="para w-100 text-center">Ceramic Utensils</p>
              <h3 className="title w-100 text-center">shop now</h3>
            </div>
            <div className="item card">

              <p className="para w-100 text-center">Dining Sets</p>
              <h3 className="title w-100 text-center">From 7999</h3>
            </div>
            <div className="item card">

              <p className="para w-100 text-center">Chimney</p>
              <h3 className="title w-100 text-center">6999</h3>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default ImgSlider;
