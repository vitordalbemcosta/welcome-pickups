import React from 'react'
import styled from 'styled-components'
import LogoImage from '../images/Logo.svg'
import Button1Image from '../images/Live_view.svg'
import Button2Image from '../images/Scheduled.svg'
import Button3Image from '../images/Statistics.svg'
import Button4Image from '../images/Revenue.svg'
import Button5Image from '../images/Settings.svg'
import BottomButton1Image from '../images/Support.svg'
import BottomButton2Image from '../images/Collapse.svg'

const SideMenuContainer = styled.div`
  width: 82px;
  height: 942px;
  top: 20px;
  flex-shrink: 0;
  border-radius: 0px 8px 8px 0px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(45, 59, 78, 0.1);
  display: flex;
  flex-direction: column;
`

const Logo = styled.img`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  cursor: pointer;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  box-sizing: border-box;
  cursor: pointer;
`

const ButtonImage = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 16px;
`

const BottomButtonContainer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  cursor: pointer;
`

const BottomButtonImage = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 16px;
`

const SideMenu = () => {
  return (
    <SideMenuContainer>
      <Logo src={LogoImage} alt="Logo" />
      <ButtonContainer>
        <ButtonImage src={Button1Image} alt="Live view" />
        <ButtonImage src={Button2Image} alt="Scheduled" />
        <ButtonImage src={Button3Image} alt="Statistics" />
        <ButtonImage src={Button4Image} alt="Revenue" />
        <ButtonImage src={Button5Image} alt="Settings" />
      </ButtonContainer>
      <BottomButtonContainer>
        <BottomButtonImage src={BottomButton1Image} alt="Support" />
        <BottomButtonImage src={BottomButton2Image} alt="Collapse" />
      </BottomButtonContainer>
    </SideMenuContainer>
  )
}

export default SideMenu
