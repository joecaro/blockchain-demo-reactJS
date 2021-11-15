import React from "react";
import styled from "styled-components";

export default function Nav({ children }) {
  return <NavContainer>{children}</NavContainer>;
}

const NavContainer = styled.nav`
  width: 100vw;
  display: flex;
  border-bottom: 1px solid #111;
  ul {
    list-style: none;
    padding: 0 10%;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    width: 100vw;
    height: 40px;
  }
  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    :hover {
      filter: drop-shadow(0 0 10px #00000088);
      transition: 0.2s;
    }
  }
`;
