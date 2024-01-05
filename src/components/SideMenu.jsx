import React from 'react'
import styled from 'styled-components'
import LogoImage from '../images/Logo.svg'
import LiveViewImage from '../images/Live_view.svg'
import ScheduledImage from '../images/Scheduled.svg'
import StatisticsImage from '../images/Statistics.svg'
import RevenueImage from '../images/Revenue.svg'
import SettingsImage from '../images/Settings.svg'
import SupportImage from '../images/Support.svg'
import CollapseImage from '../images/Collapse.svg'

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
// fazer o collapse para o sidebar e ajustar padding/margin das images
const SideMenu = () => {
  return (
    <SideMenuContainer>
      <Logo src={LogoImage} alt="Logo" />
      <ButtonContainer>
        <ButtonImage src={LiveViewImage} alt="Live view" />
        <ButtonImage src={ScheduledImage} alt="Scheduled" />
        <ButtonImage src={StatisticsImage} alt="Statistics" />
        <ButtonImage src={RevenueImage} alt="Revenue" />
        <ButtonImage src={SettingsImage} alt="Settings" />
      </ButtonContainer>
      <BottomButtonContainer>
        <BottomButtonImage src={SupportImage} alt="Support" />
        <BottomButtonImage src={CollapseImage} alt="Collapse" />
      </BottomButtonContainer>
    </SideMenuContainer>
  )
}

export default SideMenu
