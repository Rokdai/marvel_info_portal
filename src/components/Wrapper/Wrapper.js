import { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = ({
  width,
  height,
  display,
  fD,
  jC,
  fWr,
  aI,
  gap,
  pad,
  bC,
  pos,
  bS,
  children,
}) => {
  const Wr = styled.div`
    width: ${width};
    height: ${height};
    display: ${display};
    flex-direction: ${fD};
    justify-content: ${jC};
    flex-wrap: ${fWr};
    align-items: ${aI};
    gap: ${gap};
    padding: ${pad};
    background-color: ${bC};
    position: ${pos};
    box-shadow: ${bS};
  `;

  return <Wr>{children}</Wr>;
};

Wrapper.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  display: PropTypes.string,
  fD: PropTypes.string,
  jC: PropTypes.string,
  fWr: PropTypes.string,
  aI: PropTypes.string,
  gap: PropTypes.string,
  pad: PropTypes.string,
  bC: PropTypes.string,
  pos: PropTypes.string,
  bS: PropTypes.string,
};

export default memo(Wrapper);
