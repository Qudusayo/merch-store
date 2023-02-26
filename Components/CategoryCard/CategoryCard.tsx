import Image from "next/image";
import styled from "@emotion/styled";

const Span = styled.span`
  color: red;
  border: 1px solid red;
`;

const Div = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 300px;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.15s linear;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all 0.3s ease-in-out;
    position: absolute;
    z-index: -1;
    /* scale: 1.1; */
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    img {
      transform: scale(1.1);
    }
  }
`;

const CardContent = styled.div`
  background-color: #00000070;
  height: 100%;
  z-index: 100;
  transition: all 0.3s ease-in-out;
  color: #ffffff;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    width: 90%;
    font-size: 1.75rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: fit-content;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #ffffff;
  }

  &:hover {
    background-color: #00000055;
  }
`;

export default function CategoryCard({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <Div>
      <Image src={image} alt="Hoodies" width={300} height={300} />
      <CardContent>
        <h2>{title}</h2>
        <div>
          <span>View all</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            viewBox="0 0 24 24"
            strokeWidth="3"
            width={15}
            height={15}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
      </CardContent>
    </Div>
  );
}
