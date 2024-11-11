import React from "react";
import styled from "styled-components";

const Header = () => {
  return <HeaderStyle>Header</HeaderStyle>;
};

const HeaderStyle = styled.header`
  background-color: ${(props) => props.theme.color.background};

  h1 {
    color: white;
  }
`;

export default Header;
