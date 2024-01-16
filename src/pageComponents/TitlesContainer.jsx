import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { breakpoints } from '../breakpoints/index'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2.8rem 13.8rem 13.39rem 11rem 16rem 10.25rem;
  gap: ${rem(20)};
  max-width: ${rem(1059)};
  width: 100%;
  height: ${rem(34)};
  flex-shrink: 0;
  border-radius: ${rem(6)};
  margin-top: ${rem(20)};
  background-color: rgba(45, 59, 78, 0.04);
  margin-top: ${rem(20)};
  align-items: center;
  padding-left: ${rem(14)};

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: 2.5rem 12.2rem 11.5rem 10rem 6rem 2rem 1.6rem 1.6rem 1.6rem;
    gap: ${rem(15)};
    padding-left: ${rem(10)};
    width: 94%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
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
    <Wrapper>
      <Title>Status</Title>
      <Title>Traveler</Title>
      <Title>Arrival/Departure</Title>
      <Title>From/To</Title>
      <Title>Opportunities</Title>
    </Wrapper>
  )
}

export default TitlesContainer
