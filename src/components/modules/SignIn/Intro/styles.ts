import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  .ant-carousel {
    position: relative;
    bottom: 500px;
    left: 150px;
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
  width: 300px;
  height: 547px;
  border: 3px solid #c0c0c0;
  border-radius: 20px;
  .post-image {
    object-fit: cover;
    border-radius: 20px;
  }
`;
export const ImageSliderWrapper = styled.div`
  width: 300px;
  height: 547px;
  border: 3px solid #ff000000;
  border-radius: 20px;
  .post-image {
    object-fit: cover;
    border-radius: 20px;
  }
`;
