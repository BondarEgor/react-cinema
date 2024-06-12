import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselCard from '../CarouselCard/CarouselCard';
import { responsive } from './responsive';
import { useAppSelector } from '../../hooks/hooks';

export default function CustomCarousel() {
  const { data } = useAppSelector((state) => state.movies);
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
