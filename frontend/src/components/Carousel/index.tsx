import Styles from "./styles.module.scss";

import { Swiper} from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import { useEffect } from "react";


type Props = {
  children: React.ReactNode;
};

export function Carousel({ children }: Props) {
  const { width } = useWindowDimensions();

  return (
    <Swiper
      className={Styles.carousel}
      modules={[Autoplay]}
      spaceBetween={18}
      slidesPerView={width/400}
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
