import { memo } from "react/cjs/react.development";
import styled from "styled-components";

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

export default memo(H2);
