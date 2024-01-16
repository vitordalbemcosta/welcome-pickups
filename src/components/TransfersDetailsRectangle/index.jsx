import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { breakpoints } from '../../breakpoints'

const RectangleContainer = styled.div`
  width: ${rem(294)};
  height: ${rem(36)};
  flex-shrink: 0;
  border-radius: ${rem(18)};
  background: rgba(45, 59, 78, 0.04);
  display: flex;
  align-items: center;
  padding: 0 ${rem(16)};
  margin-bottom: ${rem(11)};
  margin-top: ${rem(26)};

  @media (max-width: ${breakpoints.laptop}) {
    width: 58%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 11px;
`

const Icon = styled.img`
  width: ${rem(20)};
  height: ${rem(20)};
  flex-shrink: 0;
  margin-right: ${rem(14)};
`

const Number = styled.span`
  font-size: ${rem(12)};
  margin-left: -5px;
  color: rgba(45, 59, 78, 0.5);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const OpportunityIcons = ({ opportunities }) => {
  return (
    <RectangleContainer>
      {opportunities &&
        opportunities.map((opportunity, index) => (
          <IconContainer key={index}>
            <Icon src={opportunity.icon} alt={`Opportunity ${index}`} />
            <Number>{opportunity.number}</Number>
          </IconContainer>
        ))}
    </RectangleContainer>
  )
}

const TransfersDetailsRectangle = ({ opportunities }) => {
  return (
    <div>
      <OpportunityIcons opportunities={opportunities} />
    </div>
  )
}

export default TransfersDetailsRectangle