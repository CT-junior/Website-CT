import Styles from "./style.module.scss";

import { Swiper} from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


type Props = {
  children: React.ReactNode;
};

export function Carousel({ children }: Props) {
  return (
    <Swiper
      className={Styles.carousel}
      modules={[Autoplay]}
      spaceBetween={18}
      slidesPerView={2.5}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
        {children}
    </Swiper>
  );
}
