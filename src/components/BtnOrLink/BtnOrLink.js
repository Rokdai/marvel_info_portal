import { memo } from "react/cjs/react.development";
import styled from "styled-components";
import PropTypes from "prop-types";

const BtnOrLink = ({
  width,
  height,
  bg_color,
  pseudo_bg,
  fS,
  lH,
  fW,
  color,
  mT,
  text,
  type,
  href,
  onClick,
}) => {
  const Btn = styled.button`
    & {
      width: ${width};
      height: ${height};
      background-color: ${bg_color};
      font-size: ${fS}rem;
      line-height: ${lH}rem;
      font-weight: ${fW};
      color: ${color};
      margin-top: ${mT};
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      cursor: pointer;
      border: none;
    }

    &::before {
      content: "";
      border-top: 10px solid ${pseudo_bg};
      border-right: 10px solid transparent;
      position: absolute;
      top: 0;
      left: 0;
    }

    &::after {
      content: "";
      border-bottom: 10px solid ${pseudo_bg};
      border-left: 10px solid transparent;
      position: absolute;
      bottom: 0;
      right: 0;
    }

    &:hover {
      transition: all 0.3s;
      transform: translateY(-5px);
    }
  `;

  const Link = styled.a`
    & {
      width: ${width};
      height: ${height};
      background-color: ${bg_color};
      font-size: ${fS}rem;
      line-height: ${lH}rem;
      font-weight: ${fW};
      color: ${color};
      margin-top: ${mT};
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      cursor: pointer;
    }

    &::before {
      content: "";
      width: 0;
      height: 0;
      border-top: 10px solid ${pseudo_bg};
      border-right: 10px solid transparent;
      position: absolute;
      top: 0;
      left: 0;
    }

    &::after {
      content: "";
      width: 0;
      height: 0;
      border-bottom: 10px solid ${pseudo_bg};
      border-left: 10px solid transparent;
      position: absolute;
      bottom: 0;
      right: 0;
    }

    &:hover {
      transition: all 0.3s;
      transform: translateY(-5px);
    }
  `;

  const checkType = () => {
    return type === "Btn" ? (
      <Btn onClick={onClick}>{text}</Btn>
    ) : (
      <Link href={href}>{text}</Link>
    );
  };

  return <>{checkType()}</>;
};

BtnOrLink.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  bg_color: PropTypes.string,
  pseudo_bg: PropTypes.string,
  fS: PropTypes.string,
  lH: PropTypes.string,
  fW: PropTypes.string,
  color: PropTypes.string,
  mT: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default memo(BtnOrLink);
