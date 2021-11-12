import { memo } from "react/cjs/react.development";
import styled from "styled-components";
import PropTypes from "prop-types";

const Img = ({
  width,
  height,
  pos,
  top,
  bottom,
  right,
  left,
  zI,
  src,
  alt,
}) => {
  const Image = styled.img`
    width: ${width};
    height: ${height};
    position: ${pos};
    top: ${top};
    bottom: ${bottom};
    right: ${right};
    left: ${left};
    z-index: ${zI};
  `;

  return <Image src={src} alt={alt} />;
};

Img.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  pos: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  right: PropTypes.string,
  left: PropTypes.string,
  zI: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default memo(Img);
