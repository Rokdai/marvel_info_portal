import { memo } from "react/cjs/react.development";
import styled from "styled-components";

const Img = ({ width, height, pos, top, bottm, right, left, src, alt }) => {
  const Image = styled.img`
    width: ${width};
    height: ${height};
    position: ${pos};
    top: ${top};
    bottom: ${bottm};
    right: ${right};
    left: ${left};
  `;

  return <Image src={src} alt={alt} />;
};

export default memo(Img);
