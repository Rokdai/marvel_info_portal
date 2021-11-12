import { memo } from "react/cjs/react.development";
import styled from "styled-components";
import PropTypes from "prop-types";

const H2 = ({ fS, lH, fW, color, text }) => {
  const Title = styled.h2`
    font-size: ${fS}rem;
    line-height: ${lH}rem;
    font-weight: ${fW};
    color: ${color};
    text-transform: uppercase;
  `;

  return <Title>{text}</Title>;
};

H2.propTypes = {
  fS: PropTypes.string,
  lH: PropTypes.string,
  fW: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};

export default memo(H2);
