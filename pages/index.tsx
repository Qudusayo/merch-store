import styled from "@emotion/styled";
import Carousel from "@/Components/Carousel/Carousel";
import CategoryCard from "@/Components/CategoryCard/CategoryCard";

const CarouselContainer = styled.div`
  width: 100%;
  height: 78.25vh;
`;

export default function Main() {
  return (
    <>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
    </>
  );
}
