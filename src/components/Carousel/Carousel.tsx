import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from '../CarouselCard/CarouselCard';
import { Box } from '@mui/material';
import { responsive } from './responsive'

export default function CustomCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: responsive
  };

  return (
      <Slider {...settings}>
        <div>
          <CarouselCard />
        </div>
        <div>
          <CarouselCard />
        </div>
        <div>
          <CarouselCard />
        </div>
        <div>
          <CarouselCard />
        </div>
      </Slider>
  );
}
