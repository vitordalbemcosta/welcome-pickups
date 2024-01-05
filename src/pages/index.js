// Index.js
import * as React from "react";
import "../styles/global.css";
// import TransferList from "../pageComponents/TransferList";
// import TransferListDetail from "../pageComponents/TransferListDetail";
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
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-left: 82px;
`;

//TODO:Adicionar um Favicon com a logo da Welcome

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <SideMenuWrapper>
        <SideMenu />
      </SideMenuWrapper>
      <Wrapper>
        <TransferByDate />
        {/* <TransferList />
        <TransferListDetail /> */}
      </Wrapper>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Transfer List</title>;
