import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${rem(20)};
  cursor: pointer;
`

const ItemImage = styled.img`
  width: ${rem(24)};
  height: ${rem(24)};
  margin-right: ${rem(10)};
`

const ItemText = styled.span`
  color: rgba(45, 59, 78, 0.48);
  font-size: ${rem(15)};
  margin-left: ${rem(5)};
  font-weight: 600;

  &:hover {
    background: #e3e5e8;
    border-radius: 10%;
  }
`

const MobileHeaderItem = ({ imageSrc, text }) => {
  return (
    <Container>
      <ItemImage src={imageSrc} alt="Mobile Header Item" />
      <ItemText>{text}</ItemText>
    </Container>
  )
}

export default MobileHeaderItem
