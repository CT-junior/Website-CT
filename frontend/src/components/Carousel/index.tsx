import Styles from "./styles.module.scss";

import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import useWindowDimensions from "../../Hooks/useWindowDimensions";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  loop?: boolean;
  children: React.ReactNode;
  perView?: number | any;
  bullets?: boolean;
};

export function Carousel({ children, loop, perView, bullets }: Props) {
  const { width } = useWindowDimensions();

  return bullets ? (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      className={Styles.carousel}
      modules={[Autoplay, Pagination]}
      spaceBetween={18}
      slidesPerView={perView || width / 400}
      loop={loop || false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {children}
    </Swiper>
  ) : (
    <Swiper
      className={Styles.carousel}
      modules={[Autoplay]}
      spaceBetween={18}
      slidesPerView={perView || width / 400}
      loop={loop || false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {children}
    </Swiper>
  );
}
