import * as React from "react";
import "../styles/global.css";
import { rem } from "polished";
import NavBar from "../components/NavBar";
import SideMenu from "../components/SideMenu";
import styled from "styled-components";
import TransferByDate from "../pageComponents/TransferByDate";
import TitlesContainer from "../pageComponents/TitlesContainer";
import { breakpoints } from "../breakpoints";

const SideMenuWrapper = styled.div`
  position: absolute;
  top: 0;
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

  @media (max-width: ${breakpoints.laptop}) {
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
  }
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

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <SideMenuWrapper>
        <SideMenu />
      </SideMenuWrapper>
      <Wrapper>
        <Header>Transfers</Header>
        <TitlesContainer />
        <TransferByDate />
      </Wrapper>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Transfer List</title>;
