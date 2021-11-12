import { memo } from "react/cjs/react.development";
import styled from "styled-components";
import PropTypes from "prop-types";

const TextBox = ({ text, fW, fS, lH, color, height, tO, mT }) => {
  const P = styled.p`
    font-weight: ${fW};
    font-size: ${fS}rem;
    line-height: ${lH}rem;
    color: ${color};
    height: ${height};
    text-overflow: ${tO};
    margin-top: ${mT};
  `;

  return <P>{text}</P>;
};

TextBox.propTypes = {
  text: PropTypes.string,
  fW: PropTypes.string,
  fS: PropTypes.string,
  lH: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  tO: PropTypes.string,
  mT: PropTypes.string,
};

export default memo(TextBox);
