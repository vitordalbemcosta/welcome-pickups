import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import TakeOff from '../../images/Takeoff_Icon.svg'
import TimeIcon from '../../images/Time_Icon.svg'
import { breakpoints } from '../../breakpoints'

const RectangleContainer = styled.div`
  width: ${rem(294)};
  height: ${rem(36)};
  flex-shrink: 0;
  border-radius: ${rem(18)};
  background: rgba(45, 59, 78, 0.04);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;

  @media (max-width: ${breakpoints.laptop}) {
    width: 66%;
    height: ${rem(43)};
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 60%;
    border-radius: 22px;
    border: 1px solid rgba(45, 59, 78, 0.08);
    background: #fff;
    box-shadow: 0px 2px 10px 0px rgba(45, 59, 78, 0.04);
    height: 45px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 50%;
    border-radius: 22px;
    border: 1px solid rgba(45, 59, 78, 0.08);
    background: #fff;
    box-shadow: 0px 2px 10px 0px rgba(45, 59, 78, 0.04);
    height: 45px;
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`

const VerticalBar = styled.div`
  width: 1px;
  height: 20px;
  background: rgba(45, 59, 78, 0.08);
`

const Icon = styled.img`
  width: ${rem(20)};
  height: ${rem(20)};
  flex-shrink: 0;
  margin-right: ${rem(8)};
`

const Number = styled.span`
  color: rgba(45, 59, 78, 0.5);
  font-size: ${rem(14)};
  font-weight: 600;

  @media (max-width: ${breakpoints.laptop}) {
    width: 95%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
  }
`

const FlightStatus = styled.span`
  color: rgba(66, 197, 148, 1);
  font-size: ${rem(14)};
  font-weight: 600;

  @media (max-width: ${breakpoints.laptop}) {
    width: 100%;
    font-size: ${rem(12)};
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    font-size: ${rem(12)};
  }
`

const FlightStatusIcons = ({ flightNumber, flightTime, flightStatus }) => {
  if (!flightStatus) {
    return null
  }

  return (
    <RectangleContainer>
      <IconContainer>
        <Icon src={TakeOff} alt="Takeoff Icon" />
        <Number>{flightNumber}</Number>
      </IconContainer>
      <VerticalBar />
      <IconContainer>
        <Icon src={TimeIcon} alt="Time Icon" />
        <Number>{flightTime}</Number>
      </IconContainer>
      <VerticalBar />
      <IconContainer>
        <FlightStatus>{flightStatus}</FlightStatus>
      </IconContainer>
    </RectangleContainer>
  )
}

export default FlightStatusIcons
