import { memo } from "react/cjs/react.development";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import H1 from "../H1/H1";
import Menu from "../Menu/Menu";

const Header = ({ pad, display, jC }) => {
  const HeaderWrapper = styled.header`
    padding: ${pad};
    display: ${display};
    justify-content: ${jC};
  `;

  return (
    <HeaderWrapper>
      <Link to="/">
        <H1
          selectedText={"Marvel"}
          text={"information portal"}
          fS={"2.8"}
          lH={"2.8"}
          fW={"bold"}
          cursor={"pointer"}
        />
      </Link>
      <Menu
        display={"flex"}
        gap={"8px"}
        fS={"2.4"}
        lH={"2.8"}
        fW={"bold"}
        delimiter={"/"}
      />
    </HeaderWrapper>
  );
};

Header.propTypes = {
  pad: PropTypes.string,
  display: PropTypes.string,
  jC: PropTypes.string,
};

export default memo(Header);
