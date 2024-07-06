import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselCard from "../CarouselCard/CarouselCard";
import { responsive } from "./responsive";
import { MoviesImdb100 } from '../../types/MoviesImdb100'

export interface CustomCarouselProps {
  data: MoviesImdb100[];
}
export default function CustomCarousel({ data }: CustomCarouselProps) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: responsive,
  };

  return (
    <Slider {...settings}>
      {data.map((item) => {
        return <CarouselCard key={item.rating} movie={item} />;
      })}
    </Slider>
  );
}
