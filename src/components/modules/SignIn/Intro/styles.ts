import styled from "styled-components";
import img from "@/public/vien.png";

export const HomeWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  margin-top: 20px;

  .ant-carousel {
    position: relative;
    bottom: 420px;
    left: 120px;
  }
  .ant-carousel .slick-slide {
    position: relative;
    text-align: center;
    overflow: hidden;
  }
`;

export const ContentStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 250px;
  height: 445px;
  border: 3px solid transparent;
  border-radius: 20px;
  border-image: url(${img.src}) 50 / 50px;
  border-image-outset: 30px 5px 15px 10px;
  .post-image {
    object-fit: cover;
    border-radius: 0px 0px 10px 10px;
  }
`;

export const ImageSliderWrapper = styled.div`
  width: 245px;
  border: 3px solid transparent;
  padding: 30px 7px 9px 10px;
  border-image: url(${img.src}) 50 / 50px;

  .post-image {
    border-radius: 1px 1px 10px 10px;
    object-fit: cover;
  }
`;
