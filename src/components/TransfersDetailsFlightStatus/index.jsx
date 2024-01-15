import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import TakeOff from '../../images/Takeoff_Icon.svg'
import TimeIcon from '../../images/Time_Icon.svg'

const RectangleContainer = styled.div`
  width: ${rem(284)};
  height: ${rem(36)};
  flex-shrink: 0;
  border-radius: ${rem(18)};
  background: rgba(45, 59, 78, 0.04);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${rem(16)};
  margin-bottom: ${rem(32)};
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`

const VerticalBar = styled.div`
  width: 1px;
  height: 20px;
  flex-shrink: 0;
  background: rgba(45, 59, 78, 0.08);
  margin: 0 14px;
`

const Icon = styled.img`
  width: ${rem(20)};
  height: ${rem(20)};
  flex-shrink: 0;
  margin-right: ${rem(8)};
`

const Number = styled.span`
  color: rgba(45, 59, 78, 1);
  font-size: ${rem(14)};
`

//todo: need to investigate the values for flight status and display them

const FlightStatusIcons = ({ isFlightOnTime }) => {
  return (
    <RectangleContainer>
      <IconContainer>
        <Icon src={TakeOff} alt="Takeoff Icon" />
        <VerticalBar />
        <Number>{isFlightOnTime?.flightNumber}</Number>
      </IconContainer>
      <IconContainer>
        <Icon src={TimeIcon} alt="Time Icon" />
        <VerticalBar />
        <Number>{isFlightOnTime?.flightTime}</Number>
      </IconContainer>
      <IconContainer>
        <Icon src={TakeOff} alt="Flight Status Icon" />
        <Number>{isFlightOnTime?.flightStatus}</Number>
      </IconContainer>
    </RectangleContainer>
  )
}

export default FlightStatusIcons
