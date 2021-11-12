import { memo } from "react/cjs/react.development";
import styled from "styled-components";

const BtnOrLink = ({
  width,
  height,
  bg_color,
  pseudo_bg,
  fS,
  lH,
  fW,
  color,
  b_color,
  text,
  type,
  href,
  onClick,
}) => {
  const Btn = styled.button`
    width: ${width};
    height: ${height};
    background-color: ${bg_color};
    font-size: ${fS};
    line-height: ${lH};
    font-weight: ${fW};
    color: ${color};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      border-top: 10px solid ${pseudo_bg};
      border-left: 10px solid ${pseudo_bg};
      position: absolute;
      top: 0;
      left: 0;
    }

    &::after {
      border-bottom: 10px solid ${pseudo_bg};
      border-right: 10px solid ${pseudo_bg};
      position: absolute;
      bottom: 0;
      right: 0;
    }
  `;

  const Link = styled.a`
    width: ${width};
    height: ${height};
    background-color: ${bg_color};
    font-size: ${fS};
    line-height: ${lH};
    font-weight: ${fW};
    color: ${color};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      border-top: 10px solid ${b_color};
      border-left: 10px solid ${b_color};
      position: absolute;
      top: 0;
      left: 0;
    }

    &::after {
      border-bottom: 10px solid ${b_color};
      border-right: 10px solid ${b_color};
      position: absolute;
      bottom: 0;
      right: 0;
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

export default memo(BtnOrLink);
