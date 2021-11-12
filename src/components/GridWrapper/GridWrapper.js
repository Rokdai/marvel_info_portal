import { memo } from "react/cjs/react.development";
import styled from "styled-components";
import PropTypes from "prop-types";

const GridWrapper = ({ gTC, cG, rG, bS, pad, mT, children }) => {
  const GridWr = styled.div`
    display: grid;
    grid-template-columns: ${gTC};
    grid-column-gap: ${cG};
    grid-row-gap: ${rG};
    box-shadow: ${bS};
    padding: ${pad};
    margin-top: ${mT};
  `;

  return <GridWr>{children}</GridWr>;
};

GridWrapper.propTypes = {
  gTC: PropTypes.string,
  cG: PropTypes.string,
  rG: PropTypes.string,
  bS: PropTypes.string,
  pad: PropTypes.string,
  mT: PropTypes.string,
};

export default memo(GridWrapper);
