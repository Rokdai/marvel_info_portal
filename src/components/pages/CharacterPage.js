import { memo } from "react/cjs/react.development";
import styled from "styled-components";

import { black, emphasis, silver } from "../../styles/constants";

import GridWrapper from "../GridWrapper/GridWrapper";
import Wrapper from "../Wrapper/Wrapper";
import Img from "../Img/Img";
import H2 from "../H2/H2";
import TextBox from "../TextBox/TextBox";
import BtnOrLink from "../BtnOrLink/BtnOrLink";

import thor from "../../resources/temp/Thumbnail.png";

const CharacterPage = ({ pad }) => {
  const Main = styled.main`
    padding: ${pad};
  `;
  return (
    <Main>
      <GridWrapper
        gTC={"repeat(2, 50%)"}
        bS={"5px 5px 20px rgba(0, 0, 0, 0.25)"}
        children={
          <GridWrapper
            gTC={"180px auto"}
            cG={"30px"}
            pad={"35px 35px 35px 40px"}
            children={
              <>
                <Img
                  src={thor}
                  alt={"Random character"}
                  width={"180px"}
                  height={"180px"}
                />
                <Wrapper
                  children={
                    <>
                      <H2
                        text={"Thor"}
                        fS={"2.2"}
                        lH={"2.6"}
                        fW={"bold"}
                        color={black}
                      />
                      <TextBox
                        text={
                          "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate..."
                        }
                        fS={"1.4"}
                        lH={"1.6"}
                        height={"90px"}
                        tO={"ellipsis"}
                      />
                      <BtnOrLink
                        width={"101px"}
                        height={"38px"}
                        bg_color={emphasis}
                      />
                    </>
                  }
                />
              </>
            }
          />
        }
      />
    </Main>
  );
};

export default memo(CharacterPage);
