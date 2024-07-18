"use client";
import Image from "next/legacy/image";
import main from "@/public/introAu.png";
import screenshot1 from "@/public/slider/screenshot1.png";
import screenshot2 from "@/public/slider/screenshot2.png";
import screenshot3 from "@/public/slider/screenshot4.png"; // Fixed to screenshot3.png
import * as S from "./styles";
import React from "react";
import { Carousel } from "antd";

const Intro = () => {
  return (
    <S.HomeWrapper>
      <S.ImageWrapper>
        <Image
          className="post-image"
          src={main}
          alt="Screenshot 1"
          height={450}
          width={250}
          objectFit="cover"
        />
      </S.ImageWrapper>
      <Carousel autoplay fade dots={false}>
        <S.ContentStyle>
          <S.ImageSliderWrapper>
            <Image
              src={screenshot1}
              alt="Screenshot 1"
              className="post-image"
              height={450}
              width={250}
              objectFit="cover"
            />
          </S.ImageSliderWrapper>
        </S.ContentStyle>
        <S.ContentStyle>
          <S.ImageSliderWrapper>
            <Image
              src={screenshot2}
              alt="Screenshot 2"
              className="post-image"
              height={450}
              width={250}
              objectFit="cover"
            />
          </S.ImageSliderWrapper>
        </S.ContentStyle>
        <S.ContentStyle>
          <S.ImageSliderWrapper>
            <Image
              src={screenshot3}
              alt="Screenshot 3"
              className="post-image"
              height={450}
              width={250}
              objectFit="cover"
            />
          </S.ImageSliderWrapper>
        </S.ContentStyle>
      </Carousel>
    </S.HomeWrapper>
  );
};

export default Intro;
