import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import LogoImage from '../../images/Logo.svg'
import LiveViewImage from '../../images/Live_view.svg'
import ScheduledImage from '../../images/Scheduled-white.svg'
import ScheduleBg from '../../images/Selected_schedule.svg'
import StatisticsImage from '../../images/Statistics.svg'
import RevenueImage from '../../images/Revenue.svg'
import SettingsImage from '../../images/Settings.svg'
import SupportImage from '../../images/Support.svg'
import CollapseImage from '../../images/Collapse.svg'
import { breakpoints } from '../../breakpoints'

const SideMenuContainer = styled.div`
  width: ${rem(82)};
  min-height: ${rem(1010)};
  display: flex;
  flex-direction: column;
  border-radius: ${rem(0)} ${rem(8)} ${rem(8)} ${rem(0)};
  background: #fff;
  box-shadow: ${rem(0)} ${rem(0)} ${rem(8)} ${rem(0)} rgba(45, 59, 78, 0.1);
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }

  @media (max-width: ${breakpoints.laptop}) {
    display: none;
  }
`

const Logo = styled.img`
  width: 100%;
  padding: ${rem(16)};
  box-sizing: border-box;
  cursor: pointer;
`

const ButtonContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${rem(16)};
  box-sizing: border-box;
  cursor: pointer;
`
const ButtonImageWrapper = styled.div`
  width: ${rem(44)};
  height: ${rem(44)};
  margin-bottom: ${rem(16)};
  border-radius: 8px;
  background: url(${(props) => (props.scheduled ? props.scheduleBg : 'none')});
  background-size: cover;
  display: flex;
  align-items: center;
  padding-top: 14px;
  justify-content: center;
`

const ButtonImage = styled.img`
  width: ${rem(32)};
  height: ${rem(32)};
  margin-bottom: ${rem(16)};
  border-radius: 8px;
`

const BottomButtonContainer = styled.div`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${rem(16)};
    box-sizing: border-box;
    cursor: pointer;
  }
`

const BottomButtonImage = styled.img`
  width: ${rem(32)};
  height: ${rem(32)};
  margin-bottom: ${rem(16)};
`

const SideMenu = () => {
  return (
    <SideMenuContainer>
      <Logo src={LogoImage} alt="Logo" aria-hidden="true" />
      <ButtonContainer>
        <ButtonImage src={LiveViewImage} alt="Live view" aria-hidden="true" />
        <ButtonImageWrapper scheduled scheduleBg={ScheduleBg}>
          <ButtonImage
            src={ScheduledImage}
            alt="Scheduled"
            aria-hidden="true"
          />
        </ButtonImageWrapper>
        <ButtonImage
          src={StatisticsImage}
          alt="Statistics"
          aria-hidden="true"
        />
        <ButtonImage src={RevenueImage} alt="Revenue" aria-hidden="true" />
        <ButtonImage src={SettingsImage} alt="Settings" aria-hidden="true" />
      </ButtonContainer>
      <BottomButtonContainer>
        <BottomButtonImage
          src={SupportImage}
          alt="Support"
          aria-hidden="true"
        />
        <BottomButtonImage
          src={CollapseImage}
          alt="Collapse"
          aria-hidden="true"
        />
      </BottomButtonContainer>
    </SideMenuContainer>
  )
}

export default SideMenu
