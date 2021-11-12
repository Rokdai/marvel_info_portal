import { memo } from "react/cjs/react.development";
import styled from "styled-components";
import PropTypes from "prop-types";

import { white, black, emphasis, silver } from "../../styles/constants";

import GridWrapper from "../GridWrapper/GridWrapper";
import Wrapper from "../Wrapper/Wrapper";
import Img from "../Img/Img";
import H2 from "../H2/H2";
import TextBox from "../TextBox/TextBox";
import BtnOrLink from "../BtnOrLink/BtnOrLink";
import Card from "../App/Card/Card";
import List from "../List/List";

import randomCharacterBg from "../../resources/img/random_bg.png";
import main_bg from "../../resources/img/main_bg.png";
import thor from "../../resources/temp/Thumbnail.png";
import card from "../../resources/temp/card.png";

const CharacterPage = ({ pad, pos }) => {
  const Main = styled.main`
    padding: ${pad};
    position: ${pos};
  `;
  return (
    <Main>
      <GridWrapper
        gTC={"repeat(2, 50%)"}
        bS={"5px 5px 20px rgba(0, 0, 0, 0.25)"}
      >
        <GridWrapper gTC={"180px auto"} cG={"30px"} pad={"35px 35px 35px 40px"}>
          <Img
            src={thor}
            alt={"Random character"}
            width={"180px"}
            height={"180px"}
          />
          <Wrapper display={"flex"} fD={"column"} gap={"10px"}>
            <H2 text={"Thor"} fS={"2.2"} lH={"2.6"} fW={"bold"} color={black} />
            <TextBox
              text={
                "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate..."
              }
              fS={"1.4"}
              lH={"1.6"}
              height={"90px"}
              tO={"ellipsis"}
            />
            <Wrapper display={"flex"} gap={"30px"}>
              <BtnOrLink
                width={"101px"}
                height={"38px"}
                bg_color={emphasis}
                pseudo_bg={white}
                fS={"1.4"}
                lH={"1.6"}
                color={white}
                mT={"3px"}
                text={"HOmEPAGE"}
              />
              <BtnOrLink
                width={"101px"}
                height={"38px"}
                bg_color={silver}
                pseudo_bg={white}
                fS={"1.4"}
                lH={"1.6"}
                color={white}
                mT={"3px"}
                text={"wiki"}
              />
            </Wrapper>
          </Wrapper>
        </GridWrapper>
        <Wrapper pad={"35px 136px 35px 40px"} bC={black} pos={"relative"}>
          <TextBox
            text={"Random character for today!"}
            fS={"2.4"}
            lH={"2.8"}
            fW={"bold"}
            color={white}
          />
          <TextBox
            text={"Do you want to get to know him better?"}
            fS={"2.4"}
            lH={"2.8"}
            fW={"bold"}
            color={white}
          />
          <TextBox
            text={"Or choose another one"}
            fS={"2.4"}
            lH={"2.8"}
            fW={"bold"}
            color={white}
            mT={"41px"}
          />
          <BtnOrLink
            type={"Btn"}
            width={"101px"}
            height={"38px"}
            bg_color={emphasis}
            pseudo_bg={black}
            fS={"1.4"}
            lH={"1.6"}
            color={white}
            mT={"13px"}
            text={"HOmEPAGE"}
          />
          <Img
            src={randomCharacterBg}
            alt="Random block background"
            width={"203px"}
            height={"189px"}
            pos={"absolute"}
            bottom={"0"}
            right={"-35px"}
          />
        </Wrapper>
      </GridWrapper>
      <GridWrapper gTC={"60% calc(40% - 25px)"} cG={"25px"} mT={"50px"}>
        <Wrapper display={"flex"} fWr={"wrap"} gap={"25px"}>
          <Card
            width={"200px"}
            height={"318px"}
            display={"flex"}
            fD={"column"}
            aI={"flex-start"}
            bg_color={black}
            bS={"5px 5px 20px rgba(0, 0, 0, 0.25)"}
          >
            <Img
              src={card}
              alt={"Character"}
              width={"200px"}
              height={"200px"}
            />
            <Wrapper pad={"15px"}>
              <H2
                text={"abyss"}
                fS={"2.2"}
                lH={"2.6"}
                fW={"bold"}
                color={white}
              />
            </Wrapper>
          </Card>
          <Card
            width={"200px"}
            height={"318px"}
            display={"flex"}
            fD={"column"}
            aI={"flex-start"}
            bg_color={black}
          >
            <Img
              src={card}
              alt={"Character"}
              width={"200px"}
              height={"200px"}
            />
            <Wrapper pad={"15px"}>
              <H2
                text={"abyss"}
                fS={"2.2"}
                lH={"2.6"}
                fW={"bold"}
                color={white}
              />
            </Wrapper>
          </Card>
          <Card
            width={"200px"}
            height={"318px"}
            display={"flex"}
            fD={"column"}
            aI={"flex-start"}
            bg_color={black}
          >
            <Img
              src={card}
              alt={"Character"}
              width={"200px"}
              height={"200px"}
            />
            <Wrapper pad={"15px"}>
              <H2
                text={"abyss"}
                fS={"2.2"}
                lH={"2.6"}
                fW={"bold"}
                color={white}
              />
            </Wrapper>
          </Card>
          <Card
            width={"200px"}
            height={"318px"}
            display={"flex"}
            fD={"column"}
            aI={"flex-start"}
            bg_color={black}
          >
            <Img
              src={card}
              alt={"Character"}
              width={"200px"}
              height={"200px"}
            />
            <Wrapper pad={"15px"}>
              <H2
                text={"abyss"}
                fS={"2.2"}
                lH={"2.6"}
                fW={"bold"}
                color={white}
              />
            </Wrapper>
          </Card>
          <Card
            width={"200px"}
            height={"318px"}
            display={"flex"}
            fD={"column"}
            aI={"flex-start"}
            bg_color={black}
          >
            <Img
              src={card}
              alt={"Character"}
              width={"200px"}
              height={"200px"}
            />
            <Wrapper pad={"15px"}>
              <H2
                text={"abyss"}
                fS={"2.2"}
                lH={"2.6"}
                fW={"bold"}
                color={white}
              />
            </Wrapper>
          </Card>
          <Card
            width={"200px"}
            height={"318px"}
            display={"flex"}
            fD={"column"}
            aI={"flex-start"}
            bg_color={black}
          >
            <Img
              src={card}
              alt={"Character"}
              width={"200px"}
              height={"200px"}
            />
            <Wrapper pad={"15px"}>
              <H2
                text={"abyss"}
                fS={"2.2"}
                lH={"2.6"}
                fW={"bold"}
                color={white}
              />
            </Wrapper>
          </Card>
          <Card
            width={"200px"}
            height={"318px"}
            display={"flex"}
            fD={"column"}
            aI={"flex-start"}
            bg_color={black}
          >
            <Img
              src={card}
              alt={"Character"}
              width={"200px"}
              height={"200px"}
            />
            <Wrapper pad={"15px"}>
              <H2
                text={"abyss"}
                fS={"2.2"}
                lH={"2.6"}
                fW={"bold"}
                color={white}
              />
            </Wrapper>
          </Card>
          <Card
            width={"200px"}
            height={"318px"}
            display={"flex"}
            fD={"column"}
            aI={"flex-start"}
            bg_color={black}
          >
            <Img
              src={card}
              alt={"Character"}
              width={"200px"}
              height={"200px"}
            />
            <Wrapper pad={"15px"}>
              <H2
                text={"abyss"}
                fS={"2.2"}
                lH={"2.6"}
                fW={"bold"}
                color={white}
              />
            </Wrapper>
          </Card>
          <Card
            width={"200px"}
            height={"318px"}
            display={"flex"}
            fD={"column"}
            aI={"flex-start"}
            bg_color={black}
          >
            <Img
              src={card}
              alt={"Character"}
              width={"200px"}
              height={"200px"}
            />
            <Wrapper pad={"15px"}>
              <H2
                text={"abyss"}
                fS={"2.2"}
                lH={"2.6"}
                fW={"bold"}
                color={white}
              />
            </Wrapper>
          </Card>
          <Wrapper width={"100%"} display={"flex"} jC={"center"} aI={"center"}>
            <BtnOrLink
              text={"load more"}
              type={"Btn"}
              width={"170px"}
              height={"38px"}
              color={white}
              bg_color={emphasis}
              pseudo_bg={white}
              fS={"1.4"}
              lH={"1.6"}
            />
          </Wrapper>
        </Wrapper>
        <Wrapper
          width={"100%"}
          pad={"25px"}
          height={"min-content"}
          bC={white}
          bS={"5px 5px 20px rgba(0, 0, 0, 0.25)"}
        >
          <Wrapper display={"flex"} gap={"25px"}>
            <Img
              src={card}
              alt="Character information avatar"
              width={"150px"}
              height={"150px"}
            />

            <Wrapper>
              <H2
                text={"Loki"}
                fS={"2.2"}
                lH={"2.6"}
                fW={"bold"}
                color={black}
              />
              <BtnOrLink
                width={"101px"}
                height={"38px"}
                bg_color={emphasis}
                pseudo_bg={white}
                fS={"1.4"}
                lH={"1.6"}
                color={white}
                mT={"35px"}
                text={"HOmEPAGE"}
              />
              <BtnOrLink
                width={"101px"}
                height={"38px"}
                bg_color={silver}
                pseudo_bg={white}
                fS={"1.4"}
                lH={"1.6"}
                color={white}
                mT={"10px"}
                text={"wiki"}
              />
            </Wrapper>
          </Wrapper>
          <TextBox
            text={
              "In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda."
            }
            fS={"1.4"}
            lH={"1.6"}
            mT={"15px"}
          />
          <TextBox
            text={"Comics:"}
            fS={"1.8"}
            lH={"2.1"}
            fW={"bold"}
            mT={"10px"}
          />
          <List
            text={"All-Winners Squad: Band of Heroes (2011) #3"}
            display={"flex"}
            fD={"column"}
            gap={"10px"}
            fS={"1.4"}
            lH={"1.6"}
            mT={"13px"}
            bS={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          />
          <List
            text={"All-Winners Squad: Band of Heroes (2011) #3"}
            display={"flex"}
            fD={"column"}
            gap={"10px"}
            fS={"1.4"}
            lH={"1.6"}
            mT={"13px"}
            bS={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          />
          <List
            text={"All-Winners Squad: Band of Heroes (2011) #3"}
            display={"flex"}
            fD={"column"}
            gap={"10px"}
            fS={"1.4"}
            lH={"1.6"}
            mT={"13px"}
            bS={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          />
          <List
            text={"All-Winners Squad: Band of Heroes (2011) #3"}
            display={"flex"}
            fD={"column"}
            gap={"10px"}
            fS={"1.4"}
            lH={"1.6"}
            mT={"13px"}
            bS={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          />
          <List
            text={"All-Winners Squad: Band of Heroes (2011) #3"}
            display={"flex"}
            fD={"column"}
            gap={"10px"}
            fS={"1.4"}
            lH={"1.6"}
            mT={"13px"}
            bS={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          />
          <List
            text={"All-Winners Squad: Band of Heroes (2011) #3"}
            display={"flex"}
            fD={"column"}
            gap={"10px"}
            fS={"1.4"}
            lH={"1.6"}
            mT={"13px"}
            bS={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          />
        </Wrapper>
      </GridWrapper>
      <Img
        src={main_bg}
        alt={"Main background"}
        width={"467px"}
        height={"372px"}
        pos={"absolute"}
        bottom={"0"}
        right={"-155px"}
        zI={"-1"}
      />
    </Main>
  );
};

CharacterPage.propTypes = {
  pad: PropTypes.string,
  pos: PropTypes.string,
};

export default memo(CharacterPage);
