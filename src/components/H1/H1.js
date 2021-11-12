import { memo } from "react/cjs/react.development";
import styled from "styled-components";

import { emphasis } from "../../styles/constants";

const H1 = ({ selectedText, text, fS, lH, fW, cursor }) => {
  const Title = styled.h1`
    font-size: ${fS}rem;
    line-height: ${lH}rem;
    font-weight: ${fW};
    cursor: ${cursor};
  `;

  const SelectedSpan = styled.span`
    color: ${emphasis};
    margin-right: 5px;
  `;

  const checkSelectedText = () => {
    return selectedText ? <SelectedSpan>{selectedText}</SelectedSpan> : null;
  };

  return (
    <Title>
      {checkSelectedText()}
      {text}
    </Title>
  );
};

export default memo(H1);
