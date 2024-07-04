import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselCard from "../CarouselCard/CarouselCard";
import { responsive } from "./responsive";
import { Movie } from "../../types/movieCard";
export interface CustomCarouselProps {
  data: Movie[];
}
export default function CustomCarousel({ data }: CustomCarouselProps) {
  console.log(data);
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
        return (
          <div key={item.id}>
            <CarouselCard key={item.id} movie={item} />
          </div>
        );
      })}
    </Slider>
  );
}
