import { memo } from "react/cjs/react.development";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { emphasis } from "../../styles/constants";

const Menu = ({ display, gap, delimiter, fS, lH, fW }) => {
  const Nav = styled.nav`
    & {
      display: ${display};
      justify-content: space-between;
      gap: ${gap};
      font-size: ${fS}rem;
      line-height: ${lH}rem;
      font-weight: ${fW};
    }

    & > a:hover {
      color: ${emphasis};
    }
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

Menu.propTypes = {
  display: PropTypes.string,
  gap: PropTypes.string,
  delimiter: PropTypes.string,
  fS: PropTypes.string,
  lH: PropTypes.string,
  fW: PropTypes.string,
};

export default memo(Menu);
