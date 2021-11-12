import { memo } from "react";
import styled from "styled-components";

const Wrapper = ({ display, fD, jC, aI, gap, pad, bC, children }) => {
  const Wr = styled.div`
    display: ${display};
    flex-direction: ${fD};
    justify-content: ${jC};
    align-items: ${aI};
    gap: ${gap};
    padding: ${pad};
    background-color: ${bC};
  `;

  return <Wr>{children}</Wr>;
};

export default memo(Wrapper);
