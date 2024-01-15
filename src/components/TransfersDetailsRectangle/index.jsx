import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

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
  margin-bottom: ${rem(11)};
  margin-top: ${rem(26)};
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
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
