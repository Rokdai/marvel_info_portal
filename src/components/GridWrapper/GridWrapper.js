import { memo } from "react/cjs/react.development";
import styled from "styled-components";

const GridWrapper = ({ gTC, cG, rG, bS, pad, children }) => {
  const GridWr = styled.div`
    display: grid;
    grid-template-columns: ${gTC};
    column-gap: ${cG};
    row-gap: ${rG};
    box-shadow: ${bS};
    padding: ${pad};
  `;

  return <GridWr>{children}</GridWr>;
};

export default memo(GridWrapper);
