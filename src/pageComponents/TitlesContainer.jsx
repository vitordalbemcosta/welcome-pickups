import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2.8rem 13.8rem 13.39rem 11rem 16rem 10.25rem;
  gap: ${rem(20)};
  width: ${rem(1130)};
  height: ${rem(34)};
  flex-shrink: 0;
  border-radius: ${rem(6)};
  background-color: rgba(45, 59, 78, 0.04);
  margin-top: ${rem(20)};
  align-items: center;
  padding-left: ${rem(14)};
`

const Title = styled.h4`
  margin: 0;
  color: rgba(45, 59, 78, 0.5);
  font-family: 'Museo Sans', sans-serif;
  font-size: ${rem(11)};
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: ${rem(0.88)};
`

const TitlesContainer = () => {
  return (
    <div>
      <Wrapper>
        <Title>Status</Title>
        <Title>Traveler</Title>
        <Title>Arrival/Departure</Title>
        <Title>From/To</Title>
        <Title>Opportunities</Title>
      </Wrapper>
    </div>
  )
}

export default TitlesContainer
