import Styles from "./styles.module.scss";

import { Swiper, SwiperProps } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import useWindowDimensions from "../../Hooks/useWindowDimensions";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/controller"
import { useEffect, useState } from "react";

interface CarouselProps extends SwiperProps {
  children: React.ReactNode;
};

export function Carousel({ children, ...rest }: CarouselProps) {
  const { width } = useWindowDimensions();

  //código para depurar e corrigir hydration issues
  const [showCarousel, setShowCarousel] = useState(false)

  useEffect(() => {
    setShowCarousel(true);
  }, [showCarousel]);

  if (showCarousel) {
    return (
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        className={Styles.carouselContainer}
        tag={Styles.carouselWrapper}
        centeredSlides={true}
        spaceBetween={18}
        slidesPerView={width / 400
        }
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        {...rest}
      >
        {children}
      </Swiper >
    );
  }
  return null;

}
