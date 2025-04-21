import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import s from "./../Main.module.scss";
import c from "./Carousel.scss";
import { Link } from "react-router-dom";

const Carousel = ({ games }) => {
  console.log(games);
  return (
    <Swiper
      className={c.swiper}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      {games.map((img, index) => (
        <SwiperSlide key={index}>
          <Link to={`/game-page/${img.id}`}>
            <img
              className={s.main__rec__img}
              src={img.imageUrl}
              alt={`Game${index}`}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
