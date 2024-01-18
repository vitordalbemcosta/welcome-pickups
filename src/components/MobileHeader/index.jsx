import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../../images/Logo.svg'
import MobileHeaderItemsContainer from '../MobileHeaderItemsContainer'
import LogoutButton from '../LogoutButton'
import WelcomeForPartners from '../../images/Group1.svg'
import { rem } from 'polished'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${rem(64)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(45, 59, 78, 0.1);
  z-index: 1;
`

const Sidebar = styled.div`
  width: ${rem(240)};
  height: 100%;
  background: #fff;
  box-shadow: 0px 0px 10px 0px #19283e;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-240px')};
  transition: left 0.3s ease-in-out;
  z-index: 2;
  border-radius: 0px 12px 12px 0px;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1;
`

const HeaderButton = styled.button`
  font-size: ${rem(18)};
  background: transparent;
  border: none;
  cursor: pointer;
`

const Top = styled.div`
  width: 100%;
  height: ${rem(91)};
  border-radius: 0px 12px 12px 0px;
  background: #f4f5f6;
`
const LogoIcon = styled.img`
  width: ${rem(44)};
  height: ${rem(44)};
  margin: ${rem(24)};
`

const WelcomeForPartnets = styled.img`
  width: ${rem(104)};
  height: ${rem(37)};
  margin-bottom: ${rem(23)};
`
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <>
      <Container>
        <HeaderButton onClick={toggleSidebar}>☰</HeaderButton>
      </Container>
      <Sidebar isOpen={sidebarOpen}>
        <Top>
          <LogoIcon src={Logo} alt="" />
          <WelcomeForPartnets src={WelcomeForPartners} alt="" />
        </Top>
        <MobileHeaderItemsContainer />
        <LogoutButton />
      </Sidebar>
      <Overlay isOpen={sidebarOpen} onClick={toggleSidebar} />
    </>
  )
}

export default Header
