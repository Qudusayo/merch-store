import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Autoplay } from "swiper";
import Button from "../Button/Button";
import styled from "@emotion/styled";

export default function Carousel() {
  const pagination = {
    clickable: true,
    renderBullet: function (_: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        loop={true}
        freeMode={true}
        autoplay={true}
        speed={700}
        className={"mySwiper"}
      >
        <SwiperSlide className="swiper-slide-1">
          <CarouselContainer
            title="Universe 2022"
            details="New hats, tees, sweatshirts and more."
            buttonTitle="Shop Universe 2022"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-2">
          <CarouselContainer
            title="New Items on Sale"
            details="Get up to 50% off on select items."
            buttonTitle="Shop the Sale"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

const CarouselContainerDiv = styled.div`
  margin-top: 2em;
  color: #fff;
  text-align: left;
`;

const H1 = styled.h1`
  font-size: 3em;
  font-weight: 900;
`;

const P = styled.p`
  font-weight: bold;
  margin: 1.5em 0;
`;

const CarouselContainer = ({
  title,
  details,
  buttonTitle,
}: {
  title: string;
  details: string;
  buttonTitle: string;
}) => {
  return (
    <CarouselContainerDiv>
      <H1>{title}</H1>
      <P>{details}</P>
      <Button title={buttonTitle} />
    </CarouselContainerDiv>
  );
};
