import { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const List = ({
  display,
  fD,
  jC,
  aI,
  gap,
  width,
  bS,
  fS,
  lH,
  fW,
  mT,
  text,
}) => {
  const Ul = styled.ul`
    display: ${display};
    flex-direction: ${fD};
    justify-content: ${jC};
    align-items: ${aI};
    gap: ${gap};
    font-size: ${fS}rem;
    line-height: ${lH}rem;
    font-weight: ${fW};
    margin-top: ${mT};
  `;

  const Li = styled.li`
    width: ${width};
    box-shadow: ${bS};
  `;

  return (
    <Ul>
      <Li>{text}</Li>
    </Ul>
  );
};

List.prpTypes = {
  display: PropTypes.string,
  fD: PropTypes.string,
  jC: PropTypes.string,
  aI: PropTypes.string,
  gap: PropTypes.string,
  width: PropTypes.string,
  bS: PropTypes.string,
  fS: PropTypes.string,
  lH: PropTypes.string,
  fW: PropTypes.string,
  mT: PropTypes.string,
  text: PropTypes.string,
};

export default memo(List);
