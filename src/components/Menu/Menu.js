import { memo } from "react/cjs/react.development";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Menu = ({ display, gap, delimiter, fS, lH, fW }) => {
  const Nav = styled.nav`
    display: ${display};
    justify-content: space-between;
    gap: ${gap};
    font-size: ${fS}rem;
    line-height: ${lH}rem;
    font-weight: ${fW};
  `;

  const checkDelimiter = () => {
    return delimiter ? delimiter : null;
  };

  return (
    <Nav>
      <NavLink to="/">Characters</NavLink>
      {checkDelimiter()}
      <NavLink to="/comics">Comics</NavLink>
    </Nav>
  );
};

export default memo(Menu);
