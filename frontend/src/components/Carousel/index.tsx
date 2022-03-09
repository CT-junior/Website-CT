import Styles from "./styles.module.scss";

import { Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import useWindowDimensions from "../../Hooks/useWindowDimensions";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  children: React.ReactNode;
};

export function Carousel({ children }: Props) {
  const { width } = useWindowDimensions();

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      className={Styles.carousel}
      modules={[Autoplay, Pagination]}
      spaceBetween={18}
      slidesPerView={width / 400}
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
