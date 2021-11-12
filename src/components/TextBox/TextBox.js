import { memo } from "react/cjs/react.development";
import styled from "styled-components";

const TextBox = ({ text, fW, fS, lH, color, height, tO }) => {
  const P = styled.p`
    font-weight: ${fW};
    font-size: ${fS}rem;
    line-height: ${lH}rem;
    color: ${color};
    height: ${height};
    text-overflow: ${tO};
  `;

  return <P>{text}</P>;
};

export default memo(TextBox);
