import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import NextDaysButtons from '../../images/Next_days.svg'

const StyledButton = styled.button`
  background: url(${NextDaysButtons}) no-repeat;
  width: ${rem(226)};
  height: ${rem(52)};
  border: none;
  cursor: pointer;
`

const NextPageButton = ({ onClick }) => {
  const handleButtonClick = () => {
    onClick()
  }

  return <StyledButton onClick={handleButtonClick} />
}

export default NextPageButton
