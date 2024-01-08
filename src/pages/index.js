import * as React from "react";
import "../styles/global.css";
import { rem } from "polished";
import NavBar from "../components/NavBar";
import SideMenu from "../components/SideMenu";
import styled from "styled-components";
import TransferByDate from "../pageComponents/TransferByDate";

const SideMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  margin-left: ${rem(82)};
  max-width: ${rem(1200)};
  height: ${rem(942)};
  background-color: #f4f5f6;
  padding: ${rem(20)};
  box-sizing: border-box;
`;

const Title = styled.h4`
  margin: 0;
  color: rgba(45, 59, 78, 0.5);
  font-family: "Museo Sans", sans-serif;
  font-size: ${rem(11)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: ${rem(0.88)};
`;

const Header = styled.h1`
  margin: 0;
  color: #2d3b4e;
  font-family: "Museo Sans", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: ${rem(0.88)};
`;

const TitlesContainer = styled.div`
  width: ${rem(1130)};
  height: ${rem(34)};
  flex-shrink: 0;
  border-radius: ${rem(6)};
  background-color: rgba(45, 59, 78, 0.04);
  margin-top: ${rem(20)};
  display: flex;
  align-items: center;
`;

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <SideMenuWrapper>
        <SideMenu />
      </SideMenuWrapper>
      <Wrapper>
        <Header>Transfers</Header>
        <TitlesContainer>
          <Title style={{ marginLeft: rem(10) }}>Status</Title>
          <Title style={{ marginLeft: rem(20) }}>Traveler</Title>
          <Title style={{ marginLeft: rem(160) }}>Arrival/Departure</Title>
          <Title style={{ marginLeft: rem(80) }}>From/To</Title>
          <Title style={{ marginLeft: rem(80) }}>Opportunities</Title>
        </TitlesContainer>
        <TransferByDate />
      </Wrapper>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Transfer List</title>;
