import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <p>Blockchain Demo</p>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.header`
  width: 100vw;
  height: 50px;
  background-color: #222;
  display: flex;
  justify-content: flex-start;
  p {
    font-size: 1.5rem;
    margin: auto 0;
    padding: 0 10px;
    color: #efefef;
  }
`;
