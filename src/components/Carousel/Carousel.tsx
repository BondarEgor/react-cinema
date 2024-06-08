import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCardSmall from '../MovieCardSmall/MovieCardSmall';

export default function CustomCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0
  };

  return (
    <div className="slider-container" style={{  }}>
      <Slider  {...settings} >
        <div>
          <MovieCardSmall />
        </div>
        <div>
          <MovieCardSmall />
        </div>
        <div>
          <MovieCardSmall />
        </div>
      </Slider>
    </div>
  );
}
