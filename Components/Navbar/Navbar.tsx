import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Nav = styled.nav<{ solidNav: boolean }>`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: 1rem 2.5rem;
  color: #ffffff;
  gap: 2rem;
  background-color: ${({ solidNav }) => (solidNav ? "#ffffff" : "transparent")};
`;

const NavList = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ul = styled.ul<{ solidNav: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.45rem;
  list-style: none;
  padding-inline-start: 0;

  li {
    a {
      text-decoration: none;
      color: ${({ solidNav }) => (solidNav ? "#000000" : "#ffffff")};
      font-size: 1rem;
      font-weight: 500;

      &:hover {
        border-bottom: 1px solid
          ${({ solidNav }) => (solidNav ? "#000000" : "#ffffff")};
      }
    }
  }
`;

const H2 = styled.h2<{ solidNav: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ solidNav }) => (solidNav ? "#000000" : "#ffffff")};
`;

const Form = styled.form<{ solidNav: boolean }>`
  position: relative;

  input {
    outline: none;
    border: none;
    border-radius: 0.5rem;
    background-color: ${({ solidNav }) =>
      solidNav ? "#00000014" : "#ffffff40"};
    height: 2.5rem;
    width: 12.5rem;
    box-sizing: border-box;
    padding: 0 1rem;
    color: ${({ solidNav }) => (solidNav ? "#000000" : "#ffffff")};

    &::placeholder {
      font-weight: 500;
      color: ${({ solidNav }) => (solidNav ? "#000000" : "#ffffff")};
    }
  }

  span {
    position: absolute;
    right: 0.5rem;
    top: 0.75rem;
    color: ${({ solidNav }) => (solidNav ? "#000000" : "#ffffff")};
  }
`;

export default function Navbar() {
  const [isSolidNav, setIsSolidNav] = useState(false);

  const handleScroll = () => {
    setIsSolidNav(window.scrollY >= 109);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Nav solidNav={isSolidNav}>
      <H2 solidNav={isSolidNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill={isSolidNav ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)"}
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        <span>Shop</span>
      </H2>
      <NavList>
        <Ul solidNav={isSolidNav}>
          <li>
            <Link href={"/"}>Shirts</Link>
          </li>
          <li>
            <Link href={"/"}>Stickers</Link>
          </li>
          <li>
            <Link href={"/"}>Hoodies</Link>
          </li>
          <li>
            <Link href={"/"}>Collectibles</Link>
          </li>
          <li>
            <Link href={"/"}>Housewares</Link>
          </li>
          <li>
            <Link href={"/"}>Headwear</Link>
          </li>
          <li>
            <Link href={"/"}>Sale</Link>
          </li>
          <li>
            <Link href={"/"}>Universe2022</Link>
          </li>
        </Ul>
        <Form solidNav={isSolidNav}>
          <input type="text" placeholder="Search The Shop" />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width={15}
              height={15}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
        </Form>
      </NavList>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke={
            isSolidNav ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)"
          }
          width={30}
          height={30}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </span>
    </Nav>
  );
}
