import * as React from "react";
import "../styles/global.css";
import { rem } from "polished";
import NavBar from "../components/NavBar";
import SideMenu from "../components/SideMenu";
import styled from "styled-components";
import TransferByDate from "../pageComponents/TransferByDate";
import TitlesContainer from "../pageComponents/TitlesContainer";
import MobileHeader from "../components/MobileHeader";
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
  max-width: ${rem(1380)};
  height: ${rem(942)};
  background-color: #f4f5f6;
  padding: ${rem(20)};
  box-sizing: border-box;

  @media (max-width: ${breakpoints.laptop}) {
    margin-left: ${rem(0)};
    height: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: ${rem(0)};
    align-items: center;
    height: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
  }
`;

const Header = styled.h1`
  margin: 0;
  color: #2d3b4e;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: ${rem(0.88)};
`;

const IndexPage = () => {
  const [isMobile, setIsMobile] = React.useState(
    window.innerWidth <= parseInt(breakpoints.tablet)
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= parseInt(breakpoints.tablet));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavBar />
      <SideMenuWrapper>
        <SideMenu />
      </SideMenuWrapper>
      {isMobile && <MobileHeader />}
      <Wrapper>
        {!isMobile && <Header>Transfers</Header>}
        <TitlesContainer />
        <TransferByDate />
      </Wrapper>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Transfer List</title>;
