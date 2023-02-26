import styled from "@emotion/styled";
import Carousel from "@/Components/Carousel/Carousel";
import CategoryCard from "@/Components/CategoryCard/CategoryCard";
import Navbar from "@/Components/Navbar/Navbar";

const CarouselContainer = styled.div`
  width: 100%;
  height: 78.25vh;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  width: 93%;
  margin: 8.5rem auto;
`;

export default function Main() {
  return (
    <>
      <Navbar />
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
      <Grid>
        <CategoryCard
          title="Yubikeys"
          image="/images/collections/yubikeys.jpeg"
        />
        <CategoryCard
          title="Hoodies & Sweatshirts"
          image="/images/collections/hoodies.jpg"
        />
        <CategoryCard title="Shirts" image="/images/collections/shirts.jpeg" />
      </Grid>
      <Grid>
        <CategoryCard
          title="Stickers"
          image="/images/collections/stickers.jpeg"
        />
        <CategoryCard
          title="Best Sellers"
          image="/images/collections/sale.jpeg"
        />
        <CategoryCard
          title="Fall 2021 Collection"
          image="/images/collections/fall.jpeg"
        />
      </Grid>
    </>
  );
}
