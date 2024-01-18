import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const LogoutButton = styled.button`
  width: ${rem(212)};
  height: ${rem(56)};
  flex-shrink: 0;
  border-radius: ${rem(4)};
  background: #f4f5f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2d3b4e;
  font-size: ${rem(16)};
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  box-shadow: 0px ${rem(2)} ${rem(4)} rgba(45, 59, 78, 0.1);

  &:hover {
    background: #e3e5e8;
  }
`

const LogoutButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Logout = () => {
  const handleLogout = () => {}

  return (
    <LogoutButtonContainer>
      <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
    </LogoutButtonContainer>
  )
}

export default Logout
