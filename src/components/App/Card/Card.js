import { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = ({
  width,
  height,
  display,
  fD,
  jC,
  aI,
  bg_color,
  bS,
  children,
}) => {
  const CardBox = styled.div`
    width: ${width};
    height: ${height};
    display: ${display};
    flex-direction: ${fD};
    justify-content: ${jC};
    align-items: ${aI};
    background-color: ${bg_color};
    box-shadow: ${bS};
    cursor: pointer;
  `;

  return <CardBox>{children}</CardBox>;
};

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  display: PropTypes.string,
  fD: PropTypes.string,
  jC: PropTypes.string,
  aI: PropTypes.string,
  bg_color: PropTypes.string,
  bS: PropTypes.string,
};

export default memo(Card);
